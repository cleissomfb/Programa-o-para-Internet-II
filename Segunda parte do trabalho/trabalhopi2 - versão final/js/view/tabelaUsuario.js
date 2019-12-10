class TabelaUsuario {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarTabelaUsuario(usuario) {
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
            <h2 class="text-center">Tabela de Usuário</h2>
          </div>
            <div id="tabelaUsuario">
              <div class="table-responsive">
                <table class="table table-hover text-center" >
                    <thead>  
                      <th scope="col">ID do Usuário</th>
                      <th scope="col">Nome do Usuário</th>
                      <th scope="col">Login do Usuário</th>
                      <th scope="col"></th>
                      <th scope="col"><a id="novo" href="#" class="btn btn-primary">Novo Usuário</a></th>
                    </thead>
               `;
          console.log("Método montarTabelaUsuario: " + usuario);
          for (var i in usuario) {
          str += `<tbody>
                    <tr id="${usuario[i].id_usuario}">
                        <th scope="row">${usuario[i].id_usuario}</td>
                        <td>${usuario[i].nome_usuario}</td>
                        <td>${usuario[i].login_usuario}</td>
                        <td><a id="editarUsuario" href="#" class="btn btn-warning">Editar</a></td>
                        <td><a id="deletarUsuario" href="#" class="btn btn-danger">Deletar</a></td>
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

    var tabelaUsuario = document.querySelector(this.seletor);
    tabelaUsuario.innerHTML = str;


    const self = this;
    const linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function (event) {
      self.controller.carregarFormularioUsuario(event);
    }

    const linksDelete = document.querySelectorAll("#deletarUsuario");
      for(let linkDelete of linksDelete){
        const id = linkDelete.parentNode.parentNode.id;
        // console.log("Entrou aqui", id);
        linkDelete.onclick = function(event){
          self.controller.deletarUsuario(id);
        }
      }

    const linksEdit = document.querySelectorAll("#editarUsuario");
    for (let linkEdit of linksEdit) {
      const id = linkEdit.parentNode.parentNode.id;
      //Outra forma de tratar o evento (click) - nesse caso deve ter bind
      // console.log("Variavel id ao clicar em editar :" + id);
      linkEdit.addEventListener("click", this.controller.carregaFormularioComUsuario.bind(this.controller, id));
    }

  }

}
