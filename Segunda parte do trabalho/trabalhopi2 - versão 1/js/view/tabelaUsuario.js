class TabelaUsuario {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarTabelaUsuario(usuario) {
    var str = `
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
                      <th scope="col">Senha do Usuário</th>
                      <th scope="col"></th>
                      <th scope="col"><a id="novo" href="#" class="btn btn-primary">Novo Usuário</a></th>
                    </thead>
               `;
          console.log("Método montarTabelaUsuario: " + usuario);
          for (var i in usuario) {
          str += `<tbody>
                    <tr>
                        <th scope="row">${usuario[i].id_usuario}</td>
                        <td>${usuario[i].nome_usuario}</td>
                        <td>${usuario[i].login_usuario}</td>
                        <td>${usuario[i].senha_usuario}</td>
                        <td><a id="editar" href="#" class="btn btn-warning">Editar</a></td>
                        <td><a id="deletar" href="#" class="btn btn-danger">Deletar</a></td>
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

  }

}
