<?php
/**
 * Template Name: Homepage
 * Description: Homepage Template.
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'pages/homepage.twig' ), $context );
