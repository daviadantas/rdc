let elementos = document.querySelectorAll('.explicacaoPar');

elementos.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        let element = document.querySelectorAll('.explicacao-par');
        element.forEach(function(elemento2){
            if (elemento2.style.display === 'none') {
                elemento2.style.display = 'block'; // ou 'inline', 'flex', etc., dependendo do layout desejado
            } else {
                elemento2.style.display = 'none';
            }
        });
    });
});