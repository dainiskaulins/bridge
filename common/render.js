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

console.log("common/render.js ielādēts");
