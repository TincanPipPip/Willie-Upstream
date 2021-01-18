<?php 

/**
 * ----------------------
 * Un.titled
 * Gutenberg Member CPT blocks
 * ----------------------
 */

acf_register_block( array(
  'name'            => 'listing-intro',
  'title'           => __( 'Listing - Intro', 'pippip' ),
  'description'     => __( 'Listing page copy', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'listing',
  'icon'            => 'text',
  'supports'        => array(
    'align' => false,
    'multiple' => false
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'listing-archive',
  'title'           => __( 'Listing - Archive', 'pippip' ),
  'description'     => __( 'Select which archive to show', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'listing',
  'icon'            => 'dashicons-grid-view',
  'supports'        => array(
    'align' => false,
    'multiple' => false
  ),
  'mode'            => 'auto',
  'enqueue_assets'	=> function(){
    wp_enqueue_script('listing', get_template_directory_uri() . '/dist/js/listing.js', array(), null, true );
  },
) );
