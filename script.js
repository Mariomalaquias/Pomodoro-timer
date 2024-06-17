const body = document.querySelector('.foco');
const foco = document.querySelector('.focoBtn');
const descansoCurto = document.querySelector('.curto');
const descansoLongo = document.querySelector('.longo');
const image = document.querySelector('.image');
const section = document.querySelector('.section-1');
const tempoNaTela = document.querySelector('#timer');
const botoes = document.querySelectorAll('.botoes');
const botaoComecar = document.querySelector('#comecarBt');

let tempoDecorridoEmSegundos = 1500
let intervaloId = null

foco.addEventListener('click', ()=> {
    tempoDecorridoEmSegundos = 1500
    exchangeAll('foco')
    foco.classList.add('ativar')  
})

descansoCurto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    exchangeAll('descansoCurto')
    descansoCurto.classList.add('ativar')  
})

descansoLongo.addEventListener('click', ()=> {
    tempoDecorridoEmSegundos = 900
    exchangeAll("descansoLongo")
    descansoLongo.classList.add('ativar')
})

function exchangeAll(exchange) {
    mostrarTempo()
    botoes.forEach((exchange)=> {
        exchange.classList.remove('ativar')
    })
    body.setAttribute('class', exchange)
    image.setAttribute('src', `./imagens/${exchange}.png`)

    if(exchange === 'foco'){
        section.innerHTML = `<h1 class="app__title">
    Otimize sua produtividade,<br>
    <strong class="app__title-strong">mergulhe no que importa.</strong>
</h1>`
    } if (exchange === 'descansoCurto'){
        section.innerHTML = `<h1 class="app__title">
    Hora de relaxar,<br>
    <strong class="app__title-strong">descanse 15 minutos.</strong>
</h1>`
    }if(exchange === 'descansoLongo'){
        section.innerHTML = `<h1 class="app__title">
    Hora de relaxar mais um pouco,<br>
    <strong class="app__title-strong">descanse 30 minutos.</strong>
</h1>`
    }

}
const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

botaoComecar.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000) 
    const tempoFormatado = tempo.toLocaleTimeString('pr-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()

