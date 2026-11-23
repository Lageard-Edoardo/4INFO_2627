function studente() {
    const tabella = document.getElementById("visualizzazione");
    const nome_str= document.getElementById("nome").value;
    const media_num=document.getElementById("media").value;
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = nome_str;
    tr.innerText = media_num;
    tabella.append(td)
    tabella.append(tr)

}

function colora() {
    const tabella = document.getElementById("visualizzazione");
    const td_items=tabella.children;
    for (let i=0;i<td_items.length;i++){
        let td = td_items[i];
        console.log("ecco il singolo td: ",td_items)
        if(td%2==0){
            td.classList.add("blu")
        }
        else{
            td.classList.add("rosso")
        }
    }

}