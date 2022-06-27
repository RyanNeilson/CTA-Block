const { Fragment } = wp.element;
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ColorPicker, PanelBody, __experimentalBoxControl as BoxControl, RangeControl, ToggleControl, SelectControl, TextControl, Button, __experimentalInputControl as InputControl, RadioControl } from '@wordpress/components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { margins, paddings, id, useCustomSpacings, useCustomBorders, useCustomColors, useButtonStyles, borderWidth, borderColor, borderRadius, showHeader, headingTag, heading, showTextContent, textContent, textColor, textPaddings, useTextPadding, backgroundColor, buttonText, buttonLink, buttonHoverColor, buttonHoverBackground, buttonPaddings, buttonTextColor, buttonBackgroundColor, buttonBorderWidth, buttonBorderRadius, buttonBorderColor, mediaId, mediaUrl, mediaThumbnail, useBoxShadows, boxShadowColor, boxShadowXOffset, boxShadowYOffset, boxShadowBlur, boxShadowSpread, layout, imageAlignDesktop, imageAlignMobile, headingAlignDesktop, headingAlignMobile, textAlignDesktop, textAlignMobile, buttonAlignDesktop, buttonAlignMobile } = attributes;
	const tags = [
		{
			label: 'H1',
			value: 'h1'	
		},
		{
			label: 'H2',
			value: 'h2'	
		},
		{
			label: 'H3',
			value: 'h3'	
		},
		{
			label: 'H4',
			value: 'h4'	
		},
		{
			label: 'H5',
			value: 'h5'	
		},
		{
			label: 'H6',
			value: 'h6'	
		},
		{
			label: 'P',
			value: 'p'	
		}	
	];

	const borderStyles = useCustomBorders ? {
		border: `${borderWidth}px solid ${borderColor}`,
		borderRadius: `${borderRadius}px`,
	} : {};

	const boxShadowStyle = useBoxShadows ? {
		boxShadow: `${boxShadowXOffset}px ${boxShadowYOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`
	} : {}

	const marginStyles = useCustomSpacings ? {
		marginTop: margins.top,
		marginBottom: margins.bottom,
	} : {};

	const paddingStyles = useCustomSpacings ? {
		padding: `${paddings.top} ${paddings.right} ${paddings.bottom} ${paddings.left}`
	} : {};

	const colors = useCustomColors ? {
		color: textColor,
		backgroundColor: backgroundColor
	} : {};

	const ctaStyles = {
		...borderStyles,
		...marginStyles,
		...paddingStyles,
		...colors,
		...boxShadowStyle,
	}

	const textPaddingStyles = useTextPadding ? {
		padding: `${textPaddings.top} ${textPaddings.right} ${textPaddings.bottom} ${textPaddings.left}`
	} : {};

	const buttonStyles = useButtonStyles ? {
		"--button-background": buttonBackgroundColor,
		border: `${buttonBorderWidth}px solid ${buttonBorderColor}`,
		borderRadius: `${buttonBorderRadius}px`,
		"--button-text-color": buttonTextColor,
		padding: `${buttonPaddings.top} ${buttonPaddings.right} ${buttonPaddings.bottom} ${buttonPaddings.left}`,
		"--button-hover-background": buttonHoverBackground,
		"--button-hover-text-color": buttonHoverColor
	} : {}

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: "",
			mediaThumbnail: ""
		});
	}
 
 	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.sizes.large.url,
			mediaThumbnail: media.sizes.thumbnail.url
		});
	}
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('CTA ID', 'neilson-cta-block')} initialOpen={false}>
					<TextControl label={__('Set CTA ID', 'neilson-cta-block')} onChange={id => setAttributes({ id })} value={id} />
				</PanelBody>
				<PanelBody title={__('CTA Layout', 'neilson-cta-block')} initialOpen={false}>
					<RadioControl label={__('Layout Style')} help={"Choose a desktop layout. Mobile devices will always use a vertical style"} selected={layout} options={[{label: 'Horizontal', value: 'horizontal'}, {label: 'Vertical Wide', value: 'vertical-wide'}, {label: 'Vertical Narrow', value: 'vertical-narrow'}]} onChange={(layout) => setAttributes({layout})}/>
					<hr></hr>
					<div className="ncb-section__label">{__('Desktop Alignments', 'neilson-accordion-block')}</div>
					<RadioControl label={__('Image Alignment')} selected={imageAlignDesktop} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(imageAlignDesktop) => setAttributes({imageAlignDesktop})}/>
					<RadioControl label={__('Heading Alignment')} selected={headingAlignDesktop} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(headingAlignDesktop) => setAttributes({headingAlignDesktop})}/>
					<RadioControl label={__('Text Alignment')} selected={textAlignDesktop} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(textAlignDesktop) => setAttributes({textAlignDesktop})}/>
					<RadioControl label={__('Button Alignment')} selected={buttonAlignDesktop} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(buttonAlignDesktop) => setAttributes({buttonAlignDesktop})}/>
					<hr></hr>
					<div className="ncb-section__label">{__('Mobile Alignments', 'neilson-accordion-block')}</div>
					<RadioControl label={__('Image Alignment')} selected={imageAlignMobile} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(imageAlignMobile) => setAttributes({imageAlignMobile})}/>
					<RadioControl label={__('Heading Alignment')} selected={headingAlignMobile} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(headingAlignMobile) => setAttributes({headingAlignMobile})}/>
					<RadioControl label={__('Text Alignment')} selected={textAlignMobile} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(textAlignMobile) => setAttributes({textAlignMobile})}/>
					<RadioControl label={__('Button Alignment')} selected={buttonAlignMobile} options={[{label: 'Left', value: 'left'}, {label: 'Center', value: 'center'}, {label: 'Right', value: 'right'}]} onChange={(buttonAlignMobile) => setAttributes({buttonAlignMobile})}/>
				</PanelBody>
				<PanelBody title={__('CTA Block Spacings', 'neilson-cta-block')} initialOpen={false}>
					<ToggleControl label={__('Use Custom Spacings', 'neilson-cta-block')} checked={useCustomSpacings} onChange={() => setAttributes({useCustomSpacings: !useCustomSpacings})} />
					<BoxControl values={margins} sides={['top', 'bottom']} units={[]} label={__('Block Margins', 'neilson-cta-block')}  onChange={(val) => setAttributes({ ...margins, margins: { top: val.top, bottom: val.bottom } })} />
					<BoxControl values={paddings} sides={['top', 'bottom', 'left', 'right']} units={[]} label={__('Block Padding', 'neilson-cta-block')} onChange={(val) => setAttributes({ ...paddings, paddings: { top: val.top, bottom: val.bottom, left: val.left, right: val.right } })} />
				</PanelBody>
				<PanelBody title={__('CTA Borders', 'neilson-cta-block')} initialOpen={false}>
					<ToggleControl label={__('Use Custom Borders', 'neilson-cta-block')} checked={useCustomBorders} onChange={() => setAttributes({useCustomBorders: !useCustomBorders})} />
					<RangeControl value={borderWidth} label={__('Border Width', 'neilson-cta-block')} onChange={(borderWidth) => setAttributes({ borderWidth })} min={0} max={50} />
					<RangeControl value={borderRadius} label={__('Border Radius', 'neilson-cta-block')} onChange={(borderRadius) => setAttributes({ borderRadius })} min={0} max={50} />
					<div className="ncb-section__label">{__('Border Color', 'neilson-accordion-block')}</div>
					<ColorPicker color={borderColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => { setAttributes({borderColor: value.hex})}} />
					<ToggleControl label={__('Use Box Shadows', 'neilson-cta-block')} checked={useBoxShadows} onChange={() => setAttributes({useBoxShadows: !useBoxShadows})} />
					<div className="ncb-section__label">{__('Box Shadow Color', 'neilson-accordion-block')}</div>
					<ColorPicker color={boxShadowColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => { setAttributes({boxShadowColor: value.hex})}} />
					<RangeControl value={boxShadowXOffset} label={__('Box Shadow X-Offset', 'neilson-cta-block')} onChange={(boxShadowXOffset) => setAttributes({ boxShadowXOffset })} min={0} max={50} />
					<RangeControl value={boxShadowYOffset} label={__('Box Shadow Y-Offset', 'neilson-cta-block')} onChange={(boxShadowYOffset) => setAttributes({ boxShadowYOffset })} min={0} max={50} />
					<RangeControl value={boxShadowBlur} label={__('Box Shadow Blur', 'neilson-cta-block')} onChange={(boxShadowBlur) => setAttributes({ boxShadowBlur })} min={0} max={50} />
					<RangeControl value={boxShadowSpread} label={__('Box Shadow Spread', 'neilson-cta-block')} onChange={(boxShadowSpread) => setAttributes({ boxShadowSpread })} min={0} max={50} />
				</PanelBody>
				<PanelBody title={__('CTA Text Options', 'neilson-cta-block')} initialOpen={false}>
					<ToggleControl label={__('Use Heading', 'neilson-cta-block')} checked={showHeader} onChange={() => setAttributes({showHeader: !showHeader})} />
					<SelectControl label={__('Header HTML Tag', 'neilson-cta-block')} options={tags} onChange={(headingTag) => setAttributes({ headingTag })} />
					<ToggleControl label={__('Use Text Content', 'neilson-cta-block')} checked={showTextContent} onChange={() => setAttributes({showTextContent: !showTextContent})} />
					<ToggleControl label={__('Use Text Padding', 'neilson-cta-block')} checked={useTextPadding} onChange={() => setAttributes({useTextPadding: !useTextPadding})} />
					<BoxControl values={textPaddings} sides={['top', 'bottom', 'left', 'right']} units={[]} label={__('Text Padding', 'neilson-cta-block')} onChange={(val) => setAttributes({ ...textPaddings, textPaddings: { top: val.top, bottom: val.bottom, left: val.left, right: val.right } })} />
				</PanelBody>
				<PanelBody title={__('CTA Colors', 'neilson-cta-block')} initialOpen={false}>
					<ToggleControl label={__('Use Custom Colors', 'neilson-cta-block')} checked={useCustomColors} onChange={() => setAttributes({useCustomColors: !useCustomColors})} />
					<div className="ncb-section__label">{__('Text Color', 'neilson-cta-block')}</div>
					<ColorPicker color={textColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => setAttributes({ textColor: value.hex })} />
					<div className="ncb-section__label">{__('Background Color', 'neilson-cta-block')}</div>
					<ColorPicker color={backgroundColor} disableAlpha defaultValue="#FFFFFF" onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })} />
				</PanelBody>
				<PanelBody title={__('CTA Image', 'neilson-cta-block')} initialOpen={false}>
					<div className="editor-post-featured-image">
					{mediaId === 0 ? 
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={mediaId}
							allowedTypes={['image']}
							render={({open}) => (
								<Button
									className={mediaId === 0 ? 'ncb-cta-image__toggle' : 'ncb-cta-image__preview'}
									onClick={open}
								>{__('Select an image', 'neilson-cta-block')}
								</Button>
							)}
						/>
					</MediaUploadCheck> :
					<img src={mediaThumbnail} />
					}
					{mediaId !== 0 &&
						<MediaUploadCheck>
							<MediaUpload
								title={__('Change image', 'neilson-cta-block')}
								value={mediaId}
								onSelect={onSelectMedia}
								allowedTypes={['image']}
								render={({open}) => (
									<Button onClick={open}>{__('Change image', 'neilson-cta-block')}</Button>
								)}
							/>
						</MediaUploadCheck>
					}
					{mediaId !== 0 &&
						<MediaUploadCheck>
							<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'neilson-cta-block')}</Button>
						</MediaUploadCheck>
					}
					</div>
				</PanelBody>
				<PanelBody title={__('CTA Button', 'neilson-cta-block')} initialOpen={false}>
					<InputControl value={buttonLink} label={__('Button Link', 'neilson-cta-block')} onChange={(buttonLink) => setAttributes({buttonLink})} />
					<br></br>
					<ToggleControl label={__('Use Button Styles', 'neilson-cta-block')} checked={useButtonStyles} onChange={() => setAttributes({useButtonStyles: !useButtonStyles})} />
					<BoxControl values={buttonPaddings} sides={['top', 'bottom', 'left', 'right']} units={[]} label={__('Button Padding', 'neilson-cta-block')} onChange={(val) => setAttributes({ ...buttonPaddings, buttonPaddings: { top: val.top, bottom: val.bottom, left: val.left, right: val.right } })} />
					<div className="ncb-section__label">{__('Button Text Color', 'neilson-cta-block')}</div>
					<ColorPicker color={buttonTextColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => setAttributes({ buttonTextColor: value.hex })} />
					<div className="ncb-section__label">{__('Button Background Color', 'neilson-cta-block')}</div>
					<ColorPicker color={buttonBackgroundColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => setAttributes({ buttonBackgroundColor: value.hex })} />
					<div className="ncb-section__label">{__('Button Hover Text Color', 'neilson-cta-block')}</div>
					<ColorPicker color={buttonHoverColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => setAttributes({ buttonHoverColor: value.hex })} />
					<div className="ncb-section__label">{__('Button Hover Background Color', 'neilson-cta-block')}</div>
					<ColorPicker color={buttonHoverBackground} disableAlpha defaultValue="#333333" onChangeComplete={(value) => setAttributes({ buttonHoverBackground: value.hex })} />
					<RangeControl value={buttonBorderWidth} label={__('Border Width', 'neilson-cta-block')} onChange={(buttonBorderWidth) => setAttributes({ buttonBorderWidth })} min={0} max={50} />
					<RangeControl value={buttonBorderRadius} label={__('Border Radius', 'neilson-cta-block')} onChange={(buttonBorderRadius) => setAttributes({ buttonBorderRadius })} min={0} max={50} />
					<div className="ncb-section__label">{__('Button Border Color', 'neilson-accordion-block')}</div>
					<ColorPicker color={buttonBorderColor} disableAlpha defaultValue="#000000" onChangeComplete={(value) => { setAttributes({buttonBorderColor: value.hex})}} />
				</PanelBody>	
			</InspectorControls>
			<div
				{...useBlockProps({ className: `ncb-cta-block layout-${layout}` })}
				id={id ? id : ""}
				style={ctaStyles}	
			>
				{ 
					mediaId !== 0 ? 
					<div className={`ncb-cta-block__image-wrapper desktop-align-${imageAlignDesktop} mobile-align-${imageAlignMobile}`}>
						<img className={"ncb-cta-block__image"} src={mediaUrl}/>
					</div> : null
				}
				
					{ showHeader || showTextContent ? 
						<div 
						className={"ncb-cta-block__text-wrapper"}
						style={textPaddingStyles}
						>
							{
								showHeader ?
								<RichText
									className={`ncb-cta-block__header desktop-align-${headingAlignDesktop} mobile-align-${headingAlignMobile}`}
									tagName={headingTag}
									value={heading}
									onChange={(heading) => setAttributes({ heading })}
								/> : null
							}
							{
								showTextContent ? 
								<RichText
									className={`ncb-cta-block__text desktop-align-${textAlignDesktop} mobile-align-${textAlignMobile}`}
									tagName="p"
									value={textContent}
									onChange={(textContent) => setAttributes({textContent})}
								/> : null
							}
						</div>
					 	: null 
					}
					<div 
						className={`ncb-cta-block__button-wrapper desktop-align-${buttonAlignDesktop} mobile-align-${buttonAlignMobile}`}
						style={textPaddingStyles}
					>
						<a
							className={"ncb-cta-block__button"}
							style={buttonStyles}
						>
							<RichText
								tagName="span"
								allowedFormats={[ 'core/bold', 'core/italic' ]}
								value={buttonText}
								onChange={(buttonText) => setAttributes({buttonText})}
							/>
						</a>
					</div>
				</div>
		</Fragment>
	);
}
