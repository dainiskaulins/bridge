//    common/cards.js
//
// Kāršu definīcijas un kāršu palīgfunkcijas.
// Šeit dzīvo mastu, rangu un pilnas kavas apraksts.
// Funkcijas palīdz ģenerēt, kārtot un attēlot kārtis.
//=========================================================
//Kāršu attēlošana.
// Uzdevums:
// - pārvērš kāršu masīvu skaistā tekstā pa mastīm.
//
// Kāršu attēlošana:
// ♠ ♥ ♦ ♣
//
// Solīšanas secība:
// ♣ ♦ ♥ ♠ NT
//
// Šie standarti netiek mainīti.   2026-07-01
//=========================================================

function formatHand(hand) {
const suits = [
  { code: "S", symbol: '<span class="suit-black">♠</span>' },
  { code: "H", symbol: '<span class="suit-red">♥</span>' },
  { code: "D", symbol: '<span class="suit-red">♦</span>' },
  { code: "C", symbol: '<span class="suit-black">♣</span>' }
];

  let lines = [];

  for (const suit of suits) {
    const cards = hand
      .filter(card => card[0] === suit.code)
      .map(card => card.slice(1))
      .join(" ");

    lines.push(suit.symbol + " " + cards);
  }
  return lines.join("<br>");
}

console.log("common/cards.js ielādēts");
