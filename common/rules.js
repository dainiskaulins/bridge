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

// ----------- pre ------------
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
// ------------- sol -----------------

// ============================================================
// Pārbauda, vai nākamais solījums ir atļauts.
//
// Salīdzina biddingInput ar pašreizējo spēles stāvokli FACTS.
//
// Atgriež:
//
// {
//     ok: true | false,
//     message: "Paskaidrojums"
// }
//
// Ja ok = true, solījumu drīkst ierakstīt FACTS.
// Ja ok = false, FACTS netiek mainīts.
// ============================================================
function solParbaudit() {

    let r;

    r = solSakumaKontraRekontra();
    if (!r.ok) return r;

    r = solSolijumsAugstaks();
    if (!r.ok) return r;

    r = solKontraAtlauta();
    if (!r.ok) return r;

    r = solRekontraAtlauta();
    if (!r.ok) return r;

    return {
        ok: true,
        message: ""
    };
}
function solSakumaKontraRekontra() {
    // lasa biddingInput
    // lasa facts
    if (facts.bids.length == 0) {

        if (biddingInput.callType == "X") {
            return {
                ok: false,
                message: "Solīšanas sākumā kontra nav atļauta."
            };
        }

        if (biddingInput.callType == "XX") {
            return {
                ok: false,
                message: "Solīšanas sākumā rekontra nav atļauta."
            };
        }

    }

    return {
        ok: true,
        message: ""
    };
}

function solSolijumsAugstaks() {
    // lasa biddingInput
    // lasa facts
}
function solKontraAtlauta() {
    // lasa biddingInput
    // lasa facts
}
function solRekontraAtlauta() {
    // lasa biddingInput
    // lasa facts
}

//-----------------------
console.log("common/rules.js ielādēts");
