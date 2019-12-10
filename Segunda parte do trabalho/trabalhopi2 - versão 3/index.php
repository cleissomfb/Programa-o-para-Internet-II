<?php
use Slim\Factory\AppFactory;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

include_once('UsuarioController.php');
include_once('EquipamentoController.php');
include_once('ChamadosController.php');

require __DIR__ . './vendor/autoload.php';

//Cria uma API
$app = AppFactory::create();

//Faz a autenticação do usuário para poder ter acesso ao app.
// $app->post('/api/auth','UsuarioController:autenticar');

// Controla a classe Usuarios e a tabela usuario no banco de dados.
$app->group('/api/usuarios', function($app){
    $app->get('', 'UsuarioController:listar'); 
    $app->get('/search/{nome_usuario}','UsuarioController:buscarPorNome');
    $app->post('', 'UsuarioController:inserir'); 
    $app->get('/{id}', 'UsuarioController:buscarPorId'); 
    $app->put('/{id}', 'UsuarioController:atualizar');  
    $app->delete('/{id}', 'UsuarioController:deletar'); 
});
// ->add('UsuarioController:validarToken');

// Controla a classe Equipamentos e a tabela equipamentos no banco de dados.
$app->group('/api/equipamentos', function($app){
    $app->get('', 'EquipamentoController:listar');
    $app->get('/search/patrimonio/{patri_equipamento}','EquipamentoController:buscarPorPatri'); 
    $app->get('/search/modelo/{modelo_equipamento}','EquipamentoController:buscarPorModelo');
    $app->get('/search/serie/{nro_serie_equipamento}','EquipamentoController:buscarPorNroSerie');
    $app->get('/search/local/{local_equipamento}','EquipamentoController:buscarPorLocal');
    $app->post('', 'EquipamentoController:inserir');
    $app->get('/{id}', 'EquipamentoController:buscarPorId');
    $app->put('/{id_equipamento}', 'EquipamentoController:atualizarPorPatrimonio'); 
    $app->delete('/id/{id}', 'EquipamentoController:deletarPorId');
    $app->delete('/patrimonio/{patri_equipamento}', 'EquipamentoController:deletarPorPatrimonio');
});
// ->add('UsuarioController:validarToken');


// Controla a classe Chamados e a tabela chamados no banco de dados.
$app->group('/api/chamados', function($app){
    $app->get('', 'ChamadosController:listar');
    $app->get('/search/status/{id_status}','ChamadosController:buscarPorStatus');
    $app->get('/{id_chamado}', 'ChamadosController:buscarPorId');
    $app->post('', 'ChamadosController:inserir'); 
    $app->put('/{id_chamado}', 'ChamadosController:atualizar');
    $app->delete('/{id_chamado}', 'ChamadosController:deletar'); 
});
// ->add('UsuarioController:validarToken');

//Executa a API
$app->run();
?>