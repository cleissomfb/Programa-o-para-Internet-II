<?php

include_once('Equipamento.php');
include_once('EquipamentoDAO.php');

class EquipamentoController{

    // Lista todos os equipamentos contidos no banco de dados.
    public function listar($request, $response, $args){
        
        try{

            $dao= new EquipamentoDAO;    
            $equipamento = $dao->listar();
        
            return $response->withJSON($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    // Buscar um equipamento pelo seu id_equipamento.
    public function buscarPorId($request, $response, $args) {
       
        $id = $args['id'];
        
        try{    
            $dao= new EquipamentoDAO;    
            $equipamento = $dao->buscarPorId($id);
            
            return $response->withJson($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    // Buscar por um equipamento através do seu patrimônio.
    public function buscarPorPatri($request, $response, $args){
        
        $patri_equipamento = $args['patri_equipamento'];

        try{
            
            $dao = new EquipamentoDAO;
            $equipamento = $dao->listarPorPatrimonio($patri_equipamento);

            return $response->withJSON($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    //Buscar por um equipamento pelo seu número de série.
    public function buscarPorNroSerie($request, $response, $args){
        $nro_serie_equipamento = $args['nro_serie_equipamento'];

        try{

            $dao = new EquipamentoDAO;
            $equipamento = $dao->listarPorNroSerieEquipamento($nro_serie_equipamento);

            return $response->withJSON($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    // Buscar todos os equipamentos de um determinado modelo.
    public function buscarPorModelo($request, $response, $args){
        
        $modelo_equipamento = $args['modelo_equipamento'];

        try{
           
            $dao = new EquipamentoDAO;
            $equipamento = $dao->listarPorModeloEquipamento($modelo_equipamento);

            return $response->withJSON($equipamento)
            ->withStatus(200);
        
        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    //Buscar todos os equipamentos que pertencem aos setore.
    public function buscarPorLocal($request, $response, $args){
       
        $local_equipamento = $args['local_equipamento']; 
        
        try{
        
            $dao = new EquipamentoDAO;
            $equipamento = $dao->listarPorLocalEquipamento($local_equipamento);

            return $response->withJSON($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }
    
    // Deletar um equipamento pelo seu id.
    public function deletarPorId($request, $response, $args) {
        
        $id = $args['id'];
    
        try{
            $dao = new EquipamentoDAO;
            $equipamento = $dao->deletarPorId($id);
        
            return $response->withJson($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    // Deletar um equipamento pelo seu patrimônio.
    public function deletarPorPatrimonio($request, $response, $args) {
        
        $patri_equipamento = $args['patri_equipamento'];
    
        try{
            $dao = new EquipamentoDAO;
            $equipamento = $dao->deletarPorPatrimonio($patri_equipamento);
        
            return $response->withJson($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    // Insere um novo equipamento no banco de dados
    public function inserir($request, $response, $args) {
        
        try{
            $data = $request->getParsedBody();
            $equipamento = new Equipamento(0, $data['patri_equipamento'], $data['modelo_equipamento'], 
            $data['nro_serie_equipamento'], $data['data_aquisicao'], 
            $data['nro_nota_fiscal'], $data['local_equipamento'], $data['observacao']);
        
            $dao = new EquipamentoDAO;
            $equipamento = $dao->inserir($equipamento);
        
            return $response->withJson($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }

    // Atualiza um equipamento pelo seu patrimônio
    public function atualizarPorPatrimonio($request, $response, $args) {
            
        try{
            // $patri_equipamento = $args['patri_equipamento'];
            $id_equipamento = $args['id_equipamento'];
            $data = $request->getParsedBody();
            $equipamento = new Equipamento($id_equipamento, $data['patri_equipamento'], $data['modelo_equipamento'], 
            $data['nro_serie_equipamento'], $data['data_aquisicao'], 
            $data['nro_nota_fiscal'], $data['local_equipamento'], $data['observacao']);
        
            $dao = new EquipamentoDAO;
            $equipamento = $dao->atualizar($equipamento);
        
            return $response->withJson($equipamento)
            ->withStatus(200);

        }catch(Exception $error){

            return $response->withStatus(401);
        }
    }


}