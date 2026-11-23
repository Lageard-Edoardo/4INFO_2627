
function aggiungi(){
    console.log("Funct agg");
    const scrivitodo = document.getElementById('todoinput').value;
    const selector = document.getElementById('priorityselect').value;

    if(scrivitodo == ""){
        alert("errore");
    }
    
    let freccia="";
    if (selector == "alta"){
        freccia = "↑"
        console.log('alta')
    }
    if (selector == "bassa"){
        freccia = "↓"
        console.log('bassa')
    }
    if (selector == "media"){
        freccia = "➜"
        console.log('media')
    }

    const table = document.getElementById('tabella').value;
    console.log("tuttok")
    const riga=document.createElement('tr')
    tabella.append(riga)
    
    const tdtodo = document.createElement('td');
    tdtodo.innerText=scrivitodo;
    riga.append(tdtodo);

    const tdfreccia= document.createElement('td')
    tdfreccia.innerText=freccia
    riga.append(tdfreccia)
    console.log("evviva")

    const tick = document.createElement('button');
    tick.innerText='✔';
    tick.classList.add('tick');

    const tdtick=document.createElement('td');
    tdtick.append(tick);
    riga.append(tdtick);
    console.log('potre')
    tick.addEventListener('click', function() {
        barratesto(tdtodo);
    });

    const remove = document.createElement('button');
    remove.innerText='🗑️';
    remove.classList.add('remove');
    console.log('motre');

    const tdelimina = document.createElement('td');
    tdelimina.append(remove);
    riga.append(tdelimina);
    
    remove.addEventListener('click', function() {
        elimina(riga);
    });

}

function barratesto(tdtodo){
    console.log('barra');
    tdtodo.classList.toggle("barrato");
}

function elimina(riga){
    console.log('eliminated');
    riga.remove();
}