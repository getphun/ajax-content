<?php
/**
 * ajax service
 * @package ajax-content
 * @version 0.0.1
 * @upgrade true
 */

namespace AjaxContent\Service;

class Ajax {
    
    public function content($name, $placement=null, $jscallback=null, $device=1){
        $contents = \Phun::$config['ajax-content'] ?? [];
        
        if(!isset($contents[$name]))
            return '';
        
        $opt = $contents[$name];
        
        $tx = '<div class="ajax-content" data-ajax="'.$name.'"';
        
        $placement = $placement ?? $opt['placement'] ?? 'child';
        $tx.= ' data-placement="' . $placement . '"';
        
        $callback = $jscallback ?? $opt['callback'] ?? null;
        if($callback)
            $tx.= ' data-callback="' . $callback . '"';
        $device = $device ?? $opt['device'] ?? 1;
        $tx.= ' data-device="'.$device.'"';
        
        $tx.= '></div>';
        
        return $tx;
    }
}