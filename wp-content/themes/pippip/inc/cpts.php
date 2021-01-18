<?php

/**
 * ----------------------
 * Un.titled
 * Custom post types
 * ----------------------
 */

add_action( 'init', 'pippip_cpts', 0 );

function pippip_cpts() {

  $eventLabels = array(
    'name'                => _x( 'Events', 'Post Type General Name', 'pippip' ),
    'singular_name'       => _x( 'Event', 'Post Type Singular Name', 'pippip' ),
    'menu_name'           => __( 'Events', 'pippip' ),
    'parent_item_colon'   => __( 'Parent Event', 'pippip' ),
    'all_items'           => __( 'All Events', 'pippip' ),
    'view_item'           => __( 'View Event', 'pippip' ),
    'add_new_item'        => __( 'Add New Event', 'pippip' ),
    'add_new'             => __( 'Add New', 'pippip' ),
    'edit_item'           => __( 'Edit Event', 'pippip' ),
    'update_item'         => __( 'Update Event', 'pippip' ),
    'search_items'        => __( 'Search Event', 'pippip' ),
    'not_found'           => __( 'Not Found', 'pippip' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'pippip' ),
  );
 
  $eventCpt = array(
    'label'               => __( 'Events', 'pippip' ),
    'description'         => __( 'APAC Events', 'pippip' ),
    'labels'              => $eventLabels,
    'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'revisions', 'custom-fields', ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 6,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
    'show_in_rest'        => true,
    'menu_icon'           => 'dashicons-tickets-alt',
    'rewrite'             => [
      'slug' => '/whats-on/events',
      'with_front' => false
    ]
  );
    
  register_post_type( 'Events', $eventCpt );

}