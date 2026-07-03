// common/actions.js
//
// Darbības, kas maina FACTS.
// Šeit pievieno solījumu, izspēlē kārti, ģenerē izdali, anulē pēdējo darbību.
// Pirms izmaiņām darbības izmanto rules.js pārbaudes.

function tuksaIzdale() {

  facts.hands = { N: [], E: [], S: [], W: [] };
  facts.bids = [];
  facts.plays = [];
  facts.result = null;

}
