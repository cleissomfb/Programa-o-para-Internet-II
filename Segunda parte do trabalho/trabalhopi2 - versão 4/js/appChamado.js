const chamadosController = new ChamadosController();

var body = document.querySelector("body");
body.onload = function () {
    chamadosController.carregarChamados();
}

