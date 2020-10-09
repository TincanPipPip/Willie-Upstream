<?php

/**
 * ACF theme options page
 */

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
		'page_title' 	=> 'Global content',
		'menu_title'	=> 'Global content',
		'menu_slug' 	=> 'theme-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

/**
 * ACF Gutenberg block categories setup
 */

function pippip_block_categories( $categories, $post ) {
	return array_merge(
		$categories,
		array(
      array(
        'slug' => 'content',
        'title' => __( 'Content', 'content' ),
      ),
		)
	);
}
add_filter( 'block_categories', 'pippip_block_categories', 10, 2);


/**
 * ACF Gutenberg custom blocks setup
 */

add_action( 'acf/init', 'pippip_acf' );

function pippip_acf() {
  if ( ! function_exists( 'acf_register_block' ) ) {
    return;
  }

  // Include custom blocks by module category
  require 'blocks/content.php';
}


/**
 *  This is the callback that displays the block.
 *
 * @param   array  $block      The block settings and attributes.
 * @param   string $content    The block content (emtpy string).
 * @param   bool   $is_preview True during AJAX preview.
 */

function acf_block( $block, $content = '', $is_preview = false ) {
  $context = Timber::context();

  // Add post context to access page data
  $context['post'] = new Timber\Post();

  // Store block values.
  $context['block'] = $block;

  // Store field values.
  $context['fields'] = get_fields();

  // Store $is_preview value.
  $context['is_preview'] = $is_preview;

  // Render the block.
  Timber::render( 'templates/blocks/' . $block['category'] . '/' . sanitize_title($block['title']) . '.twig', $context );
}
