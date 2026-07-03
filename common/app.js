// common/app.js
//
// Galvenais starta fails.
// Ielādē programmu, piesaista pogas funkcijām un palaiž pirmo ekrāna pārzīmēšanu.
// Šeit nedrīkst krāt lielu spēles loģiku — tikai vadība.

function rakstitProtokolu(teksts) {
  console.log(teksts);
}

function tuksaIzdaleClick() {
  let r = varTuksaIzdale();

  if (r.action === "DENY") {
    rakstitProtokolu(r.text);
    return;
  }

  if (r.action === "CONFIRM") {
    if (!confirm(r.text)) {
      rakstitProtokolu("Tukša izdale atcelta.");
      return;
    }
  }

  tuksaIzdale();
  rakstitProtokolu("Tukša izdale.");
  renderAll();
}

//===================================
function generetIzdali() {
  console.log("GENERET IZDALI");
  const mastis = ["S", "H", "D", "C"];
  const vertibas = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  let deck = [];

  for (let m of mastis) {
    for (let v of vertibas) {
      deck.push(m + v);  // SVARĪGI: SA, HK, DT, C7
    }
  }

  deck.sort(() => Math.random() - 0.5);

  facts.hands = {
    N: deck.slice(0, 13),
    E: deck.slice(13, 26),
    S: deck.slice(26, 39),
    W: deck.slice(39, 52)
  };

  facts.dealer = "N";
  facts.bids = [];
  facts.plays = [];
  facts.result = null;
  
  rakstitProtokolu("IZDALE ir ģenerēta");
}

function renderLogPanel() {
  document.getElementById("logPanel").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
}

function renderAll() {
    renderTitlePanel();
    renderButtonPanel(BUTTONS_BIDDING);
    renderTablePanel();
    renderLogPanel();
}

function jaunaSpele() {
    generetIzdali();
    renderAll();
}
// ----- zīmē pogu variantus -----
function showTitle() {
    renderButtonPanel(BUTTONS_TITLE);
}

function showBidding() {
    renderButtonPanel(BUTTONS_BIDDING);
}

function showPlay() {
    renderButtonPanel(BUTTONS_PLAY);
}

function showFinish() {
    renderButtonPanel(BUTTONS_FINISH);
}
// gribam uzreiz jaunu spēli
jaunaSpele();

console.log("common/app.js ielādēts");
