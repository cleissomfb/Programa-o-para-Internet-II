<?php
use Slim\Factory\AppFactory;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

include_once('UsuarioController.php');

require __DIR__ . './vendor/autoload.php';

$app = AppFactory::create();

// $app->group('/api/produtos', function($app){
//     $app->get('', 'ProdutoController:listar');
//     $app->get('/search','ProdutoController:buscarPorQuery');
//     $app->post('', 'ProdutoController:inserir');
//     $app->get('/{id}', 'ProdutoController:buscarPorId');    
//     $app->put('/{id}', 'ProdutoController:atualizar');
//     $app->delete('/{id}', 'ProdutoController:deletar');
// });

$app->group('/api/usuarios', function($app){
    $app->get('', 'UsuarioController:listar'); //Funcionando - (Arrumar o ID)
    $app->get('/search/{nome_usuario}','UsuarioController:buscarPorQuery'); //Verificar o que está acontecendo
    $app->post('', 'UsuarioController:inserir'); // funcionando
    $app->get('/{id}', 'UsuarioController:buscarPorId'); //Funcionando  - (Arrumar o ID) 
    $app->put('/{id}', 'UsuarioController:atualizar');  //Funcionando
    $app->delete('/{id}', 'UsuarioController:deletar'); //Funcionando
});

$app->run();
?>