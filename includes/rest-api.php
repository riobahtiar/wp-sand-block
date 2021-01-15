<?php
/**
 * SandBlock\API\Register_API
 * Register Custom RestApi
 *
 * @since 1.0.0
 */

namespace SandBlock\Core;

use SandBlock\Helper;

class Register_API {
	public static $api_path        = 'sand-block/v1/covid-19';
	public static $fake_user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';

	/*
	 * Loader
	 */
	public static function Init() {
		add_action( 'rest_api_init', array( __CLASS__, 'c19_api_registration' ) );
	}

	/**
	 * Register API
	 */
	public static function c19_api_registration() {
		// Global Data
		register_rest_route(
			self::$api_path,
			'/global',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( __CLASS__, 'c19_global_api_callback' ),
				'permission_callback' => '__return_true',
			)
		);

		// Country Data
		register_rest_route(
			self::$api_path,
			'/country/(?P<country>[a-zA-Z0-9-]+)',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( __CLASS__, 'c19_country_api_callback' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * API Fetcher
	 *
	 * @param string $endpoint
	 *
	 * @return false|mixed
	 */
	public static function c19_fetch_data( $endpoint = '/v3/covid-19/all' ) {
		// Use fake user-agent value instead builtin WP user-agent to bypass cloudflare security rule
		$args     = array(
			'user-agent' => self::$fake_user_agent,
		);
		$response = wp_remote_get( COVID19_PUBLIC_API . $endpoint, $args );
		if ( is_wp_error( $response ) || 200 != wp_remote_retrieve_response_code( $response ) ) {
			return false;
		}

		return json_decode( wp_remote_retrieve_body( $response ), true );
	}

	/**
	 * Cache data and add header information
	 *
	 * @param string $route
	 * @param string $transient_name
	 *
	 * @return array
	 */

	public static function c19_get_data( $route = '', $transient_name = 'wsb_cv19_data' ) {
		$data = get_transient( $transient_name );

		if ( is_array( $data ) && isset( $data['cases'] ) ) {

			return (array) Helper\reformat_response( array(
				'cached_response' => 'yes',
				'modified_at'     => $data['updated'],
				'data'            => $data,
			) );

		} else {
			$data = self::c19_fetch_data( $route );

			if ( ! is_array( $data ) && ! isset( $data['cases'] ) ) {
				return $data;
			}

			set_transient( $transient_name, $data, DEFAULT_TTL );

			return (array) Helper\reformat_response( array(
				'cached_response' => 'no',
				'modified_at'     => $data['updated'],
				'data'            => $data,
			) );

		}
	}

	/**
	 * Global Data Callback
	 *
	 * @return \WP_Error | \WP_REST_Response
	 */
	public static function c19_global_api_callback() {
		$data = self::c19_get_data( '/v3/covid-19/all', 'wsb_cv19_global_data' );

		if ( empty( $data ) ) {
			return new \WP_Error( 'no_data', 'Oopss!! Data is not available or maybe the data provider website is down. check out ' . COVID19_PUBLIC_API . '. Please try again later.', array( 'status' => 200 ) );
		}

		return new \WP_REST_Response( $data, 200 );
	}

	/**
	 * Country Data Callback
	 *
	 * @param $request
	 *
	 * @return \WP_Error | \WP_REST_Response
	 */
	public static function c19_country_api_callback( $request ) {
		$country = sanitize_title( $request['country'] );
		$data    = self::c19_get_data( '/v3/covid-19/countries/' . $country, 'wsb_cv19_data_country__' . $country );

		if ( empty( $data ) ) {
			return new \WP_Error( 'no_data', 'Oopss!! Data is not available or maybe the data provider website is down. check out ' . COVID19_PUBLIC_API . '. Please try again later.', array( 'status' => 200 ) );
		}

		return new \WP_REST_Response( $data, 200 );
	}
}


