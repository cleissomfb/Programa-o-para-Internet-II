<?php

    //Classe Usuário.
    class Usuario {
        public $id_usuario;
        public $login_usuario;
        public $senha_usuario;
        public $nome_usuario;

        function __construct($id_usuario, $login_usuario, $senha_usuario, $nome_usuario){
            $this->id_usuario = $id_usuario;
            $this->login_usuario = $login_usuario;
            $this->senha_usuario = $senha_usuario;
            $this->nome_usuario = $nome_usuario;
        }
    }
?>