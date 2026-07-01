/*
common/buttonPanel.js
negatava versija 01-JUL-2026 

Šis fails zīmē kopējo pogu paneli Bridža projektam.

Pogas ir sakārtotas pa loģiskām rindām:
- kāršu dalīšana;
- solīšana;
- izspēle;
- aprēķini / vadība / ekrāns;
- tiesnesis / testi.

Daudzas pogas sākumā ir tikai vietturi.
Ja piesaistītā funkcija vēl neeksistē, poga neuzkarina programmu,
bet ieraksta protokolā paziņojumu, ka funkcija vēl nav realizēta.
*/

function rakstitProtokolu(teksts) {
  const protokols = document.getElementById("protokols");

  if (protokols) {
    protokols.textContent += teksts + "\n";
  } else {
    console.log(teksts);
  }
}

const POGU_GRUPAS = [
  {
    nosaukums: "KĀRŠU DALĪŠANA",
    pogas: [
      { id: "BTN_TUKSA_IZDALE", teksts: "Tukša izdale", funkcija: "tuksaIzdale",
             klase: "poga-zala"},
      { id: "BTN_GENERET_IZDALI", teksts: "🎲 Ģenerēt", funkcija: "generetIzdali",
             klase: "poga-zala"},
      { id: "BTN_LABOT_MANUALI", teksts: "Labot manuāli", funkcija: "labotManuali" },
      { id: "BTN_EKSPORTET", teksts: "Eksportēt", funkcija: "eksportet",
            klase: "poga-sarkana" },
      { id: "BTN_IMPORTET", teksts: "Importēt", funkcija: "importet", 
            klase: "poga-sarkana" }
    ]
  },

  {
    nosaukums: "SOLĪŠANA",
    pogas: [
      { id: "BTN_SOL_1", teksts: "1", funkcija: "izveletiesSolijumaLimeni", arguments: 1 },
      { id: "BTN_SOL_2", teksts: "2", funkcija: "izveletiesSolijumaLimeni", arguments: 2 },
      { id: "BTN_SOL_3", teksts: "3", funkcija: "izveletiesSolijumaLimeni", arguments: 3 },
      { id: "BTN_SOL_4", teksts: "4", funkcija: "izveletiesSolijumaLimeni", arguments: 4 },
      { id: "BTN_SOL_5", teksts: "5", funkcija: "izveletiesSolijumaLimeni", arguments: 5 },
      { id: "BTN_SOL_6", teksts: "6", funkcija: "izveletiesSolijumaLimeni", arguments: 6 },
      { id: "BTN_SOL_7", teksts: "7", funkcija: "izveletiesSolijumaLimeni", arguments: 7 },

      { id: "BTN_SOL_K", teksts: "♣", funkcija: "izveletiesSolijumaMastu", arguments: "C" },
      { id: "BTN_SOL_D", teksts: "♦", funkcija: "izveletiesSolijumaMastu", arguments: "D" },
      { id: "BTN_SOL_H", teksts: "♥", funkcija: "izveletiesSolijumaMastu", arguments: "H" },
      { id: "BTN_SOL_S", teksts: "♠", funkcija: "izveletiesSolijumaMastu", arguments: "S" },
      { id: "BTN_SOL_NT", teksts: "NT", funkcija: "izveletiesSolijumaMastu", arguments: "NT" },

      { id: "BTN_PASS", teksts: "PASS", funkcija: "izveletiesSpecialoSolijumu", arguments: "PASS" },
      { id: "BTN_X", teksts: "X", funkcija: "izveletiesSpecialoSolijumu", arguments: "X" },
      { id: "BTN_XX", teksts: "XX", funkcija: "izveletiesSpecialoSolijumu", arguments: "XX" },

      { id: "BTN_SOLIT", teksts: "Solīt", funkcija: "solit" },
      { id: "BTN_ATCELT_SOLIJUMU", teksts: "Atcelt", funkcija: "atceltPedejoSolijumu" }
    ]
  },

  {
    nosaukums: "IZSPĒLE",
    pogas: [
      { id: "BTN_IZS_K", teksts: "♣", funkcija: "izveletiesKartsMastu", arguments: "C" },
      { id: "BTN_IZS_D", teksts: "♦", funkcija: "izveletiesKartsMastu", arguments: "D" },
      { id: "BTN_IZS_H", teksts: "♥", funkcija: "izveletiesKartsMastu", arguments: "H" },
      { id: "BTN_IZS_S", teksts: "♠", funkcija: "izveletiesKartsMastu", arguments: "S" },

      { id: "BTN_IZS_A", teksts: "A", funkcija: "izveletiesKartsVertibu", arguments: "A" },
      { id: "BTN_IZS_KING", teksts: "K", funkcija: "izveletiesKartsVertibu", arguments: "K" },
      { id: "BTN_IZS_Q", teksts: "D", funkcija: "izveletiesKartsVertibu", arguments: "Q" },
      { id: "BTN_IZS_J", teksts: "J", funkcija: "izveletiesKartsVertibu", arguments: "J" },
      { id: "BTN_IZS_10", teksts: "10", funkcija: "izveletiesKartsVertibu", arguments: "10" },
      { id: "BTN_IZS_9", teksts: "9", funkcija: "izveletiesKartsVertibu", arguments: "9" },
      { id: "BTN_IZS_8", teksts: "8", funkcija: "izveletiesKartsVertibu", arguments: "8" },
      { id: "BTN_IZS_7", teksts: "7", funkcija: "izveletiesKartsVertibu", arguments: "7" },
      { id: "BTN_IZS_6", teksts: "6", funkcija: "izveletiesKartsVertibu", arguments: "6" },
      { id: "BTN_IZS_5", teksts: "5", funkcija: "izveletiesKartsVertibu", arguments: "5" },
      { id: "BTN_IZS_4", teksts: "4", funkcija: "izveletiesKartsVertibu", arguments: "4" },
      { id: "BTN_IZS_3", teksts: "3", funkcija: "izveletiesKartsVertibu", arguments: "3" },
      { id: "BTN_IZS_2", teksts: "2", funkcija: "izveletiesKartsVertibu", arguments: "2" },

      { id: "BTN_IZSPELET", teksts: "Izspēlēt", funkcija: "izspeletKarti" },
      { id: "BTN_ATCELT_IZSPELI", teksts: "Atcelt", funkcija: "atceltPedejoKarti" }
    ]
  },

  {
    nosaukums: "APRĒĶINI / VADĪBA / EKRĀNS",
    pogas: [
      { id: "BTN_KONTRAKTS", teksts: "Kontrakts", funkcija: "aprekinatKontraktu" },
      { id: "BTN_KAM_GAJIENS", teksts: "Kam gājiens", funkcija: "aprekinatKamGajiens" },
      { id: "BTN_APR_TBD1", teksts: "TBD1", funkcija: "" },
      { id: "BTN_APR_TBD2", teksts: "TBD2", funkcija: "" },
      { id: "BTN_DALITAJS", teksts: "Dalītājs", funkcija: "nozimetDalitaju" },
      { id: "BTN_PARZIMET", teksts: "Pārzīmēt", funkcija: "parzimetEkranu" },
      { id: "BTN_PALIDZIBA", teksts: "Palīdzība", funkcija: "raditPalidzibu" }
    ]
  },

  {
    nosaukums: "TIESNESIS / TESTI",
    pogas: [
      { id: "BTN_PARBAUDIT_IZDALI", teksts: "Izdale", funkcija: "parbauditIzdali" },
      { id: "BTN_PARBAUDIT_SOLISANU", teksts: "Solīšana", funkcija: "parbauditSolisanu" },
      { id: "BTN_PARBAUDIT_IZSPELI", teksts: "Izspēle", funkcija: "parbauditIzspeli" },
      { id: "BTN_PILNA_PARBAUDE", teksts: "Pilna pārbaude", funkcija: "pilnaParbaude" },

      { id: "BTN_TESTS_IZDALE", teksts: "Tests: izdale", funkcija: "testsIzdale" },
      { id: "BTN_TESTS_SOLISANA", teksts: "Tests: solīšana", funkcija: "testsSolisana" },
      { id: "BTN_TESTS_IZSPELE", teksts: "Tests: izspēle", funkcija: "testsIzspele" },
      { id: "BTN_RADIT_FAKTUS", teksts: "Fakti", funkcija: "raditFaktus" }
    ]
  }
];

