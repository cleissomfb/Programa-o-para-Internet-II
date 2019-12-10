class TabelaEquipamentos {
  constructor(controller, seletor) {
    this.controller = controller;
    this.seletor = seletor;
  }

  montarTabelaEquipamentos(equipamentos) {
    var str = `
    <div class="container-fluid">
      <div class="row center">
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
                <tr>
                    <th scope="row">${equipamentos[i].id_equipamento}</td>
                    <td>${equipamentos[i].patri_equipamento}</td>
                    <td>${equipamentos[i].modelo_equipamento}</td>
                    <td>${equipamentos[i].nro_serie_equipamento}</td>
                    <td>${equipamentos[i].data_aquisicao}</td>
                    <td>${equipamentos[i].nro_nota_fiscal}</td>
                    <td>${equipamentos[i].local_equipamento}</td>
                    <td>${equipamentos[i].observacao}</td>
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
    `;

    var tabelaEquipamentos = document.querySelector(this.seletor);
    tabelaEquipamentos.innerHTML = str;


    const self = this;
    const linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function (event) {
      self.controller.carregarFormularioEquipamentos(event);
    }

  }

}
