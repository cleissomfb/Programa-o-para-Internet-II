<?php
use Slim\Factory\AppFactory;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

include_once('UsuarioController.php');
include_once('EquipamentoController.php');

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

// Controla a classe Usuarios e a tabela usuario no banco de dados
$app->group('/api/usuarios', function($app){
    $app->get('', 'UsuarioController:listar'); //Funcionando
    $app->get('/search/{nome_usuario}','UsuarioController:buscarPorQuery');
    $app->post('', 'UsuarioController:inserir'); // funcionando
    $app->get('/{id}', 'UsuarioController:buscarPorId'); //Funcionando
    $app->put('/{id}', 'UsuarioController:atualizar');  //Funcionando
    $app->delete('/{id}', 'UsuarioController:deletar'); //Funcionando
});

// Controla a classe Equipamentos e a tabela equipamentos no banco de dados
$app->group('/api/equipamentos', function($app){
    $app->get('', 'EquipamentoController:listar'); //Funcionando
    $app->get('/search/patrimonio/{patri_equipamento}','EquipamentoController:buscarPorPatri'); //Verificar o que está acontecendo
    $app->get('/search/modelo/{modelo_equipamento}','EquipamentoController:buscarPorModelo');
    $app->post('', 'EquipamentoController:inserir');
    $app->get('/{id}', 'EquipamentoController:buscarPorId'); //Funcionando  - (Arrumar o ID) 
    $app->put('/{id}', 'EquipamentoController:atualizar');  //Funcionando
    $app->delete('/id/{id}', 'EquipamentoController:deletarPorId'); //Funcionando
    $app->delete('/patrimonio/{patri_equipamento}', 'EquipamentoController:deletarPorPatrimonio');
});

$app->run();
?>