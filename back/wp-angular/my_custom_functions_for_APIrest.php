<?php
/**
 * Grab latest post title by an author!
 *
 * @param array $data Options for the function.
 * @return string|null Post title for the latest, * or null if none.
 */
  function get_theme_head() {
    return wp_head();
  }
  add_action( 'rest_api_init', function () {
    register_rest_route( 'angular/v1', 'head', array(
      'methods' => 'GET',
      'callback' => 'get_theme_head',
    ) );
  });



/**
* Redirect to Permalink setting Page.
* Otherwise Redirect rule will not work Properly.
*/
function redirect_to_permalink() {
  global $wp_rewrite;
  $wp_rewrite->set_permalink_structure('/%postname%/');
  $wp_rewrite->flush_rules();}
add_action( 'init', 'redirect_to_permalink' );
// JWT configuration
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);

//File endpoint
require_once("custom_endpoints.php");



/********* */
global $jal_db_version;
$jal_db_version = '2.1';

function angulardb() {
	global $wpdb;
	global $jal_db_version;

	$table_name = $wpdb->prefix . 'angular';
	
	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
    title text not nyl
		builder text NOT NULL,
		PRIMARY KEY  (id)
  ) $charset_collate;";
  var_dump($sql);

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );

  add_option( 'jal_db_version', $jal_db_version );
}
register_activation_hook( __FILE__, 'angulardb' );
/************** */
$installed_ver = get_option( "jal_db_version" );

if ( $installed_ver != $jal_db_version ) {
	$table_name = $wpdb->prefix . 'angular';

	$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
    title text not null,
		builder text NOT NULL,
		PRIMARY KEY  (id)
	)";

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );

	update_option( "jal_db_version", $jal_db_version );
}

function myplugin_update_db_check() {
	global $jal_db_version;
	if ( get_site_option( 'jal_db_version' ) != $jal_db_version ) {
		angulardb();
	}
}
add_action( 'plugins_loaded', 'myplugin_update_db_check' );

/***********/


?>