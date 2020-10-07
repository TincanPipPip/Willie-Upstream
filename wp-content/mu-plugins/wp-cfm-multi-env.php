<?php
// wp-content/mu-plugins/wp-cfm-multi-env.php
// ...

function my_wpcfm_multi_env_register( $environments ) {
    // Define an array containing the hosting environment names. 
    // Or detect these with your own code logic if all are available in `$_ENV` or `$_SERVER` super-globals. 
    // ...
    $environments = [
        'dev',
        'test',
        'live'
    ];
    return $environments;
}
add_filter( 'wpcfm_multi_env', 'my_wpcfm_multi_env_register' );