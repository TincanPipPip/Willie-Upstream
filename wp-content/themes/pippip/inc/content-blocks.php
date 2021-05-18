<?php

/**
 * ----------------------
 * Un.titled
 * Gutenberg flexible content blocks
 * ----------------------
 */

acf_register_block( array(
  'name'            => 'text',
  'title'           => __( 'Text', 'pippip' ),
  'description'     => __( 'WYSIWYG text', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'text',
  'keywords'        => array( 'copy', 'text' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'accordion',
  'title'           => __( 'Accordion', 'pippip' ),
  'description'     => __( 'Frequently asked questions', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'list-view',
  'keywords'        => array( 'accordion' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('accordions', get_template_directory_uri() . '/dist/js/admin.accordion.js', array(), null, true );
  },
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'image',
  'title'           => __( 'Image', 'pippip' ),
  'description'     => __( 'Single image', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-image',
  'keywords'        => array( 'image' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'gallery',
  'title'           => __( 'Gallery', 'pippip' ),
  'description'     => __( 'Image gallery with modal window', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-gallery',
  'keywords'        => array( 'images', 'gallery' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'downloads',
  'title'           => __( 'Downloads', 'pippip' ),
  'description'     => __( 'Attach files for download', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'download',
  'keywords'        => array( 'download', 'file' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'embed',
  'title'           => __( 'Embed', 'pippip' ),
  'description'     => __( 'Embed content from an external site', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'embed-generic',
  'keywords'        => array( 'embed' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'quote',
  'title'           => __( 'Quote', 'pippip' ),
  'description'     => __( 'Quote, testimonial or review', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-quote',
  'keywords'        => array( 'quote', 'testimonial', 'review' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'linkedlogos',
  'title'           => __( 'Linked Logos', 'pippip' ),
  'description'     => __( 'List of linked logos', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'forms',
  'keywords'        => array( 'logos', 'linked' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'cta',
  'title'           => __( 'CTA', 'pippip' ),
  'description'     => __( 'Call to action button', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'button',
  'keywords'        => array( 'button', 'link', 'cta' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'imagetext',
  'title'           => __( 'Image Text', 'pippip' ),
  'description'     => __( 'Image & Text', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'id-alt',
  'keywords'        => array( 'image', 'text' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'video',
  'title'           => __( 'Video', 'pippip' ),
  'description'     => __( 'Video embed', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'video-alt3',
  'keywords'        => array( 'video', 'vimeo', 'youtube' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'table',
  'title'           => __( 'Table', 'pippip' ),
  'description'     => __( 'Table block', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'editor-table',
  'keywords'        => array( 'table' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );
