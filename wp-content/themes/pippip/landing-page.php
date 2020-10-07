<?php
/**
 * Template Name: Landing page
 * Description: Landing Page Template.
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'pages/landing-page.twig' ), $context );
