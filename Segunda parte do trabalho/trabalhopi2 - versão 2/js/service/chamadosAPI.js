class ChamadosAPIServece {
    uri = "http://localhost:8080/api/chamados";

    buscarChamados(ok, erro) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //Vai chamar o método sucesso definido no controller
                console.log("Método buscarChamados: " + this.responseText);
                ok(JSON.parse(this.responseText));
            }
            else {
                //Vai chamar o método trataErro definido no controller
                erro(this.status);
            }
        };
        xhttp.open("GET", this.uri, true);
        xhttp.send();
    }

    enviarChamados(chamados, ok, erro) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                ok(JSON.parse(this.responseText));
            }
            else {
                erro(this.status);
            }
        };
        xhttp.open("POST", this.uri, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(chamados));
    }

    atualizaChamados(chamados, ok, erro){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                ok(JSON.parse(this.responseText));
            }
            else {
                erro(this.status);
            }
        };
        xhttp.open("PUT", this.uri, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(chamados));
    }
}