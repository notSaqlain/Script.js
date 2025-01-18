/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.querySelectorAll('div').forEach(div => {
    div.addEventListener('mouseenter', () => {
        if (div.style.color === 'red') {
            div.style.color = '';
        } else {
            div.style.color = 'red';
        }
    });

    div.addEventListener('mouseleave', () => {
        if (div.style.color === 'red') {
            div.style.color = '';
        }
    });
});

document.querySelectorAll('.c1').forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'blue';
    });

    element.addEventListener('dblclick', () => {
        element.style.display = 'none';
    });
});

document.querySelectorAll('span.c2').forEach(span => {
    span.addEventListener('click', () => {
        span.style.color = 'green';
    });
});


document.querySelectorAll('div.c1.c2').forEach(div => {
    div.addEventListener('click', () => {
        alert('Hai cliccato su un div con entrambe le classi c1 e c2');
    });
});

const lightColors = [
    '#FFB6C1', // Light Pink
    '#FFDAB9', // Peach Puff
    '#E6E6FA', // Lavender
    '#D3FFCE', // Light Green
    '#ADD8E6', // Light Blue
    '#FFFACD', // Lemon Chiffon
    '#F0E68C', // Khaki
    '#FFDEAD', // Navajo White
    '#E0FFFF', // Light Cyan
    '#FFC0CB'  // Pink
];

const elements = document.querySelectorAll('.colored');
elements.forEach((el, index) => {
    el.style.backgroundColor = lightColors[index % lightColors.length];
});