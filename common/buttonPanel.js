// ============================================================
// buttonPanel.js
//
// Veido programmas vadības pogu paneli.
//
// Šeit atrodas VISU pogu apraksts un izvietojums.
// Pogu funkcijas šeit netiek realizētas.
//
// Mērķis:
// - vienuviet redzēt visas plānotās pogas;
// - viegli pievienot jaunas pogas;
// - atkārtoti izmantot vienu un to pašu paneli
//   dažādos testos.
//
// Galvenā funkcija:
//     renderButtonPanel()
//
// ============================================================

function renderButtonPanel() {
  document.getElementById("buttonPanel").innerHTML = `
    <div class="pogu-bloks">

      <h3>Sadale</h3>
      <button id="BTN_GENERET_IZDALI" onclick="generetIzdali()">🎲 Ģenerēt izdali</button>
      <button id="BTN_DZEST_IZDALI" onclick="dzestIzdali()">🗑 Dzēst izdali</button>
      <button id="BTN_EXPORT">💾 Export</button>
      <button id="BTN_IMPORT">📂 Import</button>

      <h3>Solīšana</h3>
      <button id="BTN_PASS">Pass</button>
      <button id="BTN_X">X</button>
      <button id="BTN_XX">XX</button>

      <h3>Izspēle</h3>
      <button id="BTN_UNDO">↩ Undo</button>

      <h3>Skati</h3>
      <button id="BTN_SHOW_FACTS" onclick="render()">Rādīt facts</button>

    </div>
  `;
}
