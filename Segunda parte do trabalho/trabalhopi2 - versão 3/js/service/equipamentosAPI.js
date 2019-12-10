class EquipamentosAPIService {
  uri = 'http://localhost:8080/api/equipamentos'

  buscarEquipamentos (ok, erro) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      // Se finalizou a comunicacao
      if (this.readyState === 4) {
        if (this.status === 200) {
          // Vai chamar o método sucesso definido no controller
          ok(JSON.parse(this.responseText))
        } else {
          // Vai chamar o método trataErro definido no controller
          erro(this.status)
        }
      }
    }
    xhttp.open('GET', this.uri, true)
    xhttp.send()
  }

  enviarEquipamentos (equipamento, ok, erro) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      // Se finalizou a comunicacao
      if (this.readyState === 4) {
        if (this.status === 201) {
          ok(JSON.parse(this.responseText))
        } else {
          erro(this.status)
        }
      }
    }
    xhttp.open('POST', this.uri, true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(equipamento))
  }

  deletarEquipamento (id, ok, error) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        ok(JSON.parse(this.responseText))
      } else if (this.status !== 200) {
        error(this.status)
      }
    }
    xhttp.open('DELETE', this.uri + '/id/' + id, true)
    xhttp.send()
  }

  buscarEquipamento (id, ok, error) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      console.log('Método buscarEquipamento(): ' + id)
      if (this.readyState === 4 && this.status === 200) {
        console.log('Método buscarEquipamento() dentro do if: ' + id)
        ok(JSON.parse(this.responseText))
      } else if (this.status !== 200) {
        error(this.status)
      }
    }
    xhttp.open('GET', this.uri + '/' + id, true)
    xhttp.send()
  }

  atualizarEquipamento (id, equipamento, ok, error) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        ok(JSON.parse(this.responseText))
      } else if (this.status !== 200) {
        error(this.status)
      }
    }
    xhttp.open('PUT', this.uri + '/' + id, true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(equipamento))
  }
}
