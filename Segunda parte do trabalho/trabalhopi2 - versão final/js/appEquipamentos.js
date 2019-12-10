const equipamentosController = new EquipamentosController();

var body = document.querySelector("body");
body.onload = function () {
    equipamentosController.carregarEquipamentos();
}
