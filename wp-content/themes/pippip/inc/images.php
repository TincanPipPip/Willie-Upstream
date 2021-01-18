<?php

/**
 * ----------------------
 * Un.titled
 * Image settings
 * ----------------------
 */

add_filter('jpeg_quality', function($arg){return 90;});
add_image_size( 'card', 380, 200, array( 'center', 'center' ) );
