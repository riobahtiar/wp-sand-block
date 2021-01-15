/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

// import {GlobalWidget} from './global-widget';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save() {
	return <div>Halooo CV</div>;
}

//
// export default function save({ className }) {
// 	return (
// 		<div className={className}>
// 			<GlobalWidget/>
// 		</div>
// 	);
// }
//
