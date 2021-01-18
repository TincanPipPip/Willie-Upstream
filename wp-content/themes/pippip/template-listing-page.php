<?php
/**
* Template Name: Listing Page
*/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/page-listing.twig' ), $context );