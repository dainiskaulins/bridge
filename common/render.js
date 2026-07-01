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

  panelis.innerHTML =
    "<h2>GALDS 0.0.1</h2>";
}
  
function render() {
  document.getElementById("logPanel").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
} 

function renderTablePanel() {
  const panelis = document.getElementById("tablePanel");
  if (!panelis) return;

  panelis.innerHTML = `
    <div class="bridge-table">
      <div></div>
      <div class="seat">N</div>
      <div></div>

      <div class="seat">W</div>
      <div class="trick">stiķis</div>
      <div class="seat">E</div>

      <div></div>
      <div class="seat">S</div>
      <div></div>
    </div>
  `;
}

console.log("common/render.js ielādēts");
