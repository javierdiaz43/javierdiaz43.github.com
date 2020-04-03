//obtener los elementos de la clase .clase
let links = document.querySelectorAll(".close");
//recorrelos
links.forEach(function(link)){
  //agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".cotent");
    //quitarle las clases de animacion que ya addEventListener
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    //Agregar clases para animar la salida "fadeOutUp"
    content.classList.add("fadeOutUp");
    content.classList.add("animated");
    setTimeout(function){  // genera un delay de 600 milisegundos en la ejecucion de la sig. instrucción
      location.ref = "/";  //no devuelve a la pagina inicial
    }, 600)
    return false;
  });
});
