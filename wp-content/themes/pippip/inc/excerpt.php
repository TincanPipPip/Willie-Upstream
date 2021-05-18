<?php

/**
 * ----------------------
 * Un.titled
 * Enable excerpts for pages. Used to get original page content in teasers etc
 * ----------------------
 */

add_action( 'init', 'pippip_enable_excerpt' );

function pippip_enable_excerpt() {
  add_post_type_support( 'page', 'excerpt' );
}
