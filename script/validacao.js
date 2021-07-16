function CadastroP(){
  var pessoa={
    nome:"",
    niver:"",
    email:"",
    comentario:""
  };

  pessoa.nome=document.getElementById("nomef").value;
  document.getElementById("nomec").innerHTML=pessoa.nome;

  pessoa.niver=document.getElementById("dataf").value;
  document.getElementById("datac").innerHTML=pessoa.niver;

  pessoa.email=document.getElementById("emailf").value;
  document.getElementById("emailc").innerHTML=pessoa.email;

  pessoa.comentario=document.getElementById("comentariof").value;
  document.getElementById("comentarioc").innerHTML=pessoa.comentario;


}
