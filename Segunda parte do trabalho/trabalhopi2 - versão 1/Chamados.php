<?php

    //Classe Chamados.
    class Chamados {
        public $id_chamado;
        public $patri_equipamento;
        public $nome_usuario;
        public $desc_problema;
        public $solucao_problema;
        public $id_status;
        public $id_usuario;

        function __construct($id_chamado, $patri_equipamento, $nome_usuario, 
        $desc_problema, $solucao_problema, $id_status, $id_usuario){
            $this->id_chamado = $id_chamado;
            $this->patri_equipamento = $patri_equipamento;
            $this->nome_usuario = $nome_usuario;
            $this->desc_problema = $desc_problema;
            $this->solucao_problema = $solucao_problema;
            $this->id_status = $id_status;
            $this->id_usuario = $id_usuario;
        }
    }


?>