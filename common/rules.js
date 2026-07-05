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
    
    console.log("Pirms: solSolijumsAugstaks" );
    
    r = solSolijumsAugstaks();
    if (!r.ok) return r;
    console.log("Aiz: solSolijumsAugstaks" );
  
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
   console.log("Sāk ??? solSolijumsAugstaks");
  // ja solījums nav "BID" šī pārbaude nav
  if (biddingInput.callType != "BID") {
    return {
        ok: true,
        message: ""
    };
}
   // -----
   let pedejais = null;

   for (const b of facts.bids) {

      if (
          b.solijums != "PASS" &&
          b.solijums != "X" &&
          b.solijums != "XX"
      ) {
        pedejais = b.solijums;
        }
   }
    
      console.log("Pēdējais solījums bija: " + pedejais );
  
      if (pedejais == null) {
       return {
         ok: true,
         message: ""
      };
    }
// ----- salidzināšana -----
let vecaisLevel = Number(pedejais.charAt(0));
let vecaisMasts = pedejais.substring(1);

let jaunaisLevel = Number(biddingInput.level);
let jaunaisMasts = biddingInput.suit;

// lielāks līmenis
if (jaunaisLevel > vecaisLevel) {
    return {
        ok: true,
        message: ""
    };
}

// mazāks līmenis
if (jaunaisLevel < vecaisLevel) {
    return {
        ok: false,
        message: "Solījumam jābūt augstākam par " + pedejais + "."
    };
}

// vienāds līmenis - salīdzina mastu
if (mastaVertiba(jaunaisMasts) > mastaVertiba(vecaisMasts)) {
    return {
        ok: true,
        message: ""
    };
}
return {
    ok: false,
    message: "Solījumam jābūt augstākam par " + pedejais + "."
};

}

//----  
function mastaVertiba(masts) {
    if (masts == "C")  return 1;
    if (masts == "D")  return 2;
    if (masts == "H")  return 3;
    if (masts == "S")  return 4;
    if (masts == "NT") return 5;
}

// ============================================================
// Pārbauda, vai kontra ir atļauta.
//
// Izmanto tikai pēdējos trīs solījumus.
//
// Kontra atļauta:
//
// 1) Ja pēdējais (-1) ir īsts pretinieka solījums.
//
// 2) Ja trešais no beigām (-3) ir īsts pretinieka
//    solījums un otrais no beigām (-2) ir PASS.
//
// Visos pārējos gadījumos kontra nav atļauta.
// ============================================================

function solKontraAtlauta() {

    // Pārbauda tikai X.
    if (biddingInput.callType != "X") {
        return {
            ok: true,
            message: ""
        };
    }

    let n = facts.bids.length;

    let A = (n >= 3) ? facts.bids[n - 3] : null;
    let B = (n >= 2) ? facts.bids[n - 2] : null;
    let C = (n >= 1) ? facts.bids[n - 1] : null;

    // ---------------------------------------------
    // 1. variants.
    // Pēdējais solījums ir īsts pretinieka solījums.
    // ---------------------------------------------
    if (C != null) {
        if (irIstaisSolijums(C.solijums)) {
            return {
                ok: true,
                message: ""
            };
        }
    }
 
    // ---------------------------------------------
    // 2. variants.
    // Pirms diviem gājieniem pretinieks solīja.
    // Partneris PASS
    // Kontra joprojām ir atļauta.
    // ---------------------------------------------
    if (A != null) {
      if (irIstaisSolijums(A.solijums)) {
          if (B != null) {
              if (B.solijums == "PASS") {
                 return {
                    ok: true,
                    message: ""
              };
            }
          }
       }
    } 
    // Kontra nav atļauta.
    // ---------------------------------------------
    return {
        ok: false,
        message: "Kontra nav atļauta."
    };
}   
 
// ============================================================
// Pārbauda, vai solījums ir īsts.
//
// Īstie solījumi ir:
//    1C ... 7NT
//
// Par īstiem solījumiem neuzskata:
//    PASS
//    X
//    XX
// ============================================================

function irIstaisSolijums(solijums) {

    if (solijums == "PASS") return false;
    if (solijums == "X")    return false;
    if (solijums == "XX")   return false;

    return true;
}

// ============================================================
// Pārbauda, vai rekontra ir atļauta.
//
// Izmanto tikai pēdējos trīs solījumus.
//
// Rekontra atļauta:
//
// 1) Ja pēdējais (-1) ir X.
//
// 2) Ja trešais no beigām (-3) ir X,
//    bet abi nākamie (-2 un -1) ir PASS.
//
// Visos pārējos gadījumos rekontra nav atļauta.
// ============================================================

function solRekontraAtlauta() {

    // Pārbauda tikai XX.
    if (biddingInput.callType != "XX") {
        return {
            ok: true,
            message: ""
        };
    }

    let n = facts.bids.length;

    let A = (n >= 3) ? facts.bids[n - 3] : null;
    let B = (n >= 2) ? facts.bids[n - 2] : null;
    let C = (n >= 1) ? facts.bids[n - 1] : null;

    // ---------------------------------------------
    // 1. variants.
    // Pēdējais solījums ir X.
    // ---------------------------------------------
    if (C != null) {
        if (C.solijums == "X") {
            return {
                ok: true,
                message: ""
            };
        }
    }

    // ---------------------------------------------
    // 2. variants.
    // X, PASS, PASS.
    // ---------------------------------------------
    if (A != null) {
        if (A.solijums == "X") {
            if (B != null && B.solijums == "PASS") {
                if (C != null && C.solijums == "PASS") {
                    return {
                        ok: true,
                        message: ""
                    };
                }
            }
        }
    }

    // ---------------------------------------------
    // Rekontra nav atļauta.
    // ---------------------------------------------
    return {
        ok: false,
        message: "Rekontra nav atļauta."
    };
}

//-----------------------
console.log("common/rules.js ielādēts");
