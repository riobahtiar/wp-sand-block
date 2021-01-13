<?php
/**
 * Helper
 */
namespace SandBlock\Helper;

/**
 * String Converter from camelCase & PascalCase to snake_case
 * @param $string
 *
 * @return string
 * @link https://stackoverflow.com/questions/1993721/how-to-convert-pascalcase-to-pascal-case
 */

function decamelize($string): string {
    return strtolower(str_replace(' ', '_', preg_replace(['/([a-z\d])([A-Z])/', '/([^_])([A-Z][a-z])/'], '$1_$2', $string)));
}

function decamelize_key($arr): array {
	$result = array();
	foreach ($arr as $item => $i){
		$result[decamelize($item)] = $i;
	}

	return $result;
}

/**
 * Format Response Data
 */

function format_response($data=array()):array{
	$new_response = array();

}
