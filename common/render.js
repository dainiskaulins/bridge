// common/render.js
// centrālais pārzīmētājs

//function renderAll() {
//  renderTitlePanel();
//  renderButtonPanel();
//  renderTablePanel();
//  renderLogPanel();
//}

function render() {
  document.getElementById("logPanel").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
} 
console.log("common/render.js ielādēts");
