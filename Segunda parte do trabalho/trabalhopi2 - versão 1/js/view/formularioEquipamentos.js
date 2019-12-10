class FormEquipamentos {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarFormEquipamentos() {
    var str = `
    <div class = "container">
      <div class="card">
        <h2 class="card-header text-center">Cadastro de novo equipamentos</h2>
        <div class="card-body">
          <form id="formulario">
            <div class="form-row">

              <div class="col-md-4 mb-3">
                <label for="txtNroPatri">Número Patrimônio: </label>
                <input type="number" id="txtNroPatri" class="form-control">
              </div>

              <div class="col-md-8 mb-3">
                <label for="txtModeloEquipamento">Modelo do Equipamento: </label>
                <input type="text" id="txtModeloEquipamento" class="form-control">
              </div>

              <div class="col-md-5 mb-3"> 
                <label for="txtNumetoSerie">Número de Serie: </label>
                <input type="text" id="txtNumeroSerie" class="form-control">
              </div>

              <div class="col-md-7 mb-3"> 
                <label for="txtLocalEquipamento">Local do Equipamento:</label>
                <input type="text" id="txtLocalEquipamento" class="form-control">
              </div>

              <div class="col-md-6 mb-3"> 
                <label for="txtNumeroNotaFiscal">Número da Nota Fiscal: </label>
                <input type="text" id="txtNumeroNotaFiscal" class="form-control">
              </div>

              <div class="col-md-6 mb-3"> 
                <label for="txtDataAquisicao">Data de Aquisição: </label>
                <input type="date" id="txtDataAquisicao" class="form-control">
              </div>
              
              <div class="col-md-12 mb-3"> 
                <label for="txtObservacao">Observação:</label>
                <textarea type="text" id="txtObservacao" class="form-control" rows="5"></textarea>
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

  limparFormularioEquipamentos() {
    document.querySelector("#txtNroPatri").value = "";
    document.querySelector("#txtModeloEquipamento").value = "";
    document.querySelector("#txtNumeroSerie").value = "";
    document.querySelector("#txtDataAquisicao").value = "";
    document.querySelector("#txtNumeroNotaFiscal").value = "";
    document.querySelector("#txtLocalEquipamento").value = "";
    document.querySelector("#txtObservacao").value = "";
  }
}