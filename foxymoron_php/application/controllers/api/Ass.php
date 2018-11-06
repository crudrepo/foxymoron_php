<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
// use namespace
use Restserver\Libraries\REST_Controller;
class Ass extends REST_Controller {
    function __construct()
    {
        parent::__construct();
    }
	public function ass2_post()
    {

        $str = $this->post('str');
        $msg = "";
        if($str == strrev($str))
        {
            $msg = $str." is palindrome";
        }
        else
        {
            $msg = "Reverse string is ".strrev($str)." and ".$str." is not palindrome";
        }
        $this->response([
            'status' => TRUE,
            'result' => $msg
        ], REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
    }
    public function ass3()
    {
    }
    public function index_get()
    {
    }
}

