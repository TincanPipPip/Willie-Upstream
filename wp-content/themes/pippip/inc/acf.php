<?php

/**
 * ----------------------
 * Un.titled
 * ACF customisation
 * ----------------------
 */

/**
 * Enable & setup ACF theme options page
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
 * ACF Gutenberg custom blocks setup
 */

// add_action( 'acf/init', 'pippip_acf' );

// function pippip_acf() {
//   if ( ! function_exists( 'acf_register_block' ) ) {
//     return;
//   }

//   require 'blocks/page.php';
//   require 'blocks/content.php';
//   require 'blocks/members.php';
//   require 'blocks/listing.php';
// }


// /**
//  *  Callback for generating block twig template files
//  *
//  * @param   array  $block      The block settings and attributes.
//  * @param   string $content    The block content (emtpy string).
//  * @param   bool   $is_preview True during AJAX preview.
//  */

// function acf_block( $block, $content = '', $is_preview = false, $post_id ) {
//   $context = Timber::context();

  
//   // Add post context to access page data
//   $context['post'] = new Timber\Post();
  
//   // Store block values.
//   $context['block'] = $block;
  
//   // Store field values.
//   $context['fields'] = get_fields();
  
//   // Store $is_preview value.
//   $context['is_preview'] = $is_preview;
  
//   if ($block['name'] == 'acf/page-stories'){
//     // Get latest posts on Stories block
//     $args = array(
//       'posts_per_page' => 4
//     );
//     $context['posts'] = Timber::get_posts($args);
//   } elseif ($block['name'] == 'acf/page-children') {
//     // Get page object from current page
//     $context['page'] = Timber::get_post($post_id);
//   } else {
//     $context['post'] = Timber::get_post($post_id);
//   }


//   // Render the block.
//   Timber::render( 'templates/blocks/' . $block['category'] . '/' . str_replace('acf/','',$block['name']) . '.twig', $context );
// }
