<?php

include_once('Usuario.php');
include_once('UsuarioDAO.php');

class UsuarioController{

    public function listar($request, $response, $args){
        $dao= new UsuarioDAO;    
        $usuario = $dao->listar();
    
        return $response->withJSON($usuario);
    
    }

    public function inserir($request, $response, $args) {
        //Adicione nome e preço no request (formato JSON)
        $data = $request->getParsedBody();
        $usuario = new Usuario(0,$data['login_usuario'],$data['senha_usuario'],$data['nome_usuario']);
    
        $dao = new UsuarioDAO;
        $usuario = $dao->inserir($usuario);
    
        return $response->withJson($usuario,201);
    }

    public function buscarPorId($request, $response, $args) {
        $id = $args['id'];
        
        $dao= new UsuarioDAO;    
        $usuario = $dao->buscarPorId($id);
        
        return $response->withJson($usuario);
    }

    public function deletar($request, $response, $args) {
        $id = $args['id'];
    
        $dao = new UsuarioDAO;
        $usuario = $dao->deletar($id);
    
        return $response->withJson($usuario);
    }

    public function buscarPorQuery($request, $response, $args){
        //Pegando somente pelo nome
        $nome = $request->getQueryParams()['nome_usuario'];
        
        $dao = new UsuarioDAO;
        $usuario = $dao->listarPorNome($nome);

        return $response->withJSON($usuario);
    }

    public function atualizar($request, $response, $args) {
        $id = $args['id'];
        $data = $request->getParsedBody();
        $usuario = new Usuario($id, $data['login_usuario'],$data['senha_usuario'],$data['nome_usuario']);
    
        $dao = new UsuarioDAO;
        $usuario = $dao->atualizar($usuario);
    
        return $response->withJson($usuario);
    }
}

?>