<?php
/**
 * Ajax content provider
 * @package ajax-content
 * @version 0.0.1
 * @upgrade true
 */

namespace AjaxContent\Controller;

class AjaxController extends \SiteController
{
    public function singleAction(){
        $name = $this->param->name;
        $contents = $this->config->{'ajax-content'} ?? [];
        
        if(!isset($contents[$name])){
            echo '';
            return;
        }
        
        $opts = $contents[$name];
        
        $cache   = $opts['cahce'] ?? null;
        $view    = $opts['view'];
        
        $handler = $opts['handler'];
        $hnd_cls = $handler['class'];
        $hnd_act = $handler['action'];
        
        $params = $hnd_cls::$hnd_act();
        if(!$params)
            return $this->respond($view, $params);
        $this->respond($view, $params, $cache);
    }
}