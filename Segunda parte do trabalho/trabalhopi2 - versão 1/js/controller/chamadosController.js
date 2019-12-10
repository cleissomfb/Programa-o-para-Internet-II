class ChamadosController {

  constructor() {
    this.chamadosService = new ChamadosAPIServece();
    this.tabelaChamados = new TabelaChamados(this, "main");
    this.formChamados = new FormChamados(this, "main");
  }

  carregarFormularioChamado(event) {
    event.preventDefault();
    this.formChamados.montarFormChamados();
  }
  carregarChamados() {
    const self = this;
    console.log(self);
    const sucesso = function(chamados) {
      console.log("Carregar Chamados: " + self);
      self.tabelaChamados.montarTabelaChamados(chamados);
    }
    const trataErro = function(statusCode) {
      console.log("Erro ao Carregar Chamados: " + statusCode);
    }
    this.chamadosService.buscarChamados(sucesso, trataErro);
  }

  salvar(event) {
    event.preventDefault();
    let chamado = new Chamados();
    chamado.patri_equipamento = document.querySelector("#txtNroPatri").value;
    chamado.nome_usuario = document.querySelector("#txtNomeUsuario").value;
    chamado.desc_problema = document.querySelector("#txtDescProblema").value;
    chamado.solucao_problema = document.querySelector("#txtSolucaoProblema").value
    chamado.id_status = document.querySelector("#status").value;
    chamado.id_usuario = document.querySelector("#txtTecnico").value;

    this.salvarChamado(chamado);
    console.log("Método Salvar: " + chamado);
  }

  salvarChamado(chamado) {
    const self = this;

    console.log("Método salvarChamado: " + chamado);

    const sucesso = function(chamado) {
      console.log("Chamado Salvo" + chamado);
    }
    const trataErro = function(statusCode) {
      console.log("Erro ao salvar o chamado: " + statusCode)
    }

    this.chamadosService.enviarChamado(chamado, sucesso, trataErro);
    
    self.carregarChamados();
    self.formChamados.limparFormularioChamados();
  }

  limpar(event) {
    this.formChamados.limparFormularioChamados();
    this.carregarChamados();
  }


}

