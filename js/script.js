let menuVisible = false;
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("unity");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("html");
        habilidades[5].classList.add("js");
        habilidades[6].classList.add("puntualidad");
        habilidades[7].classList.add("responsabilidad");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("ingles");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("aprendisaje");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}