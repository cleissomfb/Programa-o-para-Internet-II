<?php

    class Equipamento {
        public $id_equipamento;
        public $patri_equipamento;
        public $modelo_equipamento;
        public $nro_serie_equipamento;
        public $data_aquisicao;
        public $nro_nota_fiscal;
        public $local_equipamento;
        public $observacao;

        function __construct($id_equipamento, $patri_equipamento, $modelo_equipamento, 
            $nro_serie_equipamento, $data_aquisicao, $nro_nota_fiscal, $local_equipamento, $observacao){
                $this->id_equipamento = $id_equipamento;
                $this->patri_equipamento = $patri_equipamento;
                $this->modelo_equipamento = $modelo_equipamento;
                $this->nro_serie_equipamento = $nro_serie_equipamento;
                $this->data_aquisicao = $data_aquisicao;
                $this->nro_nota_fiscal = $nro_nota_fiscal;
                $this->local_equipamento = $local_equipamento;
                $this->observacao = $observacao;
        }
    }
?>