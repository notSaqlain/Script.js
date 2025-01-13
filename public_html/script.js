/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// Funzione per cambiare il colore di un div quando il mouse passa sopra
document.querySelectorAll('div').forEach(div => {
    div.addEventListener('mouseenter', () => {
        if (div.style.color === 'red') {
            div.style.color = '';
        } else {
            div.style.color = 'red';
        }
    });

    // Funzione per cambiare il colore di un div quando il mouse esce da esso
    div.addEventListener('mouseleave', () => {
        if (div.style.color === 'red') {
            div.style.color = '';
        }
    });
});

// Funzione per cambiare il colore a blu quando si clicca su un elemento di classe "c1"
document.querySelectorAll('.c1').forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'blue';
    });

    // Funzione per far sparire l'elemento di classe "c1" al doppio click
    element.addEventListener('dblclick', () => {
        element.style.display = 'none';
    });
});

// Funzione per cambiare il colore a verde quando si clicca su uno span di classe "c2"
document.querySelectorAll('span.c2').forEach(span => {
    span.addEventListener('click', () => {
        span.style.color = 'green';
    });
});

// Funzione per far apparire un messaggio di allerta quando si clicca su un div con classi "c1" e "c2"
document.querySelectorAll('div.c1.c2').forEach(div => {
    div.addEventListener('click', () => {
        alert('Hai cliccato su un div con entrambe le classi c1 e c2');
    });
});