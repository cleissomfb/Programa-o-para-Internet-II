class FormEquipamentos {
  constructor (controller, seletor) {
    this.controller = controller
    this.seletor = seletor
  }

  montarFormEquipamentos (equipamento) {
    if (!equipamento) {
      equipamento = new Equipamentos()
    }
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
        <h2 class="card-header text-center">Cadastro de novo equipamentos</h2>
        <div class="card-body">
          <form id="formulario">
            <div class="form-row">

            <div class="col-md-2 mb-3">
              <label for="IdEquipamento">ID do Equipamento: </label>
              <input type="text" disabled id="txtIdEquipamento" class="form-control" value="${equipamento.id_equipamento ? equipamento.id_equipamento :''}">
            </div>

              <div class="col-md-2 mb-3">
                <label for="txtNroPatri">Número Patrimônio: </label>
                <input type="number" id="txtNroPatri" class="form-control" value="${
  equipamento.patri_equipamento ? equipamento.patri_equipamento : ''
}">
              </div>

              <div class="col-md-8 mb-3">
                <label for="txtModeloEquipamento">Modelo do Equipamento: </label>
                <input type="text" id="txtModeloEquipamento" class="form-control" value="${
  equipamento.modelo_equipamento ? equipamento.modelo_equipamento : ''
}">
              </div>

              <div class="col-md-5 mb-3"> 
                <label for="txtNumetoSerie">Número de Serie: </label>
                <input type="text" id="txtNumeroSerie" class="form-control" value="${
  equipamento.nro_serie_equipamento ? equipamento.nro_serie_equipamento : ''
}">
              </div>

              <div class="col-md-7 mb-3"> 
                <label for="txtLocalEquipamento">Local do Equipamento:</label>
                <input type="text" id="txtLocalEquipamento" class="form-control" value="${
  equipamento.local_equipamento ? equipamento.local_equipamento : ''
}">
              </div>

              <div class="col-md-6 mb-3"> 
                <label for="txtNumeroNotaFiscal">Número da Nota Fiscal: </label>
                <input type="text" id="txtNumeroNotaFiscal" class="form-control" value="${
  equipamento.nro_nota_fiscal ? equipamento.nro_nota_fiscal : ''
}">
              </div>

              <div class="col-md-6 mb-3"> 
                <label for="txtDataAquisicao">Data de Aquisição: </label>
                <input type="date" id="txtDataAquisicao" class="form-control" value="${
  equipamento.data_aquisicao ? equipamento.data_aquisicao : ''
}">
              </div>
              
              <div class="col-md-12 mb-3"> 
                <label for="txtObservacao">Observação:</label>
                <input type="text" id="txtObservacao" class="form-control" value="${
  equipamento.observacao ? equipamento.observacao : ''
}">
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
      `
    var containerForm = document.querySelector(this.seletor)
    containerForm.innerHTML = str

    var form = document.querySelector('#formulario')
    const self = this
    form.onsubmit = function (event) {
      if (!equipamento.id_equipamento) {
        self.controller.salvar(event)
      } else {
        self.controller.editar(equipamento.id_equipamento, event)
      }
    }
    form.onreset = function (event) {
      self.controller.limpar(event)
    }
  }

  limparFormularioEquipamentos () {
    document.querySelector('#txtNroPatri').value = ''
    document.querySelector('#txtModeloEquipamento').value = ''
    document.querySelector('#txtNumeroSerie').value = ''
    document.querySelector('#txtDataAquisicao').value = ''
    document.querySelector('#txtNumeroNotaFiscal').value = ''
    document.querySelector('#txtLocalEquipamento').value = ''
    document.querySelector('#txtObservacao').value = ''
  }

  getDataEquipamento () {
    let equipamento = new Equipamentos()
    if (!document.querySelector('#txtIdEquipamento').value) {
      equipamento.id_equipamento = document.querySelector('#txtIdEquipamento').value
      console.log(equipamento.id_equipamento)
    }

    equipamento.patri_equipamento = document.querySelector('#txtNroPatri').value

    equipamento.modelo_equipamento = document.querySelector('#txtModeloEquipamento').value

    equipamento.nro_serie_equipamento = document.querySelector('#txtNumeroSerie').value

    equipamento.local_equipamento = document.querySelector('#txtLocalEquipamento').value

    equipamento.nro_nota_fiscal = document.querySelector('#txtNumeroNotaFiscal').value

    equipamento.data_aquisicao = document.querySelector('#txtDataAquisicao').value

    equipamento.observacao = document.querySelector('#txtObservacao').value

    return equipamento
  }
}
