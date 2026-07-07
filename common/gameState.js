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
// Soteikums:
// gsCalculate...() → nekad neraksta gameState.
// calculateGameState() → vienīgā raksta gameState.
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

        trick: null,           // izspēles stiķa numurs 
        position: null,        // 1..4, kura kārts stiķī
        requiredSuit: null,    // "C","D","H","S" vai null, ja pirmais stiķīs
        // leader: null,
        currentPlayer: null,   // "S", "W", "N", "E"
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
// Šī ir vienīgā funkcija, kura drīkst mainīt gameState.
// Aprēķina visus gameState laukus.
// Katra apakšfunkcija parasti aprēķina vienu lauku un atgriež rezultātu.
//=========================================================

function calculateGameState() {
    console.log("common/calculateGameState sāk strādāt!");
    
    // Izspēles stiķa numurs
    gameState.play.trick = gsCalculateCurrentTrick();
    // 1..4, kura kārts stiķī
    gameState.play.position = gsCalculateCurrentTrickPosition();
    // "C","D","H","S", vai null, ja pirmais stiķī
    gameState.play.requiredSuit = gsCalculateRequiredSuit();

    // nākošais spēlēt;ajs
    const lastPlay = facts.plays[facts.plays.length - 1];
    gameState.play.currentPlayer = nextSeat(lastPlay.player);
        
    // te būs citi lauki arī

}

//=========================================================
// Aprēķina vienu gameState lauku: stiķa numuru.
//=========================================================

function gsCalculateCurrentTrick() {
    // Katrā stiķī ir 4 kārtis.
    // Pirmais stiķis ir Nr.1.
    return Math.floor(facts.plays.length / 4) + 1;
}

//=========================================================
// Aprēķina, kura kārts pašlaik tiks spēlēta stiķī.
// Rezultāts: 1, 2, 3 vai 4.
//=========================================================
function gsCalculateCurrentTrickPosition() {

    return (facts.plays.length % 4) + 1;

}
//=========================================================
// "S", "W", "N", "E"
//=========================================================
function gsCalculateCurrentPlayer() {

    return "N";

}
//=========================================================
function nextSeat(player) {
    if (player == "S") return "W";
    if (player == "W") return "N";
    if (player == "N") return "E";
    if (player == "E") return "S";
    return null;
}

//=========================================================
// Aprēķina prasīto mastu pašreizējā stiķī.
//
// Ja spēlētājs ir pirmais stiķī, prasītā masta nav.
// Ja stiķī jau ir kārts, prasītais masts ir pirmās kārts masts.
//=========================================================
function gsCalculateRequiredSuit() {

    const position = gsCalculateCurrentTrickPosition();

    if (position === 1) {
        return null;
    }

    const currentTrickStart = facts.plays.length - (position - 1);
    const firstCard = facts.plays[currentTrickStart].card;

    return firstCard[0];

}

console.log("common/gameState.js ielādēts");
