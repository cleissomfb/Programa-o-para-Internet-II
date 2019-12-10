class TabelaChamados {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarTabelaChamados(chamados) {
    var str = `
    <div class="container">
      <div class="row center">
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
                <th scope="col"><a id="novo" href="#" class="btn btn-primary">Novo Equipamento</a></th>
              </thead>`;
    console.log("Método montarTabelaChamados: " + chamados);
    for (var i in chamados) {
      str += `<tbody>
                  <tr>
                    <td>${chamados[i].id_chamado}</td>
                    <td>${chamados[i].patri_equipamento}</td>
                    <td>${chamados[i].nome_usuario}</td>
                    <td>${chamados[i].desc_problema}</td>
                    <td>${chamados[i].solucao_problema}</td>
                    <td>${chamados[i].id_status}</td>
                    <td>${chamados[i].id_usuario}</td>
                    <td><a id="editar" href="#" class="btn btn-warning">Editar</a></td>
                    <td><a id="deletar" href="#" class="btn btn-danger">Deletar</a></td>
                  </tr>
              </tbody>`;

    }
    str += `
            </table>
          </div>
        </div>   
      </div>
    </div>         
      `;

    var tabelaChamados = document.querySelector(this.seletor);
    tabelaChamados.innerHTML = str;


    const self = this;
    const linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function (event) {
      self.controller.carregarFormularioChamado(event);
    }

  }

}
