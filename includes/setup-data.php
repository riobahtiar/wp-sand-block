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

	}

	public static function deactivate() {

	}



	public static function cv19_set_credentials() {
		$data = self::cv19_fetch_credentials();
		if ( isset( $data ) ) {
			$data['created_at'] = date( 'Y-m-d H:m:s' );
			add_option( self::$credential_option, $data );
		}
	}

}
