const bingo= document.querySelector('.bingo');
const persona = document.querySelector('.persona');
const bot= document.querySelector('.bot');
const btn= document.querySelector('button');
const randomNumber= new Set ([])
/* const arrayRandomNumber=Array.from(randomNumber) */
const numerosPersonas=[]
const numerosBot=[]
const numeroSacado=new Set()
let contador=0;


const crearNumeros=(components,array)=>{
    const numbers= new Set([])
    while(numbers.size<25){
        numbers.add(Math.floor(Math.random()*100))
    }
    console.log(numbers)
    const arrayNumbers=Array.from(numbers)
    for(let i=0; i<25; i++){
        const p= document.createElement("p")
        p.textContent=arrayNumbers[i]
        components.appendChild(p)
        array.push(p)

    }

}
const validarNumeros=(array, num)=>{
    for(let i=0; i<num.length;i++){
        for(let j=0; j<array.length; j++){
            if(num[i]== array[j].innerHTML){
                array[j].classList="tachado"
            }
        }
 
        
    }
   
    /* console.log(nuevoNum) */
    /* for(let i=0; i<array.length; i++){
        if(array[i].innerHTML==num[0]){
            array[i].classList="tachado"
        }
    } */


}

const ganador=(array,nombre)=>{
    let contador=0
    /* console.log(array[0].classList[0]) */
    for(let i=0; i<array.length; i++){
        if(array[i].classList[0]){
            contador++
        }
    }
    if(contador===25){
        console.log(`el ganador es ${nombre}`)

    }

}
btn.addEventListener("click",()=>{
    const botijo="bot"
    const personita="tu"
    if(numeroSacado.size>=100){
        return
    }
    let number
    do{
        number=Math.floor(Math.random()*100)
    }while(!numeroSacado.has(number))
        numeroSacado.add(number)
        console.log(numeroSacado)
        /* numeroSacado.add(Math.floor(Math.random()*100))*/
    const nuevoNumeroSacado= Array.from(numeroSacado)
    /*if(nuevoNumeroSacado.size<100){
        nuevoNumeroSacado.add(numeroSacado)
    } */
    validarNumeros(numerosBot, nuevoNumeroSacado)
    validarNumeros(numerosPersonas, nuevoNumeroSacado)
    /* if(ganador(numerosPersonas)){
        console.log(`El ganador eres tu`)
    }else if(ganador(numerosBot)){
        console.log("te ha ganado un bot pringado")
    } */
    ganador(numerosPersonas,personita)
    ganador(numerosBot,botijo)
/* console.log (nuevoNumeroSacado) */
/* console.log(ganador(numerosPersonas)+"el ganador es la persona")
console.log(ganador(numerosBot)+"el ganador es el bot") */
})
crearNumeros(bot, numerosBot)
crearNumeros(persona, numerosPersonas)
