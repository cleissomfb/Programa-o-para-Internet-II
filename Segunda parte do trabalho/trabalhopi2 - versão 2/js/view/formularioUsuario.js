class FormUsuario {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarFormUsuario() {
    var str = `
    <nav class="bg-primary">
          <ul class="nav justify-content-end">
            <li class="nav-item active">
              <a class="nav-link" href="paginaPrincipal.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Chamados
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Cadastrar novo chamado</a>
                <a class="dropdown-item" href="chamados.html">Visualizar Chamado</a>
                <a class="dropdown-item" href="#">Pesquisar Chamado</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Equipamentos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Cadastrar Equipamentos</a>
                <a class="dropdown-item" href="equipamentos.html">Visualizar Equipamentos</a>
                <a class="dropdown-item" href="#">Pesquisar Equipamentos</a>
              </div>
            </li>
      
            <li class="nav-item dropleft">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Usuários
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Cadastrar Usuários</a>
                <a class="dropdown-item" href="usuario.html">Visualizar Usuários</a>
                <a class="dropdown-item" href="#">Pesquisar Usuários</a>
              </div>
            </li>
          </ul>
        </nav>
    <div class = "container">
      <div class="card">
        <h2 class="card-header text-center">Cadastro de novo usuário</h2>
        <div class="card-body">
          <form id="formulario">
            <div class="form-row">
              <div class="col-md-12 mb-3">
                <label for="txtNomeUsuario">Nome do Usuário: </label>
                <input type="text" id="txtNomeUsuario" class="form-control">
              </div>
              <br />
              <br />
              <div class="col-md-6 mb-3">
                <label for="txtLoginUsuario">Login: </label>
                <input type="text" id="txtLoginUsuario" class="form-control">
              </div>
              <br />
              <br />
              <div class="col-md-6 mb-3">
                <label for="txtSenhaUsuario">Senha: </label>
                <input type="password" id="txtSenhaUsuario"
                class="form-control">
              </div>
              <br />
              <br />
              <div class="col-md-12 mb-3">
                <input type="submit" class="btn btn-success" id="btnsalvar" value="Salvar">
                <input type="reset" class="btn btn-danger" value="Cancelar">
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
      `;
    var containerForm = document.querySelector(this.seletor);
    containerForm.innerHTML = str;

    var form = document.querySelector("#formulario");
    const self = this;
    form.onsubmit = function (event) {
      self.controller.salvar(event);
    }
    form.onreset = function (event) {
      self.controller.limpar(event);
    }
  }

  limparFormularioUsuario() {
    document.querySelector("#txtNomeUsuario").value = "";
    document.querySelector("#txtLoginUsuario").value = "";
    document.querySelector("#txtSenhaUsuario").value = "";
  }
}