class TabelaEquipamentos {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarTabelaEquipamentos(equipamentos) {
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
    <div class="container-fluid">
      <div class="row center">
        <div class="col-12">
          <div class="col">
            <h2 class="text-center">Tabela de Equipamentos</h2>
          </div>
          <div id="tabelaEquipamentos">
            <div class="table-responsive-sm">
              <table class="table table-hover text-center table-sm" >
                <thead>
                    <th scope="col">ID do Equipamento</th>
                    <th scope="col">Patrimônio</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Nroª Série</th>
                    <th scope="col">Data de Aquisição</th>
                    <th scope="col">Nota Fiscal</th>
                    <th scope="col">Local</th>
                    <th scope="col">Observação</th>
                    <th scope="col"></th>
                    <th scope="col"><a id="novo" href="#" class="btn btn-primary">Novo Equipamento</a></th>
                </thead>`;
    console.log("Método montarTabelaChamados: " + equipamentos);
    for (var i in equipamentos) {
      str += `<tbody>
                <tr id="${equipamentos[i].id_equipamento}">
                    <th scope="row">${equipamentos[i].id_equipamento}</td>
                    <td>${equipamentos[i].patri_equipamento}</td>
                    <td>${equipamentos[i].modelo_equipamento}</td>
                    <td>${equipamentos[i].nro_serie_equipamento}</td>
                    <td>${equipamentos[i].data_aquisicao}</td>
                    <td>${equipamentos[i].nro_nota_fiscal}</td>
                    <td>${equipamentos[i].local_equipamento}</td>
                    <td>${equipamentos[i].observacao}</td>
                    <td><a id="editarEquipamento" href="#" class="btn btn-warning">Editar</a></td>
                    <td><a id="deletarEquipamento" href="#" class="btn btn-danger">Deletar</a></td>
                </tr>
              </tbody>
            `;
    }
    str += `
            </table>
          </div>
        </div>
      </div>   
    </div>
  </div>    
    `;

    var tabelaEquipamentos = document.querySelector(this.seletor);
    tabelaEquipamentos.innerHTML = str;


    const self = this;
    const linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function (event) {
      self.controller.carregarFormularioEquipamentos(event);
    }

    const linksDelete = document.querySelectorAll("#deletarEquipamento");
      for(let linkDelete of linksDelete){
        const id = linkDelete.parentNode.parentNode.id;
        // console.log("Entrou aqui", id);
        linkDelete.onclick = function(event){
          self.controller.deletarEquipamento(id);
        }
      }

    const linksEdit = document.querySelectorAll("#editarEquipamento");
    for (let linkEdit of linksEdit) {
      const id = linkEdit.parentNode.parentNode.id;
      //Outra forma de tratar o evento (click) - nesse caso deve ter bind
      // console.log("Variavel id ao clicar em editar :" + id);
      linkEdit.addEventListener("click", this.controller.carregaFormularioComEquipamentos.bind(this.controller, id));
    }

  }

}
