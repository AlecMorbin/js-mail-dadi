let listaMail = [ "matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com" ];

let input = prompt("Inserisci la tua mail per verificare se puoi accedere: ");

for (let i = 0; i < listaMail.length; i++) {
    if(listaMail[i] == input)
        console.log("Puoi accedere!");
}