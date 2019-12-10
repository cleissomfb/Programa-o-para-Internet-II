<?php

    include_once('Chamados.php');
    include_once('PDOFactory.php');

    class ChamadosDAO{

        //Insere um novo chamado no banco de dados.
        public function inserir(Chamados $chamados){
            $qInserir = "INSERT INTO chamados(patri_equipamento, nome_usuario,
            desc_problema, solucao_problema ,id_status, id_usuario) 
            VALUES (:patri_equipamento, :nome_usuario,
            :desc_problema, :solucao_problema ,:id_status, :id_usuario)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":patri_equipamento",$chamados->patri_equipamento);
            $comando->bindParam(":nome_usuario",$chamados->nome_usuario);
            $comando->bindParam(":desc_problema",$chamados->desc_problema);
            $comando->bindParam(":solucao_problema",$chamados->solucao_problema);
            $comando->bindParam(":id_status",$chamados->id_status);
            $comando->bindParam(":id_usuario",$chamados->id_usuario);
            $comando->execute();
            $chamados->id = $pdo->lastInsertId();
            return $chamados;
        }

        //Atualiza um chamado existente.
        public function atualizar(Chamados $chamados){
            $qAtualizar = "UPDATE chamados SET patri_equipamento=:patri_equipamento, nome_usuario=:nome_usuario,
            desc_problema=:desc_problema, solucao_problema=:solucao_problema, 
            id_status=:id_status, id_usuario=:id_usuario WHERE id_chamado=:id_chamado";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":id_chamado",$chamados->id_chamado);
            $comando->bindParam(":patri_equipamento",$chamados->patri_equipamento);
            $comando->bindParam(":nome_usuario",$chamados->nome_usuario);
            $comando->bindParam(":desc_problema",$chamados->desc_problema);
            $comando->bindParam(":solucao_problema",$chamados->solucao_problema);
            $comando->bindParam(":id_status",$chamados->id_status);
            $comando->bindParam(":id_usuario",$chamados->id_usuario);
            $comando->execute();    
            return($chamados);    
        }

        //Lista todos os chamados
        public function listar(){
		    $query = 'SELECT * FROM chamados';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $chamados=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
                $chamados[] = new Chamados($row->id_chamado,$row->patri_equipamento,
                $row->nome_usuario, $row->desc_problema, $row->solucao_problema, 
                $row->id_status, $row->id_usuario);
            }
            return $chamados;
        }

        // Busca por ID
        // Função só está implementada para executar a função deletar()
        public function buscarPorId($id_chamado){
            $query = 'SELECT * FROM chamados WHERE id_chamado=:id_chamado';	
            $pdo = PDOFactory::getConexao(); 
            $comando = $pdo->prepare($query);
            $comando->bindParam ('id_chamado', $id_chamado);
            $comando->execute();
            $row = $comando->fetch(PDO::FETCH_OBJ);
            return new Chamados($row->id_chamado,$row->patri_equipamento,
            $row->nome_usuario, $row->desc_problema, $row->solucao_problema, 
            $row->id_status, $row->id_usuario);           
        }

        // Deletar um chamado por seu id.
        public function deletar($id){
            $qDeletar = "DELETE from chamados WHERE id_chamado=:id_chamado";            
            $chamado = $this->buscarPorId($id);
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id_chamado",$id);
            $comando->execute();
            return $chamado;
        }

        //Fazer um busca por um ID do status 
        // 1 - Em Aberto
        // 2 - Em Atendimento
        // 3 - Chamado Concluido
        public function buscarPorIdStatus($id_status){
            $query = 'SELECT * FROM chamados WHERE id_status=:id_status';	
            $pdo = PDOFactory::getConexao(); 
            $comando = $pdo->prepare($query);
            $comando->bindParam ('id_status', $id_status);
            $comando->execute();
            $row = $comando->fetch(PDO::FETCH_OBJ);
            return new Chamados($row->id_chamado,$row->patri_equipamento,
            $row->nome_usuario, $row->desc_problema, $row->solucao_problema, 
            $row->id_status, $row->id_usuario);           
        }
        
    }
?>