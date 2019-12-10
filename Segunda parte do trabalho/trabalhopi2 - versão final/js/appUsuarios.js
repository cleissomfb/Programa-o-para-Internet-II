const usuarioController = new UsuarioController();

var body = document.querySelector("body");
body.onload = function () {
  usuarioController.carregarUsuario();
}
