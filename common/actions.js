// common/actions.js
//
// Darbības, kas maina FACTS.
// actions.js nekad nezīmē ekrānu.
// actions.js nekad neraksta logu.
// Šeit ģenerē izdali, pievieno solījumu, izspēlē kārti, anulē pēdējo darbību.
// Pirms izmaiņām darbības izmanto rules.js pārbaudes.

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
    console.log("Solišanas poga:" + value );
    let result = {
        ok: true,
        message: "",
        refresh: false
    };

    return result;
}
//=======================================
console.log("common/actions.js ielādēts");
