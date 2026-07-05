// common/buttonPanel.js
//
// Veido pogu paneli uz ekrāna.
// Pogas ir lietotāja komandas: dalīt, solīt, spēlēt, pārzīmēt u.c.
// Šis fails tikai zīmē pogas un piesaista tām darbības.

//=========================================
const BUTTONS_TITLE = {
  nosaukums: "JAUNA SPĒLE???",
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
      funkcija: "tuksaIzdaleClick",
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
    },
    
    {
       id: "BTN_TEST_PLAY",
       teksts: "TESTS: IZSPĒLE",
       funkcija: "showPlay",
       klase: "poga-dzeltena"
     },
     
     {
       id: "BTN_TEST_FINISH",
       teksts: "TESTS: FINIŠS",
       funkcija: "showFinish",
       klase: "poga-dzeltena"
     }
  ]
};

//=========================================
const BUTTONS_BIDDING = {
  nosaukums: "SOLĪŠANA",

  pogas: [

    { id:"BTN_1", teksts:"1", funkcija:"biddingButtonClick", parametrs:"1", klase:"poga-zala", rinda:1 },
    { id:"BTN_2", teksts:"2", funkcija:"biddingButtonClick", parametrs:"2", klase:"poga-zala", rinda:1 },
    { id:"BTN_3", teksts:"3", funkcija:"biddingButtonClick", parametrs:"3", klase:"poga-zala", rinda:1 },
    { id:"BTN_4", teksts:"4", funkcija:"biddingButtonClick", parametrs:"4", klase:"poga-zala", rinda:1 },
    { id:"BTN_5", teksts:"5", funkcija:"biddingButtonClick", parametrs:"5", klase:"poga-zala", rinda:1 },
    { id:"BTN_6", teksts:"6", funkcija:"biddingButtonClick", parametrs:"6", klase:"poga-zala", rinda:1 },
    { id:"BTN_7", teksts:"7", funkcija:"biddingButtonClick", parametrs:"7", klase:"poga-zala", rinda:1 },

    { id:"BTN_C", teksts:"♣", funkcija:"biddingButtonClick", parametrs:"C",klase:"poga-zala", rinda:2 },
    { id:"BTN_D", teksts:"♦", funkcija:"biddingButtonClick", parametrs:"D", klase:"poga-zala", rinda:2 },
    { id:"BTN_H", teksts:"♥", funkcija:"biddingButtonClick", parametrs:"H", klase:"poga-zala", rinda:2 },
    { id:"BTN_S", teksts:"♠", funkcija:"biddingButtonClick", parametrs:"S", klase:"poga-zala", rinda:2 },
    { id:"BTN_NT", teksts:"NT", funkcija:"biddingButtonClick", parametrs:"NT", klase:"poga-zala", rinda:2 },

    { id:"BTN_PASS", teksts:"PASS", funkcija:"biddingButtonClick", parametrs:"PASS", klase:"poga-zala", rinda:3 },
    { id:"BTN_X", teksts:"X", funkcija:"biddingButtonClick", parametrs:"X", klase:"poga-zala", rinda:3 },
    { id:"BTN_XX", teksts:"XX", funkcija:"biddingButtonClick", parametrs:"XX", klase:"poga-zala" , rinda:3 },

    { id:"BTN_SOLIT", teksts:"SOLĪT", funkcija:"biddingButtonClick", parametrs:"SOLIT", klase:"poga-zala", rinda:3 },

    { id:"BTN_MENU", teksts:"IZVĒLNE", funkcija:"showTitle", klase:"poga-dzeltena", rinda:3 }

  ]
};

//=========================================
const BUTTONS_PLAY = {
  nosaukums: "IZSPĒLE",

  pogas: [
    { id:"BTN_PLAY_C", teksts:"♣", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_PLAY_D", teksts:"♦", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_PLAY_H", teksts:"♥", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_PLAY_S", teksts:"♠", funkcija:"", klase:"poga-zala", rinda:1 },
       
    { id:"BTN_PLAY_A", teksts:"A", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_K", teksts:"K", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_Q", teksts:"Q", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_J", teksts:"J", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_T", teksts:"T", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_9", teksts:"9", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_8", teksts:"8", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_7", teksts:"7", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_6", teksts:"6", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_5", teksts:"5", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_4", teksts:"4", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_3", teksts:"3", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_PLAY_2", teksts:"2", funkcija:"", klase:"poga-zala", rinda:2 },

    { id:"BTN_PLAY", teksts:"IZSPĒLE", funkcija:"", klase:"poga-zala", rinda:3 },
    { id:"BTN_PLAY_MENU", teksts:"IZVĒLNE", funkcija:"showTitle", klase:"poga-dzeltena", rinda:3 }
   ]
};

const BUTTONS_FINISH = {
  nosaukums: "FINIŠS",
  pogas: [
    { id:"BTN_RESULT", teksts:"Rezultāts", funkcija:"", klase:"poga-peleka" },
    { id:"BTN_REVIEW", teksts:"Review", funkcija:"", klase:"poga-peleka" },
    { id:"BTN_MENU_FINISH", teksts:"IZVĒLNE", funkcija:"showTitle", klase:"poga-dzeltena" }
  ]
};

//=========================================
function izsauktPogasFunkciju(poga) {

  const fn = window[poga.funkcija];

  if (typeof fn === "function") {
    let result;
    if (poga.parametrs !== undefined) {
      result = fn(poga.parametrs);
    } else {
      result = fn();
    }

    if (result && result.message) {
      rakstitProtokolu(result.message);
    }
    if (result && result.refresh) {
      renderAll();
    }
  } else {
    console.log("Funkcija vēl nav realizēta: " + poga.funkcija + "()");
  }
}

//=========================================
function renderButtonPanel(buttonSet) {
  console.log("sākam renderButtonPanel");
  console.log("facts.status: " + facts.status);
  console.log("buttonSet.nosaukums: " + buttonSet.nosaukums);
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

  // -----ja BIDDING
  if (facts.status === "BIDDING") {
     console.log("BIDDING irrr...irrr..");
     //-------- solīšanas procesa attēls -----
     let teksts = "-";
     if (biddingInput.callType == "BID") {
      teksts = (biddingInput.level || "") + (biddingInput.suit || "");
    }
    if (biddingInput.callType == "PASS") teksts = "PASS";
    if (biddingInput.callType == "X") teksts = "X";
    if (biddingInput.callType == "XX") teksts = "XX";
  
    statuss.textContent ="Sola " + biddingInput.player + ": " + teksts;
  // pagaidu temporary NEPAREIZIIIIIIIIIII
    playInput.player = biddingInput.player
  }
  
  // ----- ja PLAYING -----
  if (facts.status === "PLAYING") {
    console.log("PLAYING irrr..kkkk...");
    const suit = playInput.suit || "-";
    const rank = playInput.rank || "-";

    statuss.textContent = "Spēlē " + playInput.player + ": " + suit + rank;
  }
  
  //---
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
