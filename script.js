String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }

const PALABRAS = ['casa', 'raton', 'arbol', 'perro', 'gato', "elefante", "garza", 'gusano', 'plato', 'loro', 'rueda', 'persona'];
const PALABRA = PALABRAS[Math.floor(Math.random()*PALABRAS.length)];
let palabraConGuiones = PALABRA.replace(/./g, '_ ');
let contadorFallos = 0;
document.querySelector("#guiones").innerHTML = palabraConGuiones;
document.querySelector('#buscar').addEventListener('click', () => {
    const LETRA = document.querySelector("#letra").value;
    let fallo = true;
    for (const i in PALABRA){
        if (LETRA == PALABRA[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, LETRA);
            fallo = false;
        }
    }
    if (fallo){
        contadorFallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(200*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            alert("Perdiste el juego")
        }
    }else{
        if(palabraConGuiones.indexOf("_") < 0){
            document.querySelector("#ganador").style.display = "flex";
        }
    }
    document.querySelector("#guiones").innerHTML = palabraConGuiones;
    document.querySelector("#letra").value = "";
    document.querySelector("#letra").focus();
    
})