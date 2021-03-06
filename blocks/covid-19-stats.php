<?php
/**
 * Handle Rendered Frontend
 *
 * @package wp-sand-block
 * @link https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 */

 use SandBlock\Core\Register_API;

function covid_19_stats_render_callback( $block_attributes, $content ) {
	$area = sanitize_title( $block_attributes['country'] ?? 'world' );
	if ( isset( $block_attributes ) && $area !== 'world' ) {
		$data  = Register_API::c19_get_data( '/v3/covid-19/countries/' . $area, 'wsb_cv19_data_country__' . $area );
		$notes = sprintf( __( "Coronavirus data from <b>%s</b> is Provided by <b>worldometers.info</b> via <b>disease.sh</b> public API's", 'wp-sand-block' ), $data['data']['raw']['country'] );
	} else {
		$data  = Register_API::c19_get_data( '/v3/covid-19/all', 'wsb_cv19_world_data' );
		$notes = __( "Coronavirus data is Provided by <b>worldometers.info</b> via <b>disease.sh</b> public API's", 'wp-sand-block' );
	}
	$data_raw = $data['data']['raw'];
	$data_hr  = $data['data']['human_readable'];

	$today_cases     = $data_hr['today_cases'] ? '<div class="wsb-card__textSubNumber">' . sprintf( __( 'Today Cases: %s', 'wp-sand-block' ), $data_hr['today_cases'] ) . '</div>' : '';
	$critical        = $data_hr['critical'] ? '<div class="wsb-card__textSubNumber">' . sprintf( __( 'Critical: %s', 'wp-sand-block' ), $data_hr['critical'] ) . '</div>' : '';
	$today_recovered = $data_hr['today_recovered'] ? '<div class="wsb-card__textSubNumber">' . sprintf( __( 'Today Recovered: %s', 'wp-sand-block' ), $data_hr['today_recovered'] ) . '</div>' : '';
	$today_deaths    = $data_hr['today_deaths'] ? '<div class="wsb-card__textSubNumber">' . sprintf( __( 'Today Deaths: %s', 'wp-sand-block' ), $data_hr['today_deaths'] ) . '</div>' : '';

	$content = '<div class="wsb-main-container">
		<div class="wsb">
			<div class="wsb-card wsb-confirmed">
				<div class="wsb-card__text">
					<h4 class="wsb-card__textTitle">' . __( 'Confirmed', 'wp-sand-block' ) . '</h4>
					<div class="wsb-card__textNumber">' . $data_hr['cases'] . '</div>
					' . $today_cases . '
				</div>
				<div class="wsb-card__icon">
					<img src="' . plugin_dir_url( __FILE__ ) . 'covid-19-stats/src/img/virus.svg" class="wsb-card__iconImg" alt="">
				</div>
			</div>
			<div class="wsb-card wsb-active">
				<div class="wsb-card__text">
					<h4 class="wsb-card__textTitle">' . __( 'Active Cases', 'wp-sand-block' ) . '</h4>
					<div class="wsb-card__textNumber">' . $data_hr['active'] . '</div>
					' . $critical . '
				</div>
				<div class="wsb-card__icon">
					<img src="' . plugin_dir_url( __FILE__ ) . 'covid-19-stats/src/img/sick.svg" class="wsb-card__iconImg" alt="">
				</div>
			</div>
			<div class="wsb-card wsb-recovered">
				<div class="wsb-card__text">
					<h4 class="wsb-card__textTitle">' . __( 'Recovered', 'wp-sand-block' ) . '</h4>
					<div class="wsb-card__textNumber">' . $data_hr['recovered'] . '</div>
					' . $today_recovered . '
				</div>
				<div class="wsb-card__icon">
					<img src="' . plugin_dir_url( __FILE__ ) . 'covid-19-stats/src/img/heart.svg" class="wsb-card__iconImg" alt="">
				</div>
			</div>
			<div class="wsb-card wsb-deaths">
				<div class="wsb-card__text">
					<h4 class="wsb-card__textTitle">' . __( 'Deaths', 'wp-sand-block' ) . '</h4>
					<div class="wsb-card__textNumber">' . $data_hr['deaths'] . '</div>
					' . $today_deaths . '
				</div>
				<div class="wsb-card__icon">
					<img src="' . plugin_dir_url( __FILE__ ) . 'covid-19-stats/src/img/warning.svg" class="wsb-card__iconImg" alt="">
				</div>
			</div>
		</div>
		<div class="wsb-notes"> 
			' . sprintf( __( 'Last updated: <time>%s</time>. ', 'wp-sand-block' ), date_i18n( get_option( 'date_format' ) . ' ' . get_option( 'time_format' ), strtotime( $data['header']['modified_at'] ) ) ) .
			' <span class="credits"> ' . $notes . '</span>
		</div>	
	</div>';

	return $content;

}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function covid_19_stats_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir               = dirname( __FILE__ );
	$script_asset_path = "$dir/covid-19-stats/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "wp-sand-block/covid-19-stats" block first.'
		);
	}

	$index_js     = 'covid-19-stats/build/index.js';
	$script_asset = require $script_asset_path;
	wp_register_script(
		'covid-19-stats-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'covid-19-stats/build/index.css';
	wp_register_style(
		'covid-19-stats-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'covid-19-stats/build/style-index.css';
	wp_register_style(
		'covid-19-stats-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wp-sand-block/covid-19-stats',
		array(
			'editor_script'   => 'covid-19-stats-block-editor',
			'editor_style'    => 'covid-19-stats-block-editor',
			'style'           => 'covid-19-stats-block',
			'render_callback' => 'covid_19_stats_render_callback',
		)
	);
}
add_action( 'init', 'covid_19_stats_block_init' );
