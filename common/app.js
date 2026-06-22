// app.js

/* dzēsttttttttttt
const game = {
  hands: { N: [], E: [], S: [], W: [] },
  turn: {
    dealer: "N",
    current: "N",
    phase: "start"
  },
  bids: [],
  plays: [],
  log: []
};
*/

function rakstitProtokolu(teksts) {
  const nr = String(game.log.length + 1).padStart(3, "0");
  game.log.push(nr + " " + teksts);
  render();
}

function dzestIzdali() {
  facts.hands = { N: [], E: [], S: [], W: [] };
  facts.bids = [];
  facts.plays = [];
  facts.result = null;

  pogasKrasa("BTN_DZEST_IZDALI", "poga-dzeltena");
  rakstitProtokolu("DZĒST IZDALI");

  render();
}

function generetIzdali() {
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

function render() {
  document.getElementById("protokols").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
}

render();

console.log("common/app.js ielādēts");