function izsauktPogasFunkciju(poga) {
  if (!poga.funkcija) {
    rakstitProtokolu("Poga vēl nav pieslēgta: " + poga.teksts);
    return;
  }

  const fn = window[poga.funkcija];

  if (typeof fn === "function") {
    if ("arguments" in poga) {
      fn(poga.arguments);
    } else {
      fn();
    }
  } else {
    rakstitProtokolu("Funkcija vēl nav realizēta: " + poga.funkcija + "()");
  }
}

function renderButtonPanel() {
  const panelis = document.getElementById("buttonPanel");

  if (!panelis) {
    console.log("Nav atrasts <div id=\"buttonPanel\"></div>");
    return;
  }

  panelis.innerHTML = "";

  for (const grupa of POGU_GRUPAS) {
    const rinda = document.createElement("div");
    rinda.className = "pogu-rinda";

    const virsraksts = document.createElement("span");
    virsraksts.className = "pogu-rindas-nosaukums";
    virsraksts.textContent = grupa.nosaukums + ":";

    rinda.appendChild(virsraksts);

    for (const poga of grupa.pogas) {
      const btn = document.createElement("button");

      btn.id = poga.id;
      
      /*   klase ir krāsa - */
      if (poga.klase) {
                btn.className = "poga " + poga.klase;
         } else {
                btn.className = "poga poga-peleka";
         }

      btn.textContent = poga.teksts;
      
      btn.title = poga.funkcija
        ? "Izsauc: " + poga.funkcija + "()"
        : "Poga vēl nav pieslēgta";

      btn.addEventListener("click", function () {
        izsauktPogasFunkciju(poga);
      });

      rinda.appendChild(btn);
    }

    panelis.appendChild(rinda);
  }

  rakstitProtokolu("buttonPanel.js: pogu panelis uzzīmēts.");
}

console.log("common/buttonPanel.js ielādēts");
