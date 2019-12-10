const chamadosController = new ChamadosController();

var body = document.querySelector("body");
body.onload = function () {
    chamadosController.carregarChamados();
}

let nav = document.querySelector("nav");
nav.onload = function(){
    chamadosController.carregarNavbar();
}
