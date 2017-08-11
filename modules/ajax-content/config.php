<?php
/**
 * ajax-content config file
 * @package ajax-content
 * @version 0.0.1
 * @upgrade true
 */

return [
    '__name' => 'ajax-content',
    '__version' => '0.0.1',
    '__git' => 'https://github.com/getphun/ajax-content',
    '__files' => [
        'modules/ajax-content'                  => [ 'install', 'remove', 'update' ],
        'theme/site/static/js/ajax-content.js'  => [ 'install', 'remove', 'update' ]
    ],
    '__dependencies' => [],
    '_services' => [
        'ajax' => 'AjaxContent\\Service\\Ajax'
    ],
    '_autoload' => [
        'classes' => [
            'AjaxContent\\Service\\Ajax' => 'modules/ajax-content/service/Ajax.php',
            'AjaxContent\\Controller\\AjaxController' => 'modules/ajax-content/controller/AjaxController.php'
        ],
        'files' => []
    ],
    'ajax-content' => [],
    
    '_routes' => [
        'site' => [
            'ajaxContent' => [
                'rule' => '/comp/ajax-content/:name',
                'handler' => 'AjaxContent\\Controller\\Ajax::single'
            ]
        ]
    ]
];