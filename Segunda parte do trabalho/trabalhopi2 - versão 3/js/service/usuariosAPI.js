class UsuarioAPIServece{
  uri = "http://localhost:8080/api/usuarios";

  buscarUsuarios(ok, erro){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200){
        ok(JSON.parse(this.responseText));
      }else{
        erro(this.status);
      }
    };
    xhttp.open("GET", this.uri, true);
    xhttp.send();
  }

  enviarUsuarios(usuarios, ok, erro){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 201){
        ok(JSON.parse(this.responseText));
      }else{
        erro(this.status);
      }
    };
    xhttp.open("POST", this.uri, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(usuarios));
  }


}