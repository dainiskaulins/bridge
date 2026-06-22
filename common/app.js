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

function rakstitProtokolu(teksts) {
  const nr = String(game.log.length + 1).padStart(3, "0");
  game.log.push(nr + " " + teksts);
  render();
}

function dzestIzdali() {
  game.hands = { N: [], E: [], S: [], W: [] };
  game.bids = [];
  game.plays = [];
  game.turn.phase = "start";

  pogasKrasa("BTN_DZEST_IZDALI", "poga-dzeltena");
  rakstitProtokolu("DZĒST IZDALI");
}

function generetIzdali() {
  const mastis = ["S", "H", "D", "C"];
  const vertibas = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  let deck = [];

  for (let m of mastis) {
    for (let v of vertibas) {
      deck.push(v + m);
    }
  }

  deck.sort(() => Math.random() - 0.5);

  game.hands = {
    N: deck.slice(0, 13),
    E: deck.slice(13, 26),
    S: deck.slice(26, 39),
    W: deck.slice(39, 52)
  };

  game.turn.phase = "bidding";

  pogasKrasa("BTN_GENERET_IZDALI", "poga-dzeltena");
  rakstitProtokolu("ĢENERĒT IZDALI");
}

function render() {
  document.getElementById("protokols").textContent =
    "HANDS\n" +
    "N: " + game.hands.N.join(" ") + "\n" +
    "E: " + game.hands.E.join(" ") + "\n" +
    "S: " + game.hands.S.join(" ") + "\n" +
    "W: " + game.hands.W.join(" ") + "\n\n" +

    "TURN\n" +
    "dealer: " + game.turn.dealer + "\n" +
    "current: " + game.turn.current + "\n" +
    "phase: " + game.turn.phase + "\n\n" +

    "BIDS\n" +
    game.bids.join("\n") + "\n\n" +

    "PLAYS\n" +
    game.plays.join("\n") + "\n\n" +

    "LOG\n" +
    game.log.join("\n");
}

render();

console.log("common/app.js ielādēts");
