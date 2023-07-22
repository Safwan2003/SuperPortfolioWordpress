<?php
// Enqueue stylesheets and scripts
function mytheme_enqueue_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('mytheme-style', get_stylesheet_uri());
    // Enqueue main JavaScript file
    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');

// Theme setup
function mytheme_setup() {
    // Add theme support for automatic feed links
    add_theme_support('automatic-feed-links');
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    // Add theme support for title tag
    add_theme_support('title-tag');
    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'mytheme_setup');

// function mytheme_enqueue_scripts() {
//     // Enqueue main stylesheet
//     wp_enqueue_style('mytheme-style', get_stylesheet_uri());
    
//     // Enqueue main JavaScript file
//     wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
// }
// add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');
