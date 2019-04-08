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
        ),
        array(
          'methods'         => 'GET',
          'callback'        => array( $this, 'getJsonFormPage' )
        ),
        array(
          'methods'         => WP_REST_Server::EDITABLE,
          'callback'        => array( $this, 'updateJsonFormPage' )//,
          //'permission_callback'   => array( $this, 'saveJson_permission' )
        ),
        array(
          'methods'         => WP_REST_Server::DELETABLE,
          'callback'        => array( $this, 'deleteJsonFormPage' )//,
          //'permission_callback'   => array( $this, 'saveJson_permission' )
        )
      ));
      register_rest_route( $namespace, '/' . $base.'/(?P<id>\d+)', array(
        array(
          'methods'         => WP_REST_Server::READABLE,
          'callback'        => array( $this, 'getJsonFormPageId' )//,
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
            return new WP_Error( 'rest_forbidden', esc_html__( 'No tienes los permisos suficientes.', 'my-text-domain' ), array( 'status' => 401 ) );
        }
        return true;
    }
  
    // Register our REST Server
  public function hook_rest_server(){
    add_action( 'rest_api_init', array( $this, 'register_routes' ) );
  }
  /**
   * @author Jesus Lozano | zeroline
   * @description get todo los json de la páginas de la bd
   */
  public function getJsonFormPage($request)
  {
      global $wpdb;
      $table=$wpdb->prefix.'angular';
      $result=$wpdb->get_results( "SELECT * FROM $table" );
      if(empty($result)){        
        return new WP_Error( 'SQL', 'Ocurio un error en la Base de datos', array( 'status' => 401 ) );
      }
      else{       
        return  new WP_REST_Response( $result,200 );
      }
      
  }
  /**
   * @author Jesus Lozano | zeroline
   * @description get json por id de la página de la bd
   */
  public function getJsonFormPageId($request)
  {
      global $wpdb;
      $table=$wpdb->prefix.'angular';
      $id=$request['id'];
      $result=$wpdb->get_results( "SELECT * FROM $table where id=$id" );
      if(empty($result)){        
        return new WP_Error( 'SQL', 'Ocurio un error en la Base de datos', array( 'status' => 401 ) );
      }
      else{       
        return  new WP_REST_Response( $result,200 );
      }
  }
  /**
   * @author Jesus Lozano | zeroline
   * @description get json por id de la página de la bd
   */
  public function updateJsonFormPage($data)
  {
      global $wpdb;
      $table=$wpdb->prefix.'angular';
      $format = array('%s','%s');
      $result=$wpdb->update( 
        $table, 
        array( 
          'title' => $data['title'],	// string
          'slug' => $data['slug'],	// integer (number) 
          'builder'=>$data['builder']//string
        ), 
        array( 'ID' => $data['id'] ), 
        array( 
          '%s',	// title
          '%s',	// slug
          '%s'	// slug
        ), 
        array( '%d' ) 
      );
      if($result!=true ||  $result!=1){        
        return new WP_Error( 'SQL', 'Ocurio un error en la Base de datos', array( 'status' => 401 ) );
      }
      else{       
        return  new WP_REST_Response( $result,200 );
      }
  }
  public function deleteJsonFormPage($data)
  {
      global $wpdb;
      $table=$wpdb->prefix.'angular';
      $result=$wpdb->delete($table, array( 'ID' => $data['id'] ), array( '%d' ) );
      if($result!=true ||  $result!=1){        
        return new WP_Error( 'SQL', 'Ocurio un error en la Base de datos', array( 'status' => 401 ) );
      }
      else{       
        return  new WP_REST_Response( $result,200 );
      }
  }
  public function saveJsonFormPage($data)
  {
      global $wpdb;
      $table=$wpdb->prefix.'angular';
      $data = array('title' => $data['titulo'],'slug'=>$data['slug'], 'builder' => $data['builder']);
      $format = array('%s','%s');
      $result=$wpdb->insert( $table, $data, $format );
      return $result;
  }

}  
$CustomEndpoints = new CustomEndpoints();
$CustomEndpoints->hook_rest_server();
?>