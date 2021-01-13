/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {GlobalWidget} from './global-widget';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
// export default function Edit( { className } ) {
// 	return (
// 		<div className={className}>
// 			<GlobalWidget></GlobalWidget>
// 		</div>
// 	);
// }


export default function Edit ({ attributes, isSelected }){
    const blockProps = useBlockProps();

    return (
        <div { ...blockProps }>
			<GlobalWidget/>
            { isSelected &&
                <div className={'form-edit'}>
					{ __('Shows only when the block is selected.') }
                </div>
            }
        </div>
    );
}
