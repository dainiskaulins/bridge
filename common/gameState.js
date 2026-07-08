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
    // Solīšanas process
    //-----------------------------------------------------
    bidding: {
       finished: false,
       declarer: null,
       dummy: null,
       lastCall: null,
       last3Calls: []
    },
       
    //-----------------------------------------------------
    // Izspēles stāvoklis
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
    // Solīšanas rezultāts: kontrakts
    //-----------------------------------------------------
    contract: {
       level: null,
       trump: null,
       doubled: false,
       redoubled: false
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
    
    // ---- PLAY -----
    // Izspēles stiķa numurs
    gameState.play.trick = gsCalculateCurrentTrick();
    // 1..4, kura kārts stiķī
    gameState.play.position = gsCalculateCurrentTrickPosition();
    // "C","D","H","S", vai null, ja pirmais stiķī
    gameState.play.requiredSuit = gsCalculateRequiredSuit();

    // nākošais spēlētājs
    const lastPlay = facts.plays[facts.plays.length - 1];
    if (lastPlay) {
        gameState.play.currentPlayer = nextSeat(lastPlay.player);
    } else {
        gameState.play.currentPlayer = null;
    }
    
    console.log("sssssssssss lastPlay : " + lastPlay );
         
    // te būs citi lauki arī
    
    //-----------------------------------------------------
    // Solīšana
    //-----------------------------------------------------

    const biddingInfo = analyzeBidding(facts.bids);

    gameState.bidding.finished = biddingInfo.finished;
    gameState.bidding.declarer = biddingInfo.declarer;
    gameState.bidding.dummy = biddingInfo.dummy;
    gameState.bidding.lastCall = biddingInfo.lastCall;
    gameState.bidding.last3Calls = biddingInfo.last3Calls;

    //-----------------------------------------------------
    // Kontrakts
    //-----------------------------------------------------

    gameState.contract.level = biddingInfo.level;
    gameState.contract.trump = biddingInfo.trump;
    gameState.contract.doubled = biddingInfo.doubled;
    gameState.contract.redoubled = biddingInfo.redoubled;
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
//=====================================
function analyzeBidding(calls) {
    const result = {
        finished: false,
        contract: null,
        declarer: null,
        dummy: null,
        lastCall: null,
        last3Calls: [],
        level: null,
        trump: null,
        doubled: false,
        redoubled: false
    };

    if (!calls || calls.length === 0) {
        return result;
    }

    result.lastCall = calls[calls.length - 1];
    result.last3Calls = calls.slice(-3);

    // Solīšana beidzas, ja ir vismaz 4 saucieni un pēdējie 3 ir PASS
    const last3Pass =
        calls.length >= 4 &&
        calls.slice(-3).every(c => c.callType === "PASS");

    result.finished = last3Pass;

    // Atrodam pēdējo īsto solījumu: 1C, 2H, 3NT utt.
    let lastBid = null;

    for (const c of calls) {
        if (c.callType === "BID") {
            lastBid = c;
        }
    }

    // Ja visi nopasējuši bez kontrakta
    if (!lastBid) {
        result.contract = null;
        return result;
    }

    result.level = lastBid.level;
    result.trump = lastBid.suit;

    // Pārbaudām, vai pēc pēdējā solījuma bija X vai XX
    const afterLastBid = calls.slice(calls.indexOf(lastBid) + 1);

    result.doubled = afterLastBid.some(c => c.callType === "DOUBLE");
    result.redoubled = afterLastBid.some(c => c.callType === "REDOUBLE");

    if (result.redoubled) {
        result.doubled = false;
    }

    result.contract = {
        level: result.level,
        trump: result.trump,
        doubled: result.doubled,
        redoubled: result.redoubled
    };

    // Deklarants: pirmais no uzvarējušās puses, kas solīja kontrakta mastu
    const winningSide = sideOf(lastBid.player);

    for (const c of calls) {
        if (
            c.callType === "BID" &&
            c.suit === result.trump &&
            sideOf(c.player) === winningSide
        ) {
            result.declarer = c.player;
            break;
        }
    }

    result.dummy = partnerOf(result.declarer);

    return result;
}

console.log("common/gameState.js ielādēts");
