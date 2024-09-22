const righe = 7;
const colonne = 6;
const tabellaGioco = document.getElementById("tabella-gioco");
const turni = document.getElementById('turni');
let isRedTurn = true;

function Gioco(){
    const table = document.createElement("table")
    for (let i = 0; i < righe; i++) {
       const riga = document.createElement('tr');
         
       for (let j = 0; j < colonne; j++) {
        const cella = document.createElement('td');
        cella.textContent = '';
        cella.addEventListener('click', colore)
        riga.appendChild(cella);
       }
        table.appendChild(riga);
    }
    tabellaGioco.appendChild(table)
}
function colore(e) {
    const cella = e.target;
    if (cella.style.backgroundColor === 'red' || cell.style.backgroundColor === 'blue') {
        return;
    }
    if (isRedTurn) {
        cella.style.backgroundColor = 'red';
        turnDisplay.textContent = 'Turno: Blu';
    } else {
        cella.style.backgroundColor = 'blue';
        turnDisplay.textContent = 'Turno: Rosso';
    }
    isRedTurn = !isRedTurn;
}
Gioco();