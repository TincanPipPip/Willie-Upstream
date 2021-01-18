<?php 

/**
 * ----------------------
 * Un.titled
 * Gutenberg Member CPT blocks
 * ----------------------
 */

acf_register_block( array(
  'name'            => 'members-intro',
  'title'           => __( 'Members - Intro', 'pippip' ),
  'description'     => __( 'Strapline copy', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'members',
  'icon'            => 'text',
  'supports'        => array(
    'align' => false,
    'multiple' => false
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'members-contact',
  'title'           => __( 'Members - Contact info', 'pippip' ),
  'description'     => __( 'Contact info', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'members',
  'icon'            => 'text',
  'supports'        => array(
    'align' => false,
    'multiple' => false
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'members-resources',
  'title'           => __( 'Related resources', 'pippip' ),
  'description'     => __( 'Downloadable resources', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'members',
  'icon'            => 'images-alt2',
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );
