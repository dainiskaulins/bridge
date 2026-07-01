// app.js

function rakstitProtokolu(teksts) {
  console.log(teksts);
}

function tuksaIzdale() {
  console.log("Tukša izdale");
  facts.hands = { N: [], E: [], S: [], W: [] };
  facts.bids = [];
  facts.plays = [];
  facts.result = null;

  pogasKrasa("BTN_TUKSA_IZDALE", "poga-dzeltena");
  rakstitProtokolu("Tukša izdale");

  render();
}

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
  
  pogasKrasa("BTN_GENERET_IZDALI", "poga-dzeltena");
  rakstitProtokolu("ĢENERĒT IZDALI");
  
  render();
}

function renderLogPanel() {
  document.getElementById("logPanel").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
}

render();

console.log("common/app.js ielādēts");
