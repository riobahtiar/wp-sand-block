<?php
/**
 * Helper
 */

namespace SandBlock\Helper;

/**
 * String Converter from camelCase / PascalCase to snake_case
 *
 * @param $string
 *
 * @return string
 * @link https://stackoverflow.com/questions/1993721/how-to-convert-pascalcase-to-pascal-case
 */

function decamelize( $string ): string {
	return strtolower( str_replace( ' ', '_', preg_replace( [
		'/([a-z\d])([A-Z])/',
		'/([^_])([A-Z][a-z])/'
	], '$1_$2', $string ) ) );
}

function decamelize_key( $arr, $ignore = array( 'date', 'updated' ) ): array {
	$result = array();
	foreach ( $arr as $item => $i ) {
		if ( in_array( $item, $ignore ) ) {
			continue;
		}
		$result[ decamelize( $item ) ] = $i;
	}

	return $result;
}

/**
 * Format Response Data
 *
 * @param array $arr
 * @param array $ignore
 *
 * @return array
 */

function human_format( $arr = array(), $ignore = array( 'date', 'updated' ) ): array {
	$result = array();
	foreach ( $arr as $item => $i ) {

		if ( in_array( $item, $ignore ) || ! is_numeric($i) ) {
			continue;
		}

		$result[ decamelize( $item ) ] = number_format_i18n( $i );
	}

	return $result;
}


/**
 * Reformat Response
 *
 * @param array $default
 *
 * @return array
 */

function reformat_response(
	$default = array(
		'cached_response' => 'no',
		'data'            => array(
			'Not found'
		)
	)
): array {
	$response                              = array();
	$response['header']['cached_response'] = $default['cached_response'];
	$response['header']['modified_at']     = date( 'Y-m-d\TH:i:s', $default['modified_at'] / 1000 );
	$response['data']['raw']               = decamelize_key( $default['data'] );
	$response['data']['human_readable']    = human_format( $default['data'] );

	return $response;
}
