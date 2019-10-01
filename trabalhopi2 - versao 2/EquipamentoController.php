<?php

include_once('Equipamento.php');
include_once('EquipamentoDAO.php');

class EquipamentoController{

    // Listar os equipamentos
    public function listar($request, $response, $args){
        $dao= new EquipamentoDAO;    
        $equipamento = $dao->listar();
    
        return $response->withJSON($equipamento);
    
    }

    // Buscar por id um determinado equipamento
    public function buscarPorId($request, $response, $args) {
        $id = $args['id'];
        
        $dao= new EquipamentoDAO;    
        $equipamento = $dao->buscarPorId($id);
        
        return $response->withJson($equipamento);
    }

    // Deletar um equipamento pelo id
    public function deletarPorId($request, $response, $args) {
        $id = $args['id'];
    
        $dao = new EquipamentoDAO;
        $equipamento = $dao->deletarPorId($id);
    
        return $response->withJson($equipamento);
    }

    // Deletar por um determinado patrimônio
    public function deletarPorPatrimonio($request, $response, $args) {
        $patri_equipamento = $args['patri_equipamento'];
    
        $dao = new EquipamentoDAO;
        $equipamento = $dao->deletarPorPatrimonio($patri_equipamento);
    
        return $response->withJson($equipamento);
    }

    // Lista o equipamento com um determinado patrimônio
    public function buscarPorPatri($request, $response, $args){
        //Pegando somente pelo nome
        $patri_equipamento = $args['patri_equipamento'];
        
        $dao = new EquipamentoDAO;
        $equipamento = $dao->listarPorPatrimonio($patri_equipamento);

        return $response->withJSON($equipamento);
    }

    // Lista os equipamentos igual a busca.
    public function buscarPorModelo($request, $response, $args){
        //Pegando somente pelo nome
        $modelo_equipamento = $args['modelo_equipamento'];
        
        $dao = new EquipamentoDAO;
        $equipamento = $dao->listarPorModeloEquipamento($modelo_equipamento);

        return $response->withJSON($equipamento);
    }

    // Insere um novo equipamento
    public function inserir($request, $response, $args) {
        
        $data = $request->getParsedBody();
        $equipamento = new Equipamento(0, $data['patri_equipamento'], $data['modelo_equipamento'], 
        $data['nro_serie_equipamento'], $data['data_aquisicao'], 
        $data['nro_nota_fiscal'], $data['local_equipamento'], $data['observacao']);
    
        $dao = new EquipamentoDAO;
        $equipamento = $dao->inserir($equipamento);
    
        return $response->withJson($equipamento,201);
    }

    // Atualiza um equipamento
    public function atualizar($request, $response, $args) {
        $patri_equipamento = $args['patri_equipamento'];
        $data = $request->getParsedBody();
        $usuario = new Equipamento($data['id_equipamento'], $patri_equipamento, $data['modelo_equipamento'], 
        $data['nro_serie_equipamento'], $data['data_aquisicao'], 
        $data['nro_nota_fiscal'], $data['local_equipamento'], $data['observacao']);
    
        $dao = new EquipamentoDAO;
        $equipamento = $dao->atualizar($equipamento);
    
        return $response->withJson($equipamento);
    }


}