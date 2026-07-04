// common/render.js
// 
// Ekrāna pārzīmēšanas funkcijas.
// Rāda pogas, galdu, spēles informāciju un FACTS apakšējā logā.
// Šis fails neko nemaina spēles datos.
//=========================================================
// Ekrāna pārzīmēšana.
//
// Uzdevums: - zīmē ekrāna paneļus.
// Katrs panelis tiek zīmēts ar savu funkciju.
//
//  titlePanel
//  buttonPanel
//  tablePanel
//  logPanel
//=======================================================
  
function renderTitlePanel() {
  const panelis = document.getElementById("titlePanel");
  if (!panelis) return;

  panelis.innerHTML = `
    <h2>Rubber Bridge</h2>
    
    <!-- Iziet uz iepriekšējo menu -->
    <button class="poga poga-zala"
        onclick="location.href='../index.html'">
    EXIT
    </button>
    <button class="poga poga-peleka">HELP</button>
    <button class="poga poga-peleka">Import</button>
    <button class="poga poga-peleka">Export</button>
   `;
}
  
//function render() {
//  document.getElementById("logPanel").textContent =
//    "FACTS\n" +
//   JSON.stringify(facts, null, 2);
//} 
// ----------------------
// ============================================================
// Solīšanas protokola pārzīmēšana.
//
// No FACTS izveido cilvēkam lasāmu
// solīšanas protokolu.
// ============================================================
function renderProtocolPanel() {
    const logs = document.getElementById("protocolPanel");

    if (!logs) return;
  
    let teksts = "PROTOKOLS\n\n";
  
    for (const solijums of facts.bids) {
        teksts += solijums.player + " " + solijums.solijums + "\n";
    }

    logs.textContent = teksts;
} 

// ============================================================
// FACTS loga pārzīmēšana.
//
// Parāda visu FACTS objektu tehniskā veidā.
// Domāts atkļūdošanai un testēšanai.
// ============================================================
function renderFactsPanel() {
    const logs = document.getElementById("logPanel");
    if (!logs) return;
    logs.textContent =
        "FACTS\n\n" +
        JSON.stringify(facts, null, 2);
}

//=========================================================
function renderNorthPanel() {
  return `<div class="seat">N<br>${formatHand(facts.hands.N)}</div>`;
}

function renderWestPanel() {
  return `<div class="seat">W<br>${formatHand(facts.hands.W)}</div>`;
}

function renderCenterPanel() {
  return `<div class="trick">viens stiķis</div>`;
}

function renderEastPanel() {
  return `<div class="seat">E<br>${formatHand(facts.hands.E)}</div>`;
}

function renderSouthPanel() {
  return `<div class="seat">S<br>${formatHand(facts.hands.S)}</div>`;
}

function renderTablePanel() {
  const panelis = document.getElementById("tablePanel");
  if (!panelis) return;

  panelis.innerHTML = `
    <div class="bridge-table">
      <div></div>
      ${renderNorthPanel()}
      <div></div>

      ${renderWestPanel()}
      ${renderCenterPanel()}
      ${renderEastPanel()}

      <div></div>
      ${renderSouthPanel()}
      <div></div>
    </div>
  `;
  }

console.log("common/render.js ielādēts");
