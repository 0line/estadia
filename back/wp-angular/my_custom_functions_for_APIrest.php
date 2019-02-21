<?php 
/**
 * Grab latest post title by an author!
 *
 * @param array $data Options for the function.
 * @return string|null Post title for the latest,  * or null if none.
 */
  function get_theme_head() {
    return wp_head();
  }
  add_action( 'rest_api_init', function () {
    register_rest_route( 'angular/v1', 'head', array(
      'methods' => 'GET',
      'callback' => 'get_theme_head',
    ) );
  } );
?>