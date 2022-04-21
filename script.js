
/* 
**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */


const container = document.querySelector('.sc-container');
const normalDifficultMax = 100;
const hardDifficultMax = 81;
const legendaryDifficultMax = 49;
const userChoice = document.getElementById('choice').value;

document.querySelector('button').addEventListener('click', function(){
    
    if(userChoice === "normal"){
        initNormal();
    }else if(userChoice === "hard"){
        initHard();
    }else if(userChoice === "legendary"){
        initLegendary();
    }
})



function initNormal(){

    for(let i = 1; i <= normalDifficultMax; i++){
        const sq = createSquare(container);
        console.log(sq);
        const numero = [i];
        console.log([i]);
        sq.className = 'square sc-100';
        sq.innerHTML =`<span>${numero}</span>`;
        sq.addEventListener('click', function(){
            this.classList.add('clicked');
        })
        
    }
}
function initHard(){

    for(let i = 1; i <= hardDifficultMax; i++){
        const sq = createSquare(container);
        console.log(sq);
        const numero = [i];
        console.log([i]);
        sq.className = 'square sc-81';
        sq.innerHTML =`<span>${numero}</span>`;
        sq.addEventListener('click', function(){
            this.classList.add('clicked');
        })
        
    }
}
function initLegendary(){

    for(let i = 1; i <= legendaryDifficultMax; i++){
        const sq = createSquare(container);
        console.log(sq);
        const numero = [i];
        console.log([i]);
        sq.className = 'square sc-49';
        sq.innerHTML =`<span>${numero}</span>`;
        sq.addEventListener('click', function(){
            this.classList.add('clicked');
        })
        
    }
}

/* creazione square */

function createSquare(target){
    const sq = document.createElement('div');
    target.append(sq)
    return sq;
}

