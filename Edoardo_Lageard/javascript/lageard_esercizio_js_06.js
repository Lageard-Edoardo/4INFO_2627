function studente() {
    const tabella = document.getElementById("visualizzazione");
    const nome_str = document.getElementById("nome").value;
    const media_num = document.getElementById("media").value;

    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    const tdMedia = document.createElement("td");
    const tdAzione = document.createElement("td");

    tdNome.innerText = nome_str;
    tdMedia.innerText = media_num;

    const btnGrassetto = document.createElement("button");
    btnGrassetto.innerText = "Grassetto";
    btnGrassetto.classList.add("Grassetto");
    btnGrassetto.addEventListener("click", () => bold(tr));

    const btnelimina=document.createElement('button');
    btnelimina.innerText='Elimina';
    btnelimina.classList.add('Elimina');
    btnelimina.addEventListener('click',() => remove(tr));
    tdAzione.append(btnGrassetto);
    tdAzione.append(btnelimina);
    tr.append(tdNome, tdMedia, tdAzione);
    tabella.append(tr);
}


function remove(tr){
    console.log('removed');
    tr.remove();
}

function bold(tr) {
    tr.classList.toggle("grass");
}

function colora() {
    const tabella = document.getElementById("visualizzazione");
    const righe = tabella.querySelectorAll("tr");

    for (let i = 0; i < righe.length; i++) {
        if (i % 2 === 0) {
            righe[i].classList.add("blu");
        } else {
            righe[i].classList.add("blu");
        }
    }
}
