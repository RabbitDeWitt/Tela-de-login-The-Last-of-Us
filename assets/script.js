const body = document.querySelector('body')
const p = document.getElementsByTagName('p')
const label = document.getElementsByTagName('label')
const linha = document.getElementsByClassName('underline')
const btn = document.getElementsByTagName('button')

btn[0].addEventListener('click', mudarTema)

function mudarTema(){
    mudarClasses()
    mudarTexto()
}

function mudarClasses(){
    for(let i = 0; i < p.length; i++){
        p[i].classList.toggle('blue-mode')
        label[i].classList.toggle('blue-mode')
        linha[i].classList.toggle('blue-mode')
        btn[i].classList.toggle('blue-mode')
    }
    body.classList.toggle('blue-mode')
}

function mudarTexto () {
    if(body.classList.contains('blue-mode')){
    btn[0].innerHTML = 'Green Theme'
    }else{
    btn[0].innerHTML = 'Blue Theme'
}
}