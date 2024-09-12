varH1=document.querySelector('h1');
varH1.innerHTML='secret_number';

varP=document.querySelector('p');
varP.innerHTML='type a number between 1 and 10';
let secret_number= Math.floor((Math.random()*10)+1);
function verificarChute(){

    let guess= document.querySelector('input').value;
    if(guess== secret_number){
        varH1.innerHTML=(`acertou`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }
    else{
        if( guess< secret_number){
        varP.innerHTML=(`maior`);
    }
    else{
        varP.innerHTML=(`MENOR`);
    }
    
}
}