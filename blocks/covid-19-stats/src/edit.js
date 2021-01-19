/**
 * Edit Block
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import countryData from './data/country.json';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className={ 'wsb-editor' }>
				<h3> { __( 'COVID-19 Statistic' ) } </h3>
				<div className={ 'field-form' }>
					<SelectCountry
						setAttributes={ setAttributes }
						attributes={ attributes }
					/>
				</div>
			</div>
		</div>
	);
}

const SelectCountry = withState( {
	country: 'world',
} )( ( { attributes, setAttributes, setState } ) => (
	<SelectControl
		label={__('Select Country')} 
		value={ attributes.country }
		options={ countryData }
		onChange={ ( country ) => {
			setState( { country } ), setAttributes( { country } );
		} }
	/>
) );
