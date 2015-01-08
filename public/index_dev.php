<?php
/**
 * This makes our life easier when dealing with paths. Everything is relative
 * to the application root now.
 */
chdir(dirname(__DIR__));

// Setup autoloading
require 'init_autoloader.php';

$appConfig = require 'config/application.config.php';
$appDevConfig = require 'config/application.dev.config.php';

// Run the application!
Zend\Mvc\Application::init(array_merge_recursive(
    $appConfig,
    $appDevConfig
))->run();
