window.addEventListener("load", init);

const LIST = ["kepek/DSC7025.jpg", "kepek/DSC7365.jpg", "kepek/DSC7371_1.jpg", "kepek/DSC7444.jpg", "kepek/DSC7515.jpg"];

function init(){
    const ARTICLE = document.querySelectorAll("article");
    let htmlValtozo = listabaKiir(ARTICLE, LIST);
    ARTICLE[0].innerHTML += htmlValtozo;

    const KISKEPEK = document.querySelectorAll("article div img");
    for(let index = 0; index < KISKEPEK.length; index++){
        KISKEPEK[index].addEventListener("click", function(){
            kattintasKezelo(index)
        });
    }
}

function listabaKiir(ARTICLE, LIST){
    
    let htmlValtozo = "";
    for (let index = 0; index < LIST.length; index++){
        htmlValtozo += "<div>";
        htmlValtozo += `<img src=${LIST[index]}></img>`;
        htmlValtozo += "</div>";
    }

    return htmlValtozo;

}

function kattintasKezelo(i){
    console.log(event.target);
    console.log(event.target.src);
    const NAGYKEP = document.querySelectorAll("header div img");
    console.log(NAGYKEP);
    NAGYKEP[0].src = LIST[i];
}
