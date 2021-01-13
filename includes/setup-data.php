<?php
/**
 * Handle Activation & Deactivation
 * @since 1.0.0
 */

namespace SandBlock\Core;

class SetupData {

	public static $response;
	public static $credentials;
	public static $credential_option = 'sandblock_cv19_credentials';
	private static $username = 'go-corona-admin';
	private static $password = '5577YvzU4bK63a1WIQ3Z043H';

	public static function activate() {
		self::cv19_set_credentials();
	}

	public static function deactivate() {
		self::purge_site_option();
	}

	public static function purge_site_option() {
		delete_option( self::$credential_option );
	}

	public static function cv19_fetch_credentials() {

		$args = array(
			'blocking' => true,
			'headers'  => array(
				'Authorization' => 'Basic ' . base64_encode( self::$username . ':' . self::$password ),
			),
			'body'     => array(
				'Email'        => get_option( 'admin_email' ),
				'Subscription' => 'basic'
			)
		);

		$response = wp_remote_post( COVID19_PUBLIC_API . '/auth/access_token', $args );

		if ( is_wp_error( $response ) || 200 != wp_remote_retrieve_response_code( $response ) ) {
			return false;
		}

		return json_decode( wp_remote_retrieve_body( $response ), true );
	}

	public static function cv19_set_credentials() {
		$data = self::cv19_fetch_credentials();
		if ( isset( $data ) ) {
			$data['created_at'] = date( 'Y-m-d H:m:s' );
			add_option( self::$credential_option, $data );
		}
	}

}
