class FormChamados {
  constructor (controller, seletor) {
    this.controller = controller
    this.seletor = seletor
  }

  montarFormChamados (chamado) {
    if (!chamado) {
      chamado = new Chamados()
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
        <h2 class="card-header text-center">Cadastro de Chamados</h2>
        <div class="card-body">
          <form id="formulario">
            <div class="form-row">

            <div class="col-md-2 mb-3">
              <label for="txtIdChamado">ID do Chamado: </label>
              <input type="text" id="txtIdChamado" disabled class="form-control" value="${chamado.id_chamado ?chamado.id_chamado :""}">
            </div>

              <div class="col-md-4 mb-3">
                <label for="txtNroPatri">Número de Patrimônio: </label>
                <input type="number" id="txtNroPatri" class="form-control" value="${
  chamado.patri_equipamento ? chamado.patri_equipamento : ''
}">
              </div>
          
              <div class="col-md-6 mb-3">
                <label for="txtNomeUsuario">Nome do Usuário: </label>
                <input type="text" id="txtNomeUsuario" class="form-control" value="${
  chamado.nome_usuario ? chamado.nome_usuario : ''
}">
              </div>

              <div class="col-md-12 mb-3"> 
                <label for="txtDescProblema">Descrição do Problema: </label>
                <input type="text" id="txtDescProblema" class="form-control" value="${
  chamado.desc_problema ? chamado.desc_problema : ''
}">
              </div>

              <div class="col-md-12 mb-3"> 
                <label for="txtSolucaoProblema">Solução do Problema: </label>
                <input type="text" id="txtSolucaoProblema" class="form-control" value="${
  chamado.solucao_problema ? chamado.solucao_problema : ''
}">
              </div>

              <div class="col-md-7 mb-3"> 
                <label for="txtTecnico">Técnico: </label>
                <select name="status" id="status" class="form-control" value="${
  chamado.id_usuario ? chamado.id_usuario : ''
}">
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
                <select name="status" id="txtTecnico" class="form-control" value="${
  chamado.id_status ? chamado.id_status : ''
}">
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
      `
    var containerForm = document.querySelector(this.seletor)
    containerForm.innerHTML = str

    var form = document.querySelector('#formulario')
    const self = this
    form.onsubmit = function (event) {
      if (!chamado.id_chamado) {
        self.controller.salvar(event)
      } else {
        self.controller.editar(chamado.id_chamado, event)
      }
    }

    form.onreset = function (event) {
      self.controller.limpar(event)
    }
  }

  limparFormularioChamados () {
    document.querySelector('#txtNroPatri').value = ''
    document.querySelector('#txtNomeUsuario').value = ''
    document.querySelector('#txtDescProblema').value = ''
    document.querySelector('#txtSolucaoProblema').value = ''
    document.querySelector('#status').value = ''
    document.querySelector('#txtTecnico').value = ''
  }

  getDataChamado () {
    let chamado = new Chamados()
    if (!document.querySelector('#txtIdChamado').value) {
      chamado.id = document.querySelector('#txtIdChamado').value
    }
    chamado.patri_equipamento = document.querySelector('#txtNroPatri').value
    chamado.nome_usuario = document.querySelector('#txtNomeUsuario').value
    chamado.desc_problema = document.querySelector('#txtDescProblema').value
    chamado.solucao_problema = document.querySelector('#txtSolucaoProblema').value
    chamado.id_usuario = document.querySelector('#status').value
    chamado.id_status = document.querySelector('#txtTecnico').value
    return chamado
  }
}
