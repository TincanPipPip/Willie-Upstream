<?php

/**
 * ----------------------
 * Un.titled
 * Gutenberg customisation
 * ----------------------
 */

/**
 * Remove patterns
 */

remove_theme_support( 'core-block-patterns' );


/**
 * Allow custom editor styling
 */
add_theme_support( 'editor-styles' );

function p1invmgmt_add_editor_styles() {
  add_editor_style( 'style-editor.css' );
}

add_action( 'admin_init', 'p1invmgmt_add_editor_styles' );


/**
 * Remove Gutenberg default styling
 */

add_filter( 'block_editor_settings' , 'remove_gutenberg_wrapper_styles' );

function remove_gutenberg_wrapper_styles( $settings ) {
  unset($settings['styles'][0]);

  return $settings;
}


/**
 * Restrict available Gutenberg blocks
 */

 add_filter('allowed_block_types', 'allowed_blocks', 10, 2);

function allowed_blocks( $allowed_blocks, $post ){
  $allowed_blocks = array(
    'acf/text',
    'acf/accordion',
    'acf/video',
    'acf/gallery',
    'acf/image',
    'acf/downloads',
    'acf/embed',
    'acf/quote',
    'acf/linked-logos',
    'acf/cta',
    'acf/image-text',
  );
  
  if($post->post_type === 'page') :
      $allowed_blocks = array(
        'acf/page-text',
        'acf/page-accordion',
        'acf/page-video',
        'acf/page-gallery',
        'acf/page-image',
        'acf/page-downloads',
        'acf/page-embed',
        'acf/page-quote',
        'acf/page-linked-logos',
        'acf/page-cta',
        'acf/page-image-text',
        'acf/page-signpost',
        'acf/page-banner',
        'acf/page-members-panel',
        'acf/page-signposts',
        'acf/page-stories',
        'acf/page-children',
        'acf/listing-intro',
        'acf/listing-archive',
      );
  elseif ($post->post_type === 'members') :
    $allowed_blocks[] = 'acf/members-resources';
  elseif ($post->post_type === 'resources') :
    $allowed_blocks[] = 'acf/members-resources';
  endif;
  return $allowed_blocks;
}
