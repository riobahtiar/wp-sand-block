import apiFetch from '@wordpress/api-fetch';
import { useState } from '@wordpress/element';

console.log( '===== DEBUG START =====' );
console.log( '===== DEBUG STOP =====' );

export const GlobalWidget = () => {
	return (
		<div className="wsb-main-container">
			<div className="wsb-wrapper">
				<ItemData />
			</div>
		</div>
	);
};

const ItemData = () => {
	const [ CvGlobal, setCvGlobal ] = useState( null );
	const fetchData = apiFetch( {
		path: '/sand-block/v1/covid-19/global',
	} ).then( ( corona ) => {
		setCvGlobal( corona.data.human_readable );
	} );
	// Validate data
	if ( CvGlobal ) {
		return (
			<div className="item-data">
				New Confirmed: { CvGlobal.today_cases } <br></br>
				Total Confirmed: { CvGlobal.cases }
			</div>
		);
	} else {
		return <p>Please Wait...</p>;
	}
};
