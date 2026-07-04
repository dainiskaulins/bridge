// common/rules.js
//
// Bridža noteikumu pārbaudes.
// Šeit nosaka, vai konkrēta darbība ir atļauta vai aizliegta.
// Šis fails pats neko nedara ar FACTS — tikai dod jā/nē un paskaidrojumu.
//      Funkciju prefiksi ieteimie:
// pre → viss pirms solīšanas
// sol → solīšana
// isz → izspēle
// pos → viss pēc izspēles

function preVarTuksaIzdale() {
  if (facts.status === STATUS.EMPTY) {
    return { action: "ALLOW" };
  }

  if (facts.status === STATUS.DEALT || facts.status === STATUS.FINISHED) {
    return { action: "ALLOW" };
  }

  if (facts.status === STATUS.BIDDING) {
    return {
      action: "CONFIRM",
      text: "Solīšana vēl nav pabeigta. Tukša izdale izdzēsīs spēli. Turpināt?"
    };
  }

  if (facts.status === STATUS.PLAYING) {
    return {
      action: "DENY",
      text: "Izspēles laikā tukšu izdali šajā testā nedrīkst veidot."
    };
  }

  return {
    action: "DENY",
    text: "Nezināms spēles statuss. Drošības pēc darbība apturēta."
  };
}

console.log("common/rules.js ielādēts");
