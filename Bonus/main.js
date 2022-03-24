let listaMail = [ "matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com" ];

let input = prompt("Inserisci la tua mail per verificare se puoi accedere: ");

let flag = true;

for (let i = 0; i < listaMail.length; i++) {
    if(listaMail[i] == input){
        console.log("Puoi accedere!");
    }else {
        flag = false;
    }
}

console.log(flag);

if (flag == false) {
    console.log("La mail non è presente");

    temp = prompt("Inserisci la tua mail: ");

    listaMail.push(temp);

    let item ="";
    for (let i = 0; i < listaMail.length; i++) {
        item  += `<li>${listaMail[i]}</li>`;
    }
    document.getElementById("output").innerHTML = item;
}
