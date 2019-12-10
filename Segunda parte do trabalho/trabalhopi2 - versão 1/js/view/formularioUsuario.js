class FormUsuario {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarFormUsuario() {
    var str = `
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