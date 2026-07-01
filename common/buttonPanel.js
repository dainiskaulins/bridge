/* common/buttonPanel.js
=========================================================
GALDS pogu panelis.

Uzdevums:
- uzzīmē tikai tās pogas, kas šajā etapā vajadzīgas;
- sākumā: "Ģenerēt" un "Tukša izdale";
- vēlāk šeit parādīsies solīšanas/izspēles pogas pēc vajadzības.

2026-07-01
=========================================================
*/

const POGU_GRUPAS = [
  {
    nosaukums: "IZDALE",
    pogas: [
      { id: "BTN_GENERET_IZDALI", teksts: "🎲 Ģenerēt", funkcija: "generetIzdali", klase: "poga-zala" },
      { id: "BTN_TUKSA_IZDALE", teksts: "Tukša izdale", funkcija: "tuksaIzdale", klase: "poga-zala" }
    ]
  }
];

function izsauktPogasFunkciju(poga) {
  const fn = window[poga.funkcija];

  if (typeof fn === "function") {
    fn();
  } else {
    console.log("Funkcija vēl nav realizēta: " + poga.funkcija + "()");
  }
}

function renderButtonPanel() {
  const panelis = document.getElementById("buttonPanel");

  if (!panelis) {
    console.log("Nav atrasts buttonPanel");
    return;
  }

  panelis.innerHTML = "";

  for (const grupa of POGU_GRUPAS) {
    const rinda = document.createElement("div");

    const virsraksts = document.createElement("strong");
    virsraksts.textContent = grupa.nosaukums + ": ";
    rinda.appendChild(virsraksts);

    for (const poga of grupa.pogas) {
      const btn = document.createElement("button");

      btn.id = poga.id;
      btn.className = "poga " + poga.klase;
      btn.textContent = poga.teksts;

      btn.addEventListener("click", function () {
        izsauktPogasFunkciju(poga);
      });

      rinda.appendChild(btn);
    }

    panelis.appendChild(rinda);
  }
}

console.log("common/buttonPanel.js ielādēts");

