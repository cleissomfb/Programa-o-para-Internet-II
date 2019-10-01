<?php

include_once('Usuario.php');
include_once('UsuarioDAO.php');

class UsuarioController{

    // Listar todos os usuários cadastrados no banco de dados.
    public function listar($request, $response, $args){
        $dao= new UsuarioDAO;    
        $usuario = $dao->listar();
    
        return $response->withJSON($usuario);
    }

    // Inserir um novo usuário
    public function inserir($request, $response, $args) {
        $data = $request->getParsedBody();
        $usuario = new Usuario(0,$data['login_usuario'],$data['senha_usuario'],$data['nome_usuario']);
    
        $dao = new UsuarioDAO;
        $usuario = $dao->inserir($usuario);
    
        return $response->withJson($usuario,201);
    }

    // Atualiza um usuário
    public function atualizar($request, $response, $args) {
        $id = $args['id'];
        $data = $request->getParsedBody();
        $usuario = new Usuario($id, $data['login_usuario'],$data['senha_usuario'],$data['nome_usuario']);
    
        $dao = new UsuarioDAO;
        $usuario = $dao->atualizar($usuario);
    
        return $response->withJson($usuario);
    }

    // Buscar um usuario pelo id_usuario
    public function buscarPorId($request, $response, $args) {
        $id = $args['id'];
        
        $dao= new UsuarioDAO;    
        $usuario = $dao->buscarPorId($id);
        
        return $response->withJson($usuario);
    }
    
    // Deletar um usuário pelo id_usuario
    public function deletar($request, $response, $args) {
        $id = $args['id'];
    
        $dao = new UsuarioDAO;
        $usuario = $dao->deletar($id);
    
        return $response->withJson($usuario);
    }

    // Buscar um usuario pelo nome
    public function buscarPorNome($request, $response, $args){
        $nome = $args['nome_usuario'];
        
        $dao = new UsuarioDAO;
        $usuario = $dao->listarPorNome($nome);

        return $response->withJSON($usuario);
    }

    
}

?>