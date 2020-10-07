<?php

/**
 * Adjust Gutenberg editor window column width
 */

add_theme_support( 'editor-styles' );

function p1invmgmt_add_editor_styles() {
  add_editor_style( 'style-editor.css' );
}

add_action( 'admin_init', 'p1invmgmt_add_editor_styles' );


/**
 * Restrict available Gutenberg blocks
 */

add_filter( 'allowed_block_types', 'pippip_allowed_block_types' );

function pippip_allowed_block_types( $allowed_blocks ) { 
  return array(
    'acf/text',
    'acf/accordion',
    'acf/video',
    'acf/gallery',
    'acf/image',
    'acf/downloads',
    'acf/embed',
    'acf/quote',
    'acf/linkedlogos',
    'acf/cta',
    'acf/imagetext',
  );
}


/**
 * Remove Gutenberg default styling
 */

add_filter( 'block_editor_settings' , 'remove_gutenberg_wrapper_styles' );

function remove_gutenberg_wrapper_styles( $settings ) {
  unset($settings['styles'][0]);

  return $settings;
}
