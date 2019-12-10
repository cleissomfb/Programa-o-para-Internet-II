<?php

    include_once('Usuario.php');
    include_once('PDOFactory.php');
    
    class UsuarioDAO{

        // Listar todos os usuários cadastrados no banco de dados.
        public function listar(){
		    $query = 'SELECT * FROM usuario';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $usuario=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $usuario[] = new Usuario($row->id_usuario,$row->login_usuario,$row->senha_usuario,$row->nome_usuario);
            }
            return $usuario;
        }
        
        // Inserir um novo usuário
        public function inserir(Usuario $usuario){
            $qInserir = "INSERT INTO usuario(login_usuario, senha_usuario, nome_usuario) VALUES (:login_usuario, :senha_usuario, :nome_usuario)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":login_usuario",$usuario->login_usuario);
            $comando->bindParam(":senha_usuario",$usuario->senha_usuario);
            $comando->bindParam(":nome_usuario",$usuario->nome_usuario);
            $comando->execute();
            $usuario->id = $pdo->lastInsertId();
            return $usuario;
        }

        // Atualiza um usuário.
        public function atualizar(Usuario $usuario){
            $qAtualizar = "UPDATE usuario SET login_usuario=:login_usuario, senha_usuario=:senha_usuario, nome_usuario=:nome_usuario WHERE id_usuario=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":login_usuario",$usuario->login_usuario);
            $comando->bindParam(":senha_usuario",$usuario->senha_usuario);
            $comando->bindParam(":nome_usuario",$usuario->nome_usuario);
            $comando->bindParam(":id",$usuario->id_usuario);
            $comando->execute();    
            return($usuario);    
        }
        
        // Buscar um usuario pelo id_usuario
        public function buscarPorId($id){
            $query = 'SELECT * FROM usuario WHERE id_usuario=:id';	
           $pdo = PDOFactory::getConexao(); 
           $comando = $pdo->prepare($query);
           $comando->bindParam ('id', $id);
           $comando->execute();
           $result = $comando->fetch(PDO::FETCH_OBJ);
           return new Usuario($result->id_usuario,$result->login_usuario,$result->senha_usuario,$result->nome_usuario);           
       }

        // Deletar um usuário pelo id_usuario
        public function deletar($id){
            $qDeletar = "DELETE from usuario WHERE id_usuario=:id";            
            $usuario = $this->buscarPorId($id);
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
            return $usuario;
        }

        // Buscar um usuario pelo nome
        public function listarPorNome($nome){
            $query = 'SELECT * FROM usuario WHERE nome_usuario LIKE :nome_usuario';
    		$pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($query);
            $nome = '%'.$nome.'%';
            $comando->bindParam ('nome_usuario',$nome);
    		$comando->execute();
            $usuario=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $usuario[] = new Usuario($row->id_usuario,$row->login_usuario,$row->senha_usuario,$row->nome_usuario);
            }
            return $usuario;
        }
    }
?>