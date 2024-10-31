<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/articles', 'Articles::index');


$routes->resource("articles", ["placeholder" => "(:num)", "filter" => "login"]);

service('auth')->routes($routes);

$routes->group("", ["filter" => "login"], static function ($routes) {

	$routes->get("set-password", "Password::set");
	$routes->post("set-password", "Password::update");

	$routes->get("articles/(:num)", "Articles::show/$1");
	$routes->get("articles/new", "Articles::new");
	$routes->post("articles/create", "Articles::create");
	$routes->get("articles/edit/(:num)", "Articles::edit/$1");
	$routes->post("articles/update/(:num)", "Articles::update/$1");
	$routes->match(["get", "post"],"articles/delete/(:num)", "Articles::delete/$1");


});

