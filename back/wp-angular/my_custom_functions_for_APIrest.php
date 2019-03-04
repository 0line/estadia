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



/**
* Redirect to Permalink setting Page.
* Otherwise Redirect rule will not work Properly.
*/
function redirect_to_permalink() {
  global $wp_rewrite;
  $wp_rewrite->set_permalink_structure('/%postname%/');
  $wp_rewrite->flush_rules();}
add_action( 'init', 'redirect_to_permalink' );
?>