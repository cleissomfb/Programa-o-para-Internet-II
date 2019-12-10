<?php

    include_once('Chamados.php');
    include_once('ChamadosDAO.php');

    class ChamadosController{

        //Insere um novo chamado no banco de dados.
        public function inserir($request, $response, $args) {
            
            try{ 
                $data = $request->getParsedBody();
                $chamados = new Chamados(0, $data['patri_equipamento'], $data['nome_usuario'], 
                $data['desc_problema'], $data['solucao_problema'], 
                $data['id_status'], $data['id_usuario']);
            
                $dao = new ChamadosDAO;
                $chamados = $dao->inserir($chamados);
            
                return $response->withJson($chamados)
                ->withStatus(200);
            
            }catch(Exception $error){
                
                return $response->withStatus(401);
            }
        }

        //Atualiza o chamado
        public function atualizar($request, $response, $args) {
            $id = $args['id_chamado'];
            $data = $request->getParsedBody();
                
            try{ 
                $chamados = new Chamados($id, $data['patri_equipamento'], $data['nome_usuario'], 
                $data['desc_problema'], $data['solucao_problema'], 
                $data['id_status'], $data['id_usuario']);
            
                $dao = new ChamadosDAO;
                $chamados = $dao->atualizar($chamados);
            
                return $response->withJson($chamados)
                ->withStatus(200);

            }catch(Exception $error){
               
                return $response->withStatus(401);
            }
        }

        //Listar todos os chamados
        public function listar($request, $response, $args){
            
            try{   
                $dao= new ChamadosDAO;    
                $chamados = $dao->listar();
            
                return $response->withJSON($chamados)
                ->withStatus(200);

            }catch(Exception $error){
                
                return $response->withStatus(401);
            }
        
        }

        // Deletar um chamado por ID.
        //Não vai ser utilizado.
        public function deletar($request, $response, $args) {
            $id = $args['id_chamado'];
            
            try{  
                $dao = new ChamadosDAO;
                $chamado = $dao->deletar($id);
            
                return $response->withJson($chamado)
                ->withStatus(200);
            
            }catch(Exception $error){
                
                return $response->withStatus(401);
            }
        }

         //Fazer um busca pelo ID do status 
        // 1 - Em Aberto
        // 2 - Em Atendimento
        // 3 - Chamado Concluido
        public function buscarPorStatus($request, $response, $args){
            
            $id_status = $args['id_status'];
            
            try{            
                $dao = new ChamadosDAO;
                $chamados = $dao->buscarPorIdStatus($id_status);
        
                return $response->withJSON($chamados)
                ->withStatus(200);

            }catch(Exception $error){
                
                return $response->withStatus(401);
            }
        }

        public function buscarPorId($request, $response, $args) {
       
            $id = $args['id_chamado'];
            
            try{    
                $dao= new ChamadosDAO;    
                $chamado = $dao->buscarPorId($id);
                
                return $response->withJson($chamado)
                ->withStatus(200);
    
            }catch(Exception $error){
    
                return $response->withStatus(401);
            }
        }
    }
?>