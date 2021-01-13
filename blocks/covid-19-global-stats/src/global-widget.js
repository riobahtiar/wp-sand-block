import apiFetch from '@wordpress/api-fetch';
import {useState} from "@wordpress/element";


console.log('===== DEBUG START =====');

// let data2;
// apiFetch({path: '/sand-block/v1/global-stats'}).then(posts => {
// 	posts.data.push(data2)
// });


console.log('===== DEBUG STOP =====');

export const GlobalWidget = () => {
	return (
		<div className="wsb-main-container">
			<div className="wsb-wrapper">
				<ItemData/>
			</div>
		</div>
	);
};


const ItemData = () => {
	const [CvGlobal, setCvGlobal] = useState(null);
	const fetchData = apiFetch({path: '/sand-block/v1/global-stats'})
		.then(posts => {
			setCvGlobal(posts.data)
		});
	// Validate data
	if (CvGlobal) {
		return (
			<div className="item-data">
				New Confirmed: {CvGlobal.new_confirmed} <br></br>
				Total Confirmed: {CvGlobal.total_confirmed}
			</div>
		)
	} else {
		return (
			<p>Please Wait...</p>
		)
	}


}
//
// class CovidCardActiveCase extends Component {
//
// 	constructor() {
// 		super(null);
// 		this.state = {
// 			error: null,
// 			isLoaded: false,
// 			items: []
// 		};
// 	}
//
// 	componentDidMount() {
// 		apiFetch({path: '/sand-block/v1/global-stats'})
// 			.then(res => res.json())
// 			.then(
// 				(result) => {
// 					this.setState({
// 						isLoaded: true,
// 						items: result.items
// 					});
// 				},
// 				// Note: it's important to handle errors here
// 				// instead of a catch() block so that we don't swallow
// 				// exceptions from actual bugs in components.
// 				(error) => {
// 					this.setState({
// 						isLoaded: true,
// 						error
// 					});
// 				}
// 			)
// 	}
//
// 	render() {
// 		const {error, isLoaded, items} = this.state;
// 		if (error) {
// 			return <div>Error: {error.message}</div>;
// 		} else if (!isLoaded) {
// 			return <div>Loading...</div>;
// 		} else {
// 			return (
// 				<>
// 					{items.map(item => (
// 						// <div className="wsb-card active-case {item.id}">
// 						// 	<div className="data-wrapper">
// 						// 	<span className="in-number">
// 						// 		{item.price}
// 						// 	</span>
// 						// 		<div className="description">
// 						// 			{item.name}
// 						// 		</div>
// 						// 	</div>
// 						// </div>
//
// 						<pre>{item.toString()}</pre>
//
// 					))}
// 				</>
// 			);
// 		}
// 	}
//
//
// }
