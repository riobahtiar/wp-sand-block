<?php
/**
 * Plugin Name:     WP Sand Block
 * Plugin URI:      https://rio.my.id
 * Description:     Block Labs - Do not use in production
 * Author:          Rio Bahtiar
 * Author URI:      https://rio.my.id
 * Text Domain:     wp-sand-block
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wp_Sand_Block
 */

define( 'WSB__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

require_once WSB__PLUGIN_DIR . 'includes/settings.php';
require_once WSB__PLUGIN_DIR . 'includes/helper.php';
require_once WSB__PLUGIN_DIR . 'includes/filters.php';
require_once WSB__PLUGIN_DIR . 'includes/rest-api.php';

/**
 * Load NS
 */

use SandBlock\Core\Register_API;
// use SandBlock\Core\SetupData;

/**
 * Activate & Deactivate Hook
 */
//
// function activate_wp_sand_block() {
// SetupData::activate();
// }
//
// function deactivate_wp_sand_block() {
// SetupData::deactivate();
// }
//
// register_activation_hook( __FILE__, 'activate_wp_sand_block' );
// register_deactivation_hook( __FILE__, 'deactivate_wp_sand_block' );

/**
 * Register Function
 */

Register_API::Init();

/**
 * Block
 */

require_once 'blocks/covid-19-stats.php';



