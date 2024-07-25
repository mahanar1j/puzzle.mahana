"use strict"
window.onload=()=>{
    main();
    
}

function main(){

const redColor=document.getElementById('red');
const orangeColor=document.getElementById('orange');
const yellowColor=document.getElementById('yellow');
const greenColor=document.getElementById('green');
const blueColor=document.getElementById('blue');
const indigoColor=document.getElementById('indigo');
const purpleColor=document.getElementById('purple');
const getColor=document.getElementById('getColor');
redColor.addEventListener('click',function(){

    redColor.style.backgroundColor=puzzle();
});
orangeColor.addEventListener('click',function(){

    orangeColor.style.backgroundColor=puzzle();
});
yellowColor.addEventListener('click',function(){

    yellowColor.style.backgroundColor=puzzle();
});
greenColor.addEventListener('click',function(){

    greenColor.style.backgroundColor=puzzle();
});
blueColor.addEventListener('click',function(){

    blueColor.style.backgroundColor=puzzle();
});
indigoColor.addEventListener('click',function(){

    indigoColor.style.backgroundColor=puzzle();
});
purpleColor.addEventListener('click',function(){

    purpleColor.style.backgroundColor=puzzle();
});


}





    
    
    //    function puzzle(){
    //     const randomnumbr=["red","orange","yellow","green","blue","indigo","purple"]
        

    //      const randomindex=Math.floor(Math.random()*7)
    //     const  indexnmbr =randomnumbr[randomindex]
    //    return indexnmbr
       
    //    }
    function puzzle(){
        const red= Math.floor(Math.random()*255);
        const green= Math.floor(Math.random()*255);
        const blue= Math.floor(Math.random()*255);
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
    }
    const results =puzzle()
    console.log(results)
      
    // customColor js code//  

let section=document.querySelector('.sec');
let con=document.getElementById("mahana");
let button=document.querySelector('.btn')
let newColor;
button.addEventListener('click',(e)=>{
    e.preventDefault();
    newColor=document.querySelector('.newColorInput').value;
    con.style.backgroundColor=newColor
});

    
    
    

