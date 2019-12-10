<?php

    include_once('Equipamento.php');
    include_once('PDOFactory.php');

    class EquipamentoDAO{

        // Listar todos os equipamentos contidos no banco de dados.
        public function listar(){
		    $query = 'SELECT * FROM equipamentos';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $usuario=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
                $equipamento[] = new Equipamento($row->id_equipamento, 
                $row->patri_equipamento, $row->modelo_equipamento, $row->nro_serie_equipamento, 
                $row->data_aquisicao, $row->nro_nota_fiscal, $row->local_equipamento,
                $row->observacao);
            }
            return $equipamento;
        }

        // Buscar um equipamento por um id_equipamento;
        public function buscarPorId($id){
            $query = 'SELECT * FROM equipamentos WHERE id_equipamento=:id';	
            $pdo = PDOFactory::getConexao(); 
            $comando = $pdo->prepare($query);
            $comando->bindParam ('id', $id);
            $comando->execute();
            $row = $comando->fetch(PDO::FETCH_OBJ);
            return new Equipamento($row->id_equipamento, 
            $row->patri_equipamento, $row->modelo_equipamento, $row->nro_serie_equipamento, 
            $row->data_aquisicao, $row->nro_nota_fiscal, $row->local_equipamento,
            $row->observacao);           
        }

        // Deleta um equipamento pelo id_equipamento
        public function deletarPorId($id){
            $qDeletar = "DELETE from equipamentos WHERE id_equipamento=:id";            
            $equipamento = $this->buscarPorId($id);
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
            return $equipamento;
        }

        // Deleta um determinado equipamento através do seu patrimônio.
        public function deletarPorPatrimonio($patri_equipamento){
            $qDeletar = "DELETE from equipamentos WHERE patri_equipamento=:patri_equipamento";            
            $equipamento = $this->listarPorPatrimonio($patri_equipamento);
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam ('patri_equipamento',$patri_equipamento);
            $comando->execute();
            return $equipamento;
        }

        // Lista o equipamento com um determinado patrimônio.
        public function listarPorPatrimonio($patri_equipamento){
            $query = 'SELECT * FROM equipamentos WHERE patri_equipamento LIKE :patri_equipamento';
    		$pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($query);
            $patri_equipamento = '%'.$patri_equipamento.'%';
            $comando->bindParam ('patri_equipamento',$patri_equipamento);
    		$comando->execute();
            $equipamento=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $equipamento[] = new Equipamento($row->id_equipamento, 
                $row->patri_equipamento, $row->modelo_equipamento, $row->nro_serie_equipamento, 
                $row->data_aquisicao, $row->nro_nota_fiscal, $row->local_equipamento,
                $row->observacao);
            }
            return $equipamento;
        }

        // Lista os equipamentos por um determinado modelo.
        public function listarPorModeloEquipamento($modelo_equipamento){
            $query = 'SELECT * FROM equipamentos WHERE modelo_equipamento LIKE :modelo_equipamento';
    		$pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($query);
            $modelo_equipamento = '%'.$modelo_equipamento.'%';
            $comando->bindParam ('modelo_equipamento', $modelo_equipamento);
    		$comando->execute();
            $equipamento=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $equipamento[] = new Equipamento($row->id_equipamento, 
                $row->patri_equipamento, $row->modelo_equipamento, $row->nro_serie_equipamento, 
                $row->data_aquisicao, $row->nro_nota_fiscal, $row->local_equipamento,
                $row->observacao);
            }
            return $equipamento;
        }

        //Lista o equipameto pelo seu número de série.
        public function listarPorNroSerieEquipamento($nro_serie_equipamento){
            $query = 'SELECT * FROM equipamentos WHERE nro_serie_equipamento LIKE :nro_serie_equipamento';
    		$pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($query);
            $nro_serie_equipamento = '%'.$nro_serie_equipamento.'%';
            $comando->bindParam ('nro_serie_equipamento', $nro_serie_equipamento);
    		$comando->execute();
            $equipamento=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $equipamento[] = new Equipamento($row->id_equipamento, 
                $row->patri_equipamento, $row->modelo_equipamento, $row->nro_serie_equipamento, 
                $row->data_aquisicao, $row->nro_nota_fiscal, $row->local_equipamento,
                $row->observacao);
            }
            return $equipamento;
        }

        //Lista todos os equipamentos que estão nos setores.
        public function listarPorLocalEquipamento($local_equipamento){
            $query = 'SELECT * FROM equipamentos WHERE local_equipamento LIKE :local_equipamento';
    		$pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($query);
            $local_equipamento = '%'.$local_equipamento.'%';
            $comando->bindParam ('local_equipamento', $local_equipamento);
    		$comando->execute();
            $equipamento=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $equipamento[] = new Equipamento($row->id_equipamento, 
                $row->patri_equipamento, $row->modelo_equipamento, $row->nro_serie_equipamento, 
                $row->data_aquisicao, $row->nro_nota_fiscal, $row->local_equipamento,
                $row->observacao);
            }
            return $equipamento;
        }

        // Insere um novo equipamento no banco de dados.
        public function inserir(Equipamento $equipamento){
            $qInserir = "INSERT INTO equipamentos(patri_equipamento, modelo_equipamento, 
            nro_serie_equipamento, data_aquisicao, nro_nota_fiscal, local_equipamento, observacao) 
            VALUES (:patri_equipamento, :modelo_equipamento, :nro_serie_equipamento,
            :data_aquisicao, :nro_nota_fiscal, :local_equipamento, :observacao)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":patri_equipamento",$equipamento->patri_equipamento);
            $comando->bindParam(":modelo_equipamento",$equipamento->modelo_equipamento);
            $comando->bindParam(":nro_serie_equipamento",$equipamento->nro_serie_equipamento);
            $comando->bindParam(":data_aquisicao",$equipamento->data_aquisicao);
            $comando->bindParam(":nro_nota_fiscal",$equipamento->nro_nota_fiscal);
            $comando->bindParam(":local_equipamento",$equipamento->local_equipamento);
            $comando->bindParam(":observacao",$equipamento->observacao);
            $comando->execute();
            $equipamento->id = $pdo->lastInsertId();
            return $equipamento;
        }

        // Atualiza um equipamento pelo seu patrimônio.
        public function atualizar(Equipamento $equipamento){
            $qAtualizar = "UPDATE equipamentos SET id_equipamento=:id_equipamento, 
            modelo_equipamento=:modelo_equipamento, nro_serie_equipamento=:nro_serie_equipamento,
            data_aquisicao=:data_aquisicao, nro_nota_fiscal=:nro_nota_fiscal, 
            local_equipamento=:local_equipamento, observacao=:observacao WHERE patri_equipamento=:patri_equipamento";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":id_equipamento",$equipamento->id_equipamento);
            $comando->bindParam(":patri_equipamento",$equipamento->patri_equipamento);
            $comando->bindParam(":modelo_equipamento",$equipamento->modelo_equipamento);
            $comando->bindParam(":nro_serie_equipamento",$equipamento->nro_serie_equipamento);
            $comando->bindParam(":data_aquisicao",$equipamento->data_aquisicao);
            $comando->bindParam(":nro_nota_fiscal",$equipamento->nro_nota_fiscal);
            $comando->bindParam(":local_equipamento",$equipamento->local_equipamento);
            $comando->bindParam(":observacao",$equipamento->observacao);
            $comando->execute();    
            return($equipamento);    
        }
    }
?>