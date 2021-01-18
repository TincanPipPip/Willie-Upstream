<?php


/**
 * ----------------------
 * Un.titled
 * Gutenberg page blocks
 * ----------------------
 */


acf_register_block( array(
  'name'            => 'page-text',
  'title'           => __( 'Page - Text', 'pippip' ),
  'description'     => __( 'WYSIWYG text', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'text',
  'keywords'        => array( 'copy', 'text' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-accordion',
  'title'           => __( 'Page - Accordion', 'pippip' ),
  'description'     => __( 'Frequently asked questions', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'list-view',
  'keywords'        => array( 'accordion' ),
  'supports'        => array(
    'align' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('accordions', get_template_directory_uri() . '/dist/js/admin.accordion.js', array(), null, true );
  },
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-image',
  'title'           => __( 'Page - Image', 'pippip' ),
  'description'     => __( 'Single image', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'format-image',
  'keywords'        => array( 'image' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-gallery',
  'title'           => __( 'Page - Gallery', 'pippip' ),
  'description'     => __( 'Image gallery with modal window', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'format-gallery',
  'keywords'        => array( 'images', 'gallery' ),
  'supports'        => array(
    'align' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('gallery', get_template_directory_uri() . '/dist/js/admin.gallery.js', array(), null, true );
  },
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-downloads',
  'title'           => __( 'Page - Downloads', 'pippip' ),
  'description'     => __( 'Attach files for download', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'download',
  'keywords'        => array( 'download', 'file' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-embed',
  'title'           => __( 'Page - Embed', 'pippip' ),
  'description'     => __( 'Embed content from an external site', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'embed-generic',
  'keywords'        => array( 'embed' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-quote',
  'title'           => __( 'Page - Quote', 'pippip' ),
  'description'     => __( 'Quote, testimonial or review', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'format-quote',
  'keywords'        => array( 'quote', 'testimonial', 'review' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-linked-logos',
  'title'           => __( 'Page - Linked Logos', 'pippip' ),
  'description'     => __( 'List of linked logos', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'forms',
  'keywords'        => array( 'logos', 'linked' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-cta',
  'title'           => __( 'Page - CTA', 'pippip' ),
  'description'     => __( 'Call to action button', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'button',
  'keywords'        => array( 'button', 'link', 'cta' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-image-text',
  'title'           => __( 'Page - Image Text', 'pippip' ),
  'description'     => __( 'Image & Text', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'id-alt',
  'keywords'        => array( 'image', 'text' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-video',
  'title'           => __( 'Page - Video', 'pippip' ),
  'description'     => __( 'Embed a video', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'video-alt3',
  'keywords'        => array( 'video', 'vimeo', 'youtube' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-signpost',
  'title'           => __( 'Page - Signpost', 'pippip' ),
  'description'     => __( 'Full bleed signpost', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'dashicons-align-wide',
  'keywords'        => array( 'signpost', 'full' ),
  'supports'        => array(
    'align' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-banner',
  'title'           => __( 'Homepage - Banner', 'pippip' ),
  'description'     => __( 'Homepage banner', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'dashicons-tide',
  'keywords'        => array( 'banner', 'hero' ),
  'supports'        => array(
    'align' => false,
    'multiple' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-members-panel',
  'title'           => __( 'Homepage - Members panel', 'pippip' ),
  'description'     => __( 'Homepage members panel', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'dashicons-groups',
  'keywords'        => array( 'members' ),
  'supports'        => array(
    'align' => false,
    'multiple' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-signposts',
  'title'           => __( 'Homepage - Signposts', 'pippip' ),
  'description'     => __( 'Signposts panel', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'dashicons-grid-view',
  'keywords'        => array( 'signposts' ),
  'supports'        => array(
    'align' => false,
    'multiple' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-stories',
  'title'           => __( 'Homepage - Stories', 'pippip' ),
  'description'     => __( 'Homepage our stories panel', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'dashicons-admin-post',
  'keywords'        => array( 'story', 'stories' ),
  'supports'        => array(
    'align' => false,
    'multiple' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'page-children',
  'title'           => __( 'Landing page - child pages', 'pippip' ),
  'description'     => __( 'Show list of child pages', 'pippip' ),
  'render_callback' => 'acf_block',
  'category'        => 'page',
  'icon'            => 'dashicons-admin-page',
  'keywords'        => array( 'landing', 'children' ),
  'supports'        => array(
    'align' => false,
    'multiple' => false,
  ),
  'mode'            => 'auto',
) );
