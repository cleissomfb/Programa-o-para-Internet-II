<?php
use Slim\Factory\AppFactory;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

include_once('UsuarioController.php');
include_once('EquipamentoController.php');
include_once('ChamadosController.php');

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
    $app->get('', 'UsuarioController:listar'); 
    $app->get('/search/{nome_usuario}','UsuarioController:buscarPorNome');
    $app->post('', 'UsuarioController:inserir'); 
    $app->get('/{id}', 'UsuarioController:buscarPorId'); 
    $app->put('/{id}', 'UsuarioController:atualizar');  
    $app->delete('/{id}', 'UsuarioController:deletar'); 
});

// Controla a classe Equipamentos e a tabela equipamentos no banco de dados
$app->group('/api/equipamentos', function($app){
    $app->get('', 'EquipamentoController:listar');
    $app->get('/search/patrimonio/{patri_equipamento}','EquipamentoController:buscarPorPatri'); 
    $app->get('/search/modelo/{modelo_equipamento}','EquipamentoController:buscarPorModelo');
    $app->get('/search/serie/{nro_serie_equipamento}','EquipamentoController:buscarPorNroSerie');
    $app->get('/search/local/{local_equipamento}','EquipamentoController:buscarPorLocal');
    $app->post('', 'EquipamentoController:inserir');
    $app->get('/{id}', 'EquipamentoController:buscarPorId');
    $app->put('/{patri_equipamento}', 'EquipamentoController:atualizar'); 
    $app->delete('/id/{id}', 'EquipamentoController:deletarPorId');
    $app->delete('/patrimonio/{patri_equipamento}', 'EquipamentoController:deletarPorPatrimonio');
});

$app->group('/api/chamados', function($app){
    $app->get('', 'ChamadosController:listar');
    $app->get('/search/status/{id_status}','ChamadosController:buscarPorStatus');
    $app->post('', 'ChamadosController:inserir'); 
    // $app->get('/{id}', 'UsuarioController:buscarPorId'); 
    $app->put('/{id_chamado}', 'ChamadosController:atualizar');  
    $app->delete('/{id_chamado}', 'ChamadosController:deletar'); 
});

$app->run();
?>