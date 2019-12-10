class UsuarioController {

  constructor() {
    this.usuarioService = new UsuarioAPIService();
    this.tabelaUsuario = new TabelaUsuario(this, "main");
    this.formUsuario = new FormUsuario(this, "main");
  }

  carregarFormularioUsuario(event) {
    event.preventDefault();
    this.formUsuario.montarFormUsuario();
  }
  carregarUsuario() {
    const self = this;
    console.log(self);
    const sucesso = function(usuario) {
      console.log("Carregar Usuario: " + self);
      self.tabelaUsuario.montarTabelaUsuario(usuario);
    }
    const trataErro = function(statusCode) {
      console.log("Erro ao Carregar Usuario: " + statusCode);
    }
    this.usuarioService.buscarUsuarios(sucesso, trataErro);
  }

  salvar(event) {
    event.preventDefault();
    let usuario = new Usuario();
    usuario.login_usuario = document.querySelector("#txtLoginUsuario").value;
    usuario.senha_usuario = document.querySelector("#txtSenhaUsuario").value;
    usuario.nome_usuario = document.querySelector("#txtNomeUsuario").value;

    this.salvarUsuario(usuario);
    console.log("Método Salvar: " + usuario);
  }

  salvarUsuario(usuario) {
    const self = this;

    // console.log("Método salvarUsuario: " + usuario);

    const sucesso = function(usuario) {
      // console.log("Equipamentos Salvo" + usuario);
    }
    const trataErro = function(statusCode) {
      // console.log("Erro ao salvar o chamado: " + statusCode)
    }

    this.usuarioService.enviarUsuarios(usuario, sucesso, trataErro);
    
    self.carregarUsuario();
    self.formUsuario.limparFormularioUsuario();
  }

  limpar(event) {
    this.formUsuario.limparFormularioUsuario();
    this.carregarUsuario();
  }

  deletarUsuario (id, event) {
    const self = this
    this.usuarioService.deletarUsuario(id, function () {
        self.carregarUsuario()
      },
      function (status) {
        console.log(status)
      }
    )
  }

  carregaFormularioComUsuario (id, event) {
    // console.log(id)
    event.preventDefault()

    const self = this
    const ok = function (usuario) {
      self.formUsuario.montarFormUsuario(usuario)
    }
    const erro = function (status) {
      console.log(status)
    }

    this.usuarioService.buscarUsuario(id, ok, erro)
  }

  editar (id, event) {
    event.preventDefault()
    console.log(id);

    let usuario = this.formUsuario.getDataUsuario()

    const self = this

    this.usuarioService.atualizarUsuario(id, usuario, function () {
        self.formUsuario.limparFormularioUsuario()
        self.carregarUsuario()
        console.log("Passou aqui!")
      },
      function (status) {
        console.log(status)
      }
    )
  }


}

