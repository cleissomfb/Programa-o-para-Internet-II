class EquipamentosController {

  constructor() {
    this.equipamentosService = new EquipamentosAPIServece();
    this.tabelaEquipamentos = new TabelaEquipamentos(this, "main");
    this.formEquipamentos = new FormEquipamentos(this, "main");
  }

  carregarFormularioEquipamentos(event) {
    event.preventDefault();
    this.formEquipamentos.montarFormEquipamentos();
  }
  carregarEquipamentos() {
    const self = this;
    console.log(self);
    const sucesso = function(equipamentos) {
      console.log("Carregar Equipamentos: " + self);
      self.tabelaEquipamentos.montarTabelaEquipamentos(equipamentos);
    }
    const trataErro = function(statusCode) {
      console.log("Erro ao Carregar Equipamentos: " + statusCode);
    }
    this.equipamentosService.buscarEquipamentos(sucesso, trataErro);
  }

  salvar(event) {
    event.preventDefault();
    let equipamentos = new Equipamentos();
    equipamentos.patri_equipamento = document.querySelector("#txtNroPatri").value;
    equipamentos.modelo_equipamento = document.querySelector("#txtModeloEquipamento").value;
    equipamentos.nro_serie_equipamento = document.querySelector("#txtNumeroSerie").value;
    equipamentos.data_aquisicao = document.querySelector("#txtDataAquisicao").value
    equipamentos.nro_nota_fiscal = document.querySelector("#txtNumeroNotaFiscal").value;
    equipamentos.local_equipamento = document.querySelector("#txtLocalEquipamento").value;
    equipamentos.observacao = document.querySelector("#txtObservacao").value;
   
    this.salvarEquipamentos(equipamentos);
    console.log("Método Salvar: " + equipamentos);
  }

  salvarEquipamentos(equipamentos) {
    const self = this;

    console.log("Método salvarEquipamentos: " + equipamentos);

    const sucesso = function(equipamentos) {
      console.log("Equipamentos Salvo" + equipamentos);
    }
    const trataErro = function(statusCode) {
      console.log("Erro ao salvar o chamado: " + statusCode)
    }

    this.equipamentosService.enviarEquipamentos(equipamentos, sucesso, trataErro);
    
    self.carregarEquipamentos();
    self.formEquipamentos.limparFormularioEquipamentos();
  }

  limpar(event) {
    this.formEquipamentos.limparFormularioEquipamentos();
    this.carregarEquipamentos();
  }


}

