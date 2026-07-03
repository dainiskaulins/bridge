/* common/buttonPanel.js
=========================================================
Stabila pagaidu versija.
Rāda tikai divas pogas: Jauna spēle, Tukša izdale.
=========================================================
*/

const BUTTONS_TITLE = {
  nosaukums: "JAUNA SPĒLE",
   pogas: [

     {
      id: "BTN_TURPINAT",
      teksts: "Turpināt spēli",
      funkcija: "",
      klase: "poga-zala"
    },

    {
      id: "BTN_JAUNA_SPELE",
      teksts: "Jauna spēle",
      funkcija: "jaunaSpele",
      klase: "poga-zala"
    },

    {
      id: "BTN_TUKSA_IZDALE",
      teksts: "Tukša izdale",
      funkcija: "tuksaIzdale",
      klase: "poga-zala"
    },

    {
      id: "BTN_LABOT_IZDALI",
      teksts: "Labot izdali",
      funkcija: "labotIzdali",
      klase: "poga-peleka"
    },

    {
      id: "BTN_CHECK_IZDALE",
      teksts: "Pārbaude",
      funkcija: "parbauditIzdali",
      klase: "poga-peleka"
    }

  ]
};

const BUTTONS_BIDDING = {
  nosaukums: "SOLĪŠANA",

  pogas: [

    { id:"BTN_1", teksts:"1", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_2", teksts:"2", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_3", teksts:"3", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_4", teksts:"4", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_5", teksts:"5", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_6", teksts:"6", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_7", teksts:"7", funkcija:"", klase:"poga-zala", rinda:1 },

    { id:"BTN_C", teksts:"♣", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_D", teksts:"♦", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_H", teksts:"♥", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_S", teksts:"♠", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_NT", teksts:"NT", funkcija:"", klase:"poga-zala", rinda:2 },

    { id:"BTN_PASS", teksts:"PASS", funkcija:"", klase:"poga-zala", rinda:3 },
    { id:"BTN_X", teksts:"X", funkcija:"", klase:"poga-zala", rinda:3 },
    { id:"BTN_XX", teksts:"XX", funkcija:"", klase:"poga-zala" , rinda:3 },

    { id:"BTN_SOLIT", teksts:"SOLĪT", funkcija:"", klase:"poga-zala", rinda:3 },

    { id:"BTN_EXIT", teksts:"JAUNA SPĒLE", funkcija:"jaunaSpele", klase:"poga-dzeltena", rinda:3 }

  ]
};

function izsauktPogasFunkciju(poga) {
  const fn = window[poga.funkcija];

  if (typeof fn === "function") {
    fn();
  } else {
    console.log("Funkcija vēl nav realizēta: " + poga.funkcija + "()");
  }
}

//=========================================
function renderButtonPanel(buttonSet) {
  console.log("sākam renderButtonPanel");
  console.log(buttonSet.nosaukums);
  console.log(buttonSet);
  
  const panelis = document.getElementById("buttonPanel");
  if (!panelis) return;

  panelis.innerHTML = "";

  // ----- paneļa virsraksts ----- 
  const virsraksts = document.createElement("div");
  virsraksts.className = "button-panel-title";
  virsraksts.textContent = buttonSet.nosaukums;
  panelis.appendChild(virsraksts);

  const rinda1 = document.createElement("div");
  const rinda2 = document.createElement("div");
  const rinda3 = document.createElement("div");

  const statuss = document.createElement("div");
  statuss.id = "buttonStatus";
  statuss.className = "button-status";
  statuss.textContent = "Solu: -";
  panelis.appendChild(statuss);

  const rinda = document.createElement("div");
  rinda.className = "pogu-rinda";

  for (const poga of buttonSet.pogas) {
    const btn = document.createElement("button");

    btn.id = poga.id;
    btn.className = "poga " + poga.klase;
    btn.textContent = poga.teksts;

    btn.addEventListener("click", function () {
      izsauktPogasFunkciju(poga);
    });
    
    //===========vai te ir ok? =
    if (poga.rinda === 1 || poga.rinda === undefined)  {
        rinda1.appendChild(btn);
    }
    if (poga.rinda === 2) {
        rinda2.appendChild(btn);
    }
    if (poga.rinda === 3) {
        rinda3.appendChild(btn);
   } 
}
  
    panelis.appendChild(rinda1);
    panelis.appendChild(rinda2);
    panelis.appendChild(rinda3);
}

console.log("common/buttonPanel.js ielādēts");
