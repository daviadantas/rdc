var elementos = document.querySelectorAll('.explicacaoPar');


elementos.forEach(function (explicacaoPar) {
    explicacaoPar.addEventListener('click', function (){
        explicacaoPar.classList.toggle('ativa');
    })
})