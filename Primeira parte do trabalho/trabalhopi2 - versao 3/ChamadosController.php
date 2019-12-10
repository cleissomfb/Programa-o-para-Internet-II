<?php

    include_once('Chamados.php');
    include_once('ChamadosDAO.php');

    class ChamadosController{

        public function inserir($request, $response, $args) {
            
            $data = $request->getParsedBody();
            $chamados = new Chamados(0, $data['patri_equipamento'], $data['nome_usuario'], 
            $data['desc_problema'], $data['solucao_problema'], 
            $data['id_status'], $data['id_usuario']);
        
            $dao = new ChamadosDAO;
            $chamados = $dao->inserir($chamados);
        
            return $response->withJson($chamados,201);
        }

        public function atualizar($request, $response, $args) {
            $id_chamado = $args['id_chamado'];
            $data = $request->getParsedBody();
            $chamados = new Chamados($data['id_chamado'], $data['patri_equipamento'], $data['nome_usuario'], 
            $data['desc_problema'], $data['solucao_problema'], 
            $data['id_status'], $data['id_usuario']);
        
            $dao = new ChamadosDAO;
            $chamados = $dao->atualizar($chamados);
        
            return $response->withJson($chamados);
        }

        public function listar($request, $response, $args){
            $dao= new ChamadosDAO;    
            $chamados = $dao->listar();
        
            return $response->withJSON($chamados);
        
        }

        public function deletar($request, $response, $args) {
            $id = $args['id_chamado'];
        
            $dao = new ChamadosDAO;
            $chamado = $dao->deletar($id);
        
            return $response->withJson($chamado);
        }

        public function buscarPorStatus($request, $response, $args){
            //Pegando somente pelo nome
            $id_status = $args['id_status'];
            
            $dao = new ChamadosDAO;
            $chamados = $dao->listarPorIdStauts($chamados);
    
            return $response->withJSON($chamados);
        }
    

    }