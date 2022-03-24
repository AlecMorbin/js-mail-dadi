let numeroPC = Math.floor( ( Math.random() * 6 ) + 1 );

console.log("Il numero del computer è: "+numeroPC);

let numeroG1 = Math.floor( ( Math.random() * 6 ) + 1 );

console.log("Il tuo numero è: "+numeroG1);

if(numeroG1>numeroPC) {
    console.log("Hai vinto!");
}else {
    console.log("Hai perso, ha vinto il Computer!");
}