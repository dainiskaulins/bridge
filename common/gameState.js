//=========================================================
// common/gameState.js
//
// Aprēķinātais spēles stāvoklis.
//
// Šis NAV FACTS.
// Šajā failā atrodas visi dati, kurus var aprēķināt
// no FACTS.
//
// Galvenais princips:
//
//    FACTS  --->  calculateGameState()  --->  gameState
//
// Biznesa funkcijas drīkst izmantot gameState,
// bet tās nedrīkst to labot.
//
// Ja mainās FACTS (SOLĪT, IZSPĒLE, BACK, IMPORT,
// TESTI u.c.), gameState jāpārrēķina.
//
// Lauki sākumā var būt tukši vai aizkomentēti.
// Tos pievieno tikai tad, kad tie kļūst vajadzīgi.
//=========================================================


//=========================================================
// Aprēķinātais spēles stāvoklis
//=========================================================

let gameState = {

    //-----------------------------------------------------
    // Solīšana
    //-----------------------------------------------------
    bidding: {

        // finished: false,
        // contract: null,
        // declarer: null,
        // dummy: null,

        // lastCall: null,
        // last3Calls: []

    },

    //-----------------------------------------------------
    // Izspēle
    //-----------------------------------------------------
    play: {

        // trick: null,
        // leader: null,
        // currentPlayer: null,
        // requiredSuit: null,
        // trickWinner: null

    },

    //-----------------------------------------------------
    // Kontrakts
    //-----------------------------------------------------
    contract: {

        // level: null,
        // trump: null,
        // doubled: false,
        // redoubled: false

    },

    //-----------------------------------------------------
    // Stiķi
    //-----------------------------------------------------
    tricks: {

        // ns: 0,
        // ew: 0

    },

    //-----------------------------------------------------
    // Tiesnesis
    //-----------------------------------------------------
    judge: {

        // legalPlay: true,
        // message: ""

    }

};


//=========================================================
// Pārrēķina visu gameState no FACTS.
//
// Šī ir vienīgā funkcija,
// kura drīkst mainīt gameState.
//=========================================================

function calculateGameState() {

    // Pagaidām nekā.

}


//=========================================================
// Aprēķina vienu gameState lauku.
//
// Šis ir tikai piemērs.
//=========================================================

function gsCalculateCurrentTrick() {

    // Katrā stiķī ir 4 kārtis.
    // Pirmais stiķis ir Nr.1.

    return Math.floor(facts.plays.length / 4) + 1;

}


console.log("common/gameState.js ielādēts");
