class TabelaChamados {
  constructor (controller, seletor) {
    this.controller = controller
    this.seletor = seletor
  }

  montarTabelaChamados (chamados) {
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
    <div class="container">
      <div class="row center">
        <div class="col-12">
          <div class="col">
            <h2 class="text-center">Tabela de Chamados</h2>
          </div>
          <div id="tabelaChamados">
            <div class="table-responsive">
              <table class="table table-hover text-center table-sm" >
                <thead>
                  <th scope="col">ID do Chamado</th>
                  <th scope="col">Patrimônio do Equipamento</th>
                  <th scope="col">Nome do Usuário</th>
                  <th scope="col">Descrição do Problema</th>
                  <th scope="col">Solução do Problema</th>
                  <th scope="col">Status</th>
                  <th scope="col">Funcionario</th>
                  <th scope="col"></th>
                  <th scope="col"><a id="novo" href="#" class="btn btn-primary">Novo Chamado</a></th>
                </thead>
    ${chamados
    .map(function (chamados) {
      return `
      <tbody>
        <tr id=${chamados.id_chamado}>
          <td>${chamados.id_chamado}</td>
          <td>${chamados.patri_equipamento}</td>
          <td>${chamados.nome_usuario}</td>
          <td>${chamados.desc_problema}</td>
          <td>${chamados.solucao_problema}</td>
          <td id="mudaStatus">${arrumaStatus(chamados.id_status)}</td>
          <td>${arrumarFuncionario(chamados.id_usuario)}</td>
          <td><a id="editarChamado" href="#" class="btn btn-warning">Editar</a></td>
          <td><a id="deletarChamado" href="#" class="btn btn-danger">Deletar</a></td>
        </tr>
      </tbody>
      `
    })
    .join('')}
            </table>
          </div>
        </div>   
      </div>
    </div>
  </div>         
      `

    function arrumaStatus (id_status) {
      if (id_status === 1) {
        return 'Aberto'
      } else if (id_status === 2) {
        return 'Em atendimento'
      } else {
        return 'Concluido'
      }
    }

    function arrumarFuncionario (id_usuario) {
      if (id_usuario === 1) {
        return 'Administrador'
      } else if (id_usuario === 2) {
        return 'Cleissom FB'
      } else if (id_usuario === 3) {
        return 'Estagiario'
      } else if (id_usuario === 4) {
        return 'Marcello'
      } else if (id_usuario === 6) {
        return 'Carla'
      } else if (id_usuario === 7) {
        return 'Leonardo Caldeira Benites'
      } else if (id_usuario === 9) {
        return 'Lucas Morais'
      } else if (id_usuario === 11) {
        return 'Thomas Turbano'
      } else if (id_usuario === 12) {
        return 'Gui Souza'
      } else if (id_usuario === 13) {
        return 'Kleber Afonso'
      } else {
        return 'Técnico novo!'
      }
    }
    var tabelaChamados = document.querySelector(this.seletor)
    tabelaChamados.innerHTML = str

    const self = this
    const linkNovo = document.querySelector('#novo')
    linkNovo.onclick = function (event) {
      self.controller.carregarFormularioChamado(event)
    }

    const linksDelete = document.querySelectorAll('#deletarChamado')
    for (let linkDelete of linksDelete) {
      const id = linkDelete.parentNode.parentNode.id

      linkDelete.onclick = function (event) {
        self.controller.deletarChamado(id)
      }
    }

    const linksEdit = document.querySelectorAll('#editarChamado')
    for (let linkEdit of linksEdit) {
      const id = linkEdit.parentNode.parentNode.id
      // Outra forma de tratar o evento (click) - nesse caso deve ter bind
      console.log('Variavel id ao clicar em editar :' + id)
      linkEdit.addEventListener('click', this.controller.carregaFormularioComChamado.bind(this.controller, id))
    }
  }
}
