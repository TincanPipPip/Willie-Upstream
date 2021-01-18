<?php

/**
 * ----------------------
 * Un.titled
 * Custom widgets
 * ----------------------
 */

add_action( 'widgets_init', 'pippip_sidebar' );

function pippip_sidebar() {
  register_sidebar( array(
      'name' => 'Subnav',
      'id' => 'subnav',
      'before_widget' => '<div class="o-sidebar o-sidebar--subnav">',
      'after_widget' => '</div>',
  ) );
}
