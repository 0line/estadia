<?php
class CustomEndpoints extends WP_REST_Controller {
  /**
   * @Author Jesus Lozano|zeroline
   * Endpoints para el api de wordpress
   */
    //The namespace and version for the REST SERVER
    var $my_namespace = 'customEP/v';
    var $my_version   = '1';
    
    /**
     * @author Jesus Lozano|zeroline
     * @description Función para registrar custom endpoints para la aplicación de angular
     * @return boolean true o false dependiendo del resultado
     */
    public function register_routes() {
      $namespace = $this->my_namespace . $this->my_version;
      $base      = 'FormJson';
      register_rest_route( $namespace, '/' . $base, array(
        array(
          'methods'         => WP_REST_Server::CREATABLE,
          'callback'        => array( $this, 'saveJsonFormPage' )//,
          //'permission_callback'   => array( $this, 'saveJson_permission' )
        )
      ));
    }
    /**
     * @author Jesus Lozano|zeroline
     * @description permisos para guardar en la bd
     */
    public function saveJson_permission(){
      if ( ! current_user_can( 'edit_posts' ) ) {
            return new WP_Error( 'rest_forbidden', esc_html__( 'You do not have permissions to create data.', 'my-text-domain' ), array( 'status' => 401 ) );
        }
        return true;
    }
  
    // Register our REST Server
  public function hook_rest_server(){
    add_action( 'rest_api_init', array( $this, 'register_routes' ) );
  }
  public function saveJsonFormPage_permission(){
    if ( ! current_user_can( 'edit_posts' ) ) {
          return new WP_Error( 'rest_forbidden', esc_html__( 'You do not have permissions to create data.', 'my-text-domain' ), array( 'status' => 401 ) );
      }
      return true;
  }
    
  public function saveJsonFormPage($data)
  {
      global $wpdb;
      $table=$wpdb->prefix.'angular';
      $data = array('title' => $data['titulo'], 'builder' => $data['builder']);
      $format = array('%s','%s');
      $result=$wpdb->insert( $table, $data, $format );
      return $result;
  }

}  
$CustomEndpoints = new CustomEndpoints();
$CustomEndpoints->hook_rest_server();
?>