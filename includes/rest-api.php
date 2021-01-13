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
	public static $api_path = 'sand-block/v1';

	public static function Init() {
		add_action( 'rest_api_init', array( __CLASS__, 'c19_api_registration' ) );
	}

	public static function c19_api_registration() {
		register_rest_route( self::$api_path, '/global-stats', array(
			'methods'             => 'GET',
			'callback'            => array( __CLASS__, 'c19_global_api_callback' ),
			'permission_callback' => '__return_true'
		) );
	}

	public static function c19_fetch_data( $endpoint = '/summary' ) {
		$credential = get_option( 'sandblock_cv19_credentials' );
		$args       = array(
			'headers' => array(
				'X-Access-Token' => $credential['Key'],
			),
		);
		$response   = wp_remote_get( COVID19_PUBLIC_API . $endpoint, $args );
		if ( is_wp_error( $response ) || 200 != wp_remote_retrieve_response_code( $response ) ) {
			return false;
		}

		return json_decode( wp_remote_retrieve_body( $response ), true );
	}

	/**
	 * CB Response Data
	 *
	 * @todo Move response header to global function that can used by other cb response
	 *
	 * @return array
	 */

	public static function c19_get_global_data() {
		$response                       = array();
		$response['header']['api_name'] = __FUNCTION__;
		$transient_name                 = 'cv19_global_data';
		$data                           = get_transient( $transient_name );

		// Check if data valid, and add header information
		if ( is_array( $data ) && 0 != $data['Global']['NewConfirmed'] ) {
			$response['header']['cached_response'] = 'yes';
			$response['header']['date']            = $data['Date'];
			$response['header']['process_time']    = (float) timer_stop( 0, 3 );
			$response['data']                      = Helper\decamelize_key( $data['Global'] );

			return $response;
		} else {
			$data = self::c19_fetch_data( '/summary' );
			set_transient( $transient_name, $data, DEFAULT_TTL );

			$response['header']['cached_response'] = 'no';
			$response['header']['date']            = $data['Date'];
			$response['header']['process_time']    = (float) timer_stop( 0, 3 );
			$response['data']                      = Helper\decamelize_key( $data['Global'] );

			return $response;
		}
	}

	public static function c19_global_api_callback() {
		$data = self::c19_get_global_data();

		if ( empty( $data ) ) {
			return new \WP_Error( 'no_data', 'Oopss!! Data is not available or maybe the data provider website is down. check out https://api.covid19api.com/. Please try again later.', array( 'status' => 200 ) );
		}

		return new \WP_REST_Response( $data, 200 );
	}
}


