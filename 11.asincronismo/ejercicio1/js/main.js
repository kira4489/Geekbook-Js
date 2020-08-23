function funA (){
    console.log('hola');
}
function funB(){
    funA();
}
funB();

if ('Hello' == 'hello'){
    console.log('No lo son');
}else{
    console.log('No lo son');
}

function usado(){
    console.log('pulsado')
}
$.on("button","click",pulsado);
console.log("hola")