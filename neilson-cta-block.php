<?php
/**
 * Plugin Name:       Neilson CTA Block
 * Description:       Custom Gutenberg block for content with a call to action button.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Ryan Neilson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       neilson-cta-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function neilson_cta_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'neilson_cta_block_init' );