// common/actions.js
//
// Darbības, kas maina FACTS.
// actions.js nekad nezīmē ekrānu.
// actions.js nekad neraksta logu.
// Šeit ģenerē izdali, pievieno solījumu, izspēlē kārti, anulē pēdējo darbību.
// Pirms izmaiņām darbības izmanto rules.js pārbaudes.

//-------------------------------------
// dzēš izdali - ģenerē tukšu.
function tuksaIzdale() {
  facts.status = "EMPTY";
  facts.hands = { N: [], E: [], S: [], W: [] };
  facts.bids = [];
  facts.plays = [];
  facts.result = null;
}

// --- Solīšanas globālais darba objekts --------------------
//
// Satur pašlaik veidojamo solījumu.
//
// Šis NAV FACTS.
// Kamēr nav nospiesta poga SOLĪT,
// lietotājs drīkst mainīt visas vērtības.
//
// Pēc pogas SOLĪT biddingInput tiek ierakstīts FACTS
// un inicializēts nākamajam solījumam.
// -----------------------------------------------------------

let biddingInput = {
    player: null,    // "N", "E", "S", "W"
    callType: null,  // "BID", "PASS", "X", "XX"
    level: null,     // "1"..."7"
    suit: null       // "C", "D", "H", "S", "NT"
};

// --- Izspēles globālais darba objekts --------------------
//
// Satur pašlaik veidojamo gājienu.
//
// Šis NAV FACTS.
// Kamēr nav nospiesta poga IZSPĒLE,
// lietotājs drīkst mainīt visas vērtības.
//
// Pēc pogas IZSPĒLE no playInput tiek izveidots
// gājiena ieraksts, kas tiek pievienots FACTS.
// Pēc tam playInput tiek inicializēts nākamajam gājienam.
// -----------------------------------------------------------

let playInput = {
    player: null,    // "N", "E", "S", "W"
    suit: null,      // "C", "D", "H", "S"
    rank: null       // "A", "K", ..., "2"
};

// ======================================================
// iaspēles pogu galvenā funkcija.
// playButtonClick(card)
// Izspēles pogas nospiešana.
// Pagaidām tikai reģistrē nospiesto kārti.
// ======================================================
function playButtonClick(card) {

    console.log("Play: playButtonClick", card);
// negatavs !!!!!!!!!!!!!!!!!!!!!!!!!!!
//    if (!playLegal(card)) return;

       playCard(card);

       renderAll();

    facts.plays.push({
        card: card
    });

    renderAll();
}

// ============================================================
// Solīšanas pogu galvenā funkcija.
//
// Šo funkciju izsauc VISAS solīšanas pogas.
//
// Parametrs:
//    value - nospiestās pogas identifikators.
//
// Funkcija izmanto biddingInput kā pagaidu darba objektu.
//
// Algoritms:
//
// 1. Saņem nospiestās pogas kodu.
// 2. Pārbauda, vai šo pogu pašlaik drīkst nospiest.
// 3. Ja nedrīkst - beidz darbu un atgriež kļūdas aprakstu.
// 4. Ja drīkst - ieraksta izvēli biddingInput.
// 5. Pārbauda, vai solījums ir pilnībā nokomplektēts.
// 6. Ja nav - atgriež pašreizējo darba stāvokli.
// 7. Ja nospiesta poga SOLĪT:
//      - ieraksta solījumu facts.bids;
//      - nosaka nākamo solītāju;
//      - inicializē biddingInput nākamajam solījumam.
// 8. Atgriež rezultātu izsaucējai funkcijai.
//
// Atgriež objektu:
//
// {
//    ok: true | false,      // darbība izdevās / neizdevās
//    message: "...",        // paskaidrojums lietotājam
//    refresh: true | false  // vai jāpārzīmē ekrāns
// }
//
// Piezīmes.
//
// Kamēr nav nospiesta poga SOLĪT,
// lietotājs drīkst labot level vai suit.
// FACTS netiek mainīts.
//
// biddingInput satur tikai nepabeigtu lietotāja ievadi.
// Par spēles faktu tā kļūst tikai pēc pogas SOLĪT.
// ============================================================

function biddingButtonClick(value) {
    console.log("Solīšanas poga: " + value );
    console.log("Sola: " + biddingInput.player );
    console.log(biddingInput);

    let result = { ok:true, message:"", refresh:true };

    if (facts.status != "BIDDING") {
       result.ok = false;
       result.message = "Solīšana vairs nenotiek.";
       result.refresh = false;
       return result;
    }

   // ----------------------------------------------------
    // Solījuma līmenis
    // ----------------------------------------------------
    if (["1","2","3","4","5","6","7"].includes(value)) {
        biddingInput.callType = "BID";
        biddingInput.level = value;
    }

    // ----------------------------------------------------
    // Solījuma masts
    // ----------------------------------------------------
    if (["C","D","H","S","NT"].includes(value)) {
        biddingInput.callType = "BID";
        biddingInput.suit = value;
    }

    // ----------------------------------------------------
    // PASS
    // ----------------------------------------------------
    if (value == "PASS") {
        biddingInput.callType = "PASS";
        biddingInput.level = null;
        biddingInput.suit = null;
    }

    // ----------------------------------------------------
    // X
    // ----------------------------------------------------
    if (value == "X") {
        biddingInput.callType = "X";
        biddingInput.level = null;
        biddingInput.suit = null;
    }

    // ----------------------------------------------------
    // XX
    // ----------------------------------------------------
    if (value == "XX") {
        biddingInput.callType = "XX";
        biddingInput.level = null;
        biddingInput.suit = null;
    }

    // ----------------------------------------------------
    // SOLIT
    // ----------------------------------------------------
    if (value == "SOLIT") {
      // ??????? result.message = "SOLĪT nospiests.";
    
    // Pārbaudīt, vai solījums ir legāls.
       let res = solParbaudit();

       if (!res.ok) {
           return res;
       }

    // No šīs vietas uz leju viss ir legāls.
    // Veido solījumu.
      
      let solijums;
      
      if (biddingInput.callType == "BID") {
        if (biddingInput.level == null || biddingInput.suit == null) {
            result.ok = false;
            result.message = "Solījums nav pilns: vajag level un suit.";
            return result;
        }

        solijums = biddingInput.level + biddingInput.suit;

    } else {
        if (biddingInput.callType == null) {
            result.ok = false;
            result.message = "Nav izvēlēts solījums.";
            return result;
        }

        solijums = biddingInput.callType;
    }

    // 1. Ierakstām legālu solījumu FACTS.  
    facts.bids.push({
        player: biddingInput.player,
        solijums: solijums
    });
      
    // 2. Pārbauda, vai solīšana ir beigusies.
    let r = solParbauditBeigas();

    // te vēl varētu būt kontrakta noteikšana TBD
      
    if (r.finished) {
        result.message = r.message;
        result.refresh = true;
        return result;
    } 
      
    // 3. Solīšana turpinās. Sagatavo nākamo solītāju.
    biddingInput.player = nakamaisSpeletajs(biddingInput.player);
    biddingInput.callType = null;
    biddingInput.level = null;
    biddingInput.suit = null;
      
    result.message = biddingInput.player + " sola " + solijums;
    result.refresh = true;

    console.log(facts.bids);
  }

  console.log(biddingInput);
  return result;
}

//=======================================
console.log("common/actions.js ielādēts");
