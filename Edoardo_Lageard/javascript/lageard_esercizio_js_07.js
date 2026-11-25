function salva(){
    const surname=document.getElementById('cognome').value;
    const name=document.getElementById('nome').value;
    const indirizzo=document.getElementById('indirizzo').value;
    const cell=document.getElementById('telefono').value;
    console.log("tuttok")
    const riga=document.createElement('tr');
    
    const tdsurname=document.createElement('td');
    const tdname=document.createElement('td');
    const tdind=document.createElement('td');
    const tdcell=document.createElement('td');
    tdsurname.innerText=surname;
    tdname.innerText=name;
    tdind.innerText=indirizzo;
    tdcell.innerText=cell;
    riga.append(tdsurname,tdname,tdind,tdcell);
    const tabella = document.getElementById('tabella');
    tabella.append(riga);

    const btnremove=document.createElement('button');
    btnremove.innerText='Rimuovi';
    btnremove.classList.add('Rimuovi');
    const tdbtn=document.createElement('td');
    tdbtn.append(btnremove);
    riga.append(tdbtn);
    btnremove.addEventListener('click',removed);

    const cognomeId = document.getElementById("cognome");
    const nomeId = document.getElementById("nome");
    const indirizzoId = document.getElementById("indirizzo");
    const numeroId = document.getElementById("telefono");
    cognomeId.value = '';
    nomeId.value = '';
    indirizzoId.value = '';
    numeroId.value = '';

}

function removed(riga){
    console.log('funct remo');
    riga.remove();
}


function cerca() {
    console.log('funct cerca')
    const ID = Date.now()
    let tr = document.getElementsByTagName('tr')
    let cognome = document.getElementById('cognome')
    let telefono = document.getElementById('telefono')
    let pulsante = document.getElementsByClassName('aggiorna')

    if (cognome == '' &&
        telefono == '') {        
        alert("Inserisci il telefono o il cognome per cercare")
    }
    else {
        for (let i = 2; i < tr.length; i++) {
            let td = tr[i].children            
            if (td[0].innerText == cognome || 
                td[3].innerText == telefono) {
                tr[i].id = ID
                pulsante[0].id = ID
                
                document.getElementById('cognome').value = td[0].innerText
                document.getElementById('nome').value = td[1].innerText
                document.getElementById('indirizzo').value = td[2].innerText
                document.getElementById('telefono').value = td[3].innerText
                return
            }
        }
    }
}