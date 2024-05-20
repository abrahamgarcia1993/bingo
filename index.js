const bingo= document.querySelector('.bingo');
const persona = document.querySelector('.persona');
const bot= document.querySelector('.bot');
const btn= document.querySelector('button');
const numerosPersonas=[]
const numerosBot=[]



const crearNumeros=(jugador, array)=>{
    for(let i=0; i<15; i++){
        const p= document.createElement("p")
        p.textContent=Math.floor(Math.random()*100)
        jugador.appendChild(p)
        array.push(p)
    }
}


    crearNumeros(bot,numerosBot)
    crearNumeros(persona, numerosPersonas)
    
    
console.log(numerosPersonas[0].innerHTML)
console.log(numerosBot)
const validarNumeros=(array, num)=>{
array.forEach(numero=>{
    if(numero.innerHTML==num){
        numero.classList.add("tachado")
    }
})
}


btn.addEventListener("click",()=>{
    const numeroObtenido= Math.floor(Math.random()*100)
    validarNumeros(numerosPersonas,numeroObtenido)
    validarNumeros(numerosBot,numeroObtenido)
})

