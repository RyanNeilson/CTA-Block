
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const { margins, paddings, id, useCustomSpacings, useCustomBorders, useCustomColors, useButtonStyles, borderWidth, borderColor, borderRadius, showHeader, headingTag, heading, showTextContent, textContent, textColor, textPaddings, useTextPadding, backgroundColor, buttonText, buttonLink, buttonHoverColor, buttonHoverBackground, buttonPaddings, buttonTextColor, buttonBackgroundColor, buttonBorderWidth, buttonBorderRadius, buttonBorderColor, mediaId, mediaUrl, mediaThumbnail, useBoxShadows, boxShadowColor, boxShadowXOffset, boxShadowYOffset, boxShadowBlur, boxShadowSpread, layout, imageAlignDesktop, imageAlignMobile, headingAlignDesktop, headingAlignMobile, textAlignDesktop, textAlignMobile, buttonAlignDesktop, buttonAlignMobile } = attributes;
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

	return (
		<div
			{...useBlockProps.save({ className: `ncb-cta-block layout-${layout}`})}
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
						<RichText.Content
							className={`ncb-cta-block__header desktop-align-${headingAlignDesktop} mobile-align-${headingAlignMobile}`}
							tagName={headingTag}
							value={heading}
						/> : null
					}
					{
						showTextContent ? 
						<RichText.Content
							className={`ncb-cta-block__text desktop-align-${textAlignDesktop} mobile-align-${textAlignMobile}`}
							tagName="p"
							value={textContent}
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
					href={buttonLink}
					style={buttonStyles}
				>
					<RichText.Content
						tagName="span"
						value={buttonText}
					/>
				</a>
			</div>
		</div>
	);
}
