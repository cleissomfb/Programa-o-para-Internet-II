class FormChamados {

  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarFormChamados() {
    var str = `
    <div class = "container">
      <div class="card">
        <h2 class="card-header text-center">Formulario de Chamados</h2>
        <div class="card-body">
          <form id="formulario">
            <div class="form-row">

              <div class="col-md-4 mb-3">
                <label for="txtNroPatri">Número de Patrimônio: </label>
                <input type="number" id="txtNroPatri" class="form-control">
              </div>
          
              <div class="col-md-8 mb-3">
                <label for="txtNomeUsuario">Nome do Usuário: </label>
                <input type="text" id="txtNomeUsuario" class="form-control">
              </div>

              <div class="col-md-12 mb-3"> 
                <label for="txtDescProblema">Descrição do Problema: </label>
                <textarea type="text" id="txtDescProblema" class="form-control" rows="5"></textarea>
              </div>

              <div class="col-md-12 mb-3"> 
                <label for="txtSolucaoProblema">Solução do Problema: </label>
                <textarea type="text" id="txtSolucaoProblema" class="form-control" rows="5"></textarea>
              </div>

              <div class="col-md-7 mb-3"> 
                <label for="txtTecnico">Técnico: </label>
                <select name="status" id="status" class="form-control">
                  <option value="0">Selecione</option>
                  <option value="1">Administrador</option>
                  <option value="2">Cleissom FB</option>
                  <option value="3">Estagiario</option>
                  <option value="4">Marcello</option>
                  <option value="5"></option>
                  <option value="6">Carla</option>
                  <option value="7">Leonardo Caldeira Benites</option>
                  <option value="9">Lucas Morais</option>
                  <option value="11">Thomas Turbano</option>
                  <option value="12">Gui Souza</option>
                  <option value="13">Kleber Afonso</option>
                </select>
              </div>

              <div class="col-md-5 mb-3">
                <label for="txtStatus">Status de Atendimento:</label>
                <select name="status" id="txtTecnico" class="form-control">
                  <option value="1">Aberto</option>
                  <option value="2">Atendimento</option>
                  <option value="3">Concluido</option>
                </select>
              </div>

              <div class="col-md-12 mb-3">
                <input type="submit" id="btnsalvar" class="btn btn-success" value="Salvar">
                <input type="reset" class="btn btn-danger" value="Cancelar">
              </div>
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

  limparFormularioChamados() {
    document.querySelector("#txtNroPatri").value = "";
    document.querySelector("#txtNomeUsuario").value = "";
    document.querySelector("#txtDescProblema").value = "";
    document.querySelector("#txtSolucaoProblema").value = "";
    document.querySelector("#status").value = "";
    document.querySelector("#txtTecnico").value = "";
  }
  





}