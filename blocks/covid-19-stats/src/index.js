/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { iconVirusGlobal } from './icon';
import './style.scss';
import Edit from './edit';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'wp-sand-block/covid-19-stats', {
	title: __( 'COVID-19 Stats', 'wp-sand-block' ),
	description: __( 'COVID-19 Statistics', 'wp-sand-block' ),
	category: 'widgets',
	icon: iconVirusGlobal,
	example: {
		attributes: {
			country: 'world',
		},
	},
	keywords: [
		__( 'statistic' ),
		__( 'corona' ),
		__( 'world' ),
		__( 'covid-19' ),
	],
	attributes: {
		country: {
			type: 'string',
		},
	},

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
