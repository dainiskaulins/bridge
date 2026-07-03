// common/actions.js
//
// Darbības, kas maina FACTS.
// actions.js nekad nezīmē ekrānu.
// actions.js nekad neraksta logu.
// Šeit ģenerē izdali, pievieno solījumu, izspēlē kārti, anulē pēdējo darbību.
// Pirms izmaiņām darbības izmanto rules.js pārbaudes.

function tuksaIzdale() {
  facts.status = STATUS.EMPTY;
  facts.hands = { N: [], E: [], S: [], W: [] };
  facts.bids = [];
  facts.plays = [];
  facts.result = null;
}

console.log("common/actions.js ielādēts");
