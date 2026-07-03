// common/render.js
//=========================================================
// Ekrāna pārzīmēšana.
//
// Uzdevums:
// - zīmē ekrāna paneļus;
// - katrs panelis tiek zīmēts ar savu funkciju.
//
//2026-07-01
//=========================================================

//function renderAll() {
//  renderTitlePanel();
//  renderButtonPanel();
//  renderTablePanel();
//  renderLogPanel();
//}
  
function renderTitlePanel() {
  const panelis = document.getElementById("titlePanel");
  if (!panelis) return;

  panelis.innerHTML = `
    <h2>Rubber Bridge</h2>

    <button class="poga poga-peleka">EXIT</button>
    <button class="poga poga-peleka">HELP</button>
    <button class="poga poga-peleka">Import</button>
    <button class="poga poga-peleka">Export</button>
   `;
}
  
function render() {
  document.getElementById("logPanel").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
} 

//=========================================================
function renderButtonPaneltOdELETE(buttonSet) {
  console.log("sākam renderButtonPanel");
 // console.log(buttonSet.nosaukums);
  console.log(buttonSet);
  
  const panelis = document.getElementById("buttonPanel");
  if (!panelis) return;

  panelis.innerHTML = "";
  
  const rinda1 = document.createElement("div");
  const rinda2 = document.createElement("div");
  const rinda3 = document.createElement("div");

  const statuss = document.createElement("div");
  statuss.id = "buttonStatus";
  statuss.textContent = "Statuss: izvēlies darbību";
  panelis.appendChild(statuss);

  for (const poga of buttonSet.pogas) {
    const btn = document.createElement("button");
    btn.id = poga.id;
    btn.className = "poga " + poga.klase;
    btn.textContent = poga.teksts;

    btn.addEventListener("click", function () {
      izsauktPogasFunkciju(poga);
    });
    
    if (poga.rinda === 1)
        rinda1.appendChild(btn);
        console.log("rinda1 atrasta");

    if (poga.rinda === 2)
        rinda2.appendChild(btn);
        console.log("rinda2 atrasta");

    if (poga.rinda === 3)
        rinda3.appendChild(btn);
        console.log("rinda3 atrasta");
   
  }
    panelis.appendChild(rinda1);
    panelis.appendChild(rinda3);
    panelis.appendChild(rinda2);
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
