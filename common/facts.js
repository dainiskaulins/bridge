// facts.js
//
// ====================================================================
// BRIDŽA SADALES DATU MODELIS
//
// Šajā objektā glabājas TIKAI VIENAS SADALES FAKTI.
//
// Šis ir vienīgais programmas datu modelis.
// Visi pārējie dati tiek APRĒĶINĀTI ar funkcijām.
//
// Piemēri, ko aprēķina:
//   - kurš tagad sola;
//   - kurš tagad izdara gājienu;
//   - kurš ir deklarētājs;
//   - kurš ir dummy;
//   - kurš uzvar stiķi;
//   - cik stiķu paņemts;
//   - cik punkti pienākas;
//   - cik trūkst līdz game;
//   - cik trūkst līdz rubber.
//
// Šīs vērtības šeit NETIEK GLABĀTAS.
//
// Pogu funkcijas drīkst papildināt vai labot tikai šo objektu.
// Visas pārējās funkcijas tikai nolasa šo objektu
// un aprēķina vajadzīgo rezultātu.
//
// Šis objekts apraksta TIKAI VIENU SADALI.
// Pilns rubber nākotnē būs atsevišķs objekts,
// kurš saturēs vairākus šādus "facts".
//
// ====================================================================

const facts = {

    // ------------------------------------------------------------
    // Datu modeļa versija.
    //
    // Ja kādreiz mainīsies datu struktūra,
    // šis numurs jāpalielina.
    // ------------------------------------------------------------

    version: 1,

    // ------------------------------------------------------------
    // Sākuma kāršu sadalījums.
    //
    // Katrā masīvā jābūt tieši 13 kārtīm.
    //
    // Spēlētāji:
    //
    //   N = North  (Ziemeļi)
    //   E = East   (Austrumi)
    //   S = South  (Dienvidi)
    //   W = West   (Rietumi)
    //
    // Kāršu kodējums:
    //
    // Pirmais simbols = masts
    //
    //   S = Spades   (pīķi)
    //   H = Hearts   (erci)
    //   D = Diamonds (kāravi)
    //   C = Clubs    (kreici)
    //
    // Otrais simbols = kārts lielums
    //
    //   A = dūzis
    //   K = kungs
    //   Q = dāma
    //   J = kalps
    //   T = desmitnieks
    //   9 8 7 6 5 4 3 2
    //
    // Piemēri:
    //
    //   SA = pīķa dūzis
    //   HK = erca kungs
    //   DT = kārava desmitnieks
    //   C7 = kreiča septītnieks
    // ------------------------------------------------------------

    hands: {

        N: [],

        E: [],

        S: [],

        W: []

    },

    // ------------------------------------------------------------
    // Dalītājs.
    //
    // Viena no četrām vērtībām:
    //
    //   "N"
    //   "E"
    //   "S"
    //   "W"
    //
    // Dalītājs arī sāk solīšanu.
    // ------------------------------------------------------------

    dealer: "N",

    // ------------------------------------------------------------
    // Zona.
    //
    // Atļautās vērtības:
    //
    //   "None" = neviens nav zonā
    //   "NS"   = tikai North-South zonā
    //   "EW"   = tikai East-West zonā
    //   "Both" = abas puses zonā
    // ------------------------------------------------------------

    vulnerability: "None",

    // ------------------------------------------------------------
    // Solījumu vēsture.
    //
    // Katrs masīva elements apraksta vienu solījumu.
    //
    // Piemērs:
    //
    // {
    //     player: "N",
    //     call: "1S"
    // }
    //
    // player:
    //
    //   "N" "E" "S" "W"
    //
    // call piemēri:
    //
    //   "P"    = Pass
    //   "X"    = Kontra
    //   "XX"   = Rekontra
    //   "1C"
    //   "1D"
    //   "1H"
    //   "1S"
    //   "1NT"
    //   ...
    //   "7NT"
    //
    // Ierakstu secība ir solīšanas secība.
    // ------------------------------------------------------------

    bids: [],

    // ------------------------------------------------------------
    // Izspēles vēsture.
    //
    // Katrs masīva elements apraksta vienu nospēlētu kārti.
    //
    // Piemērs:
    //
    // {
    //     player: "W",
    //     card: "HA"
    // }
    //
    // player:
    //
    //   "N" "E" "S" "W"
    //
    // card:
    //
    //   piemēram:
    //   "SA"
    //   "HT"
    //   "D5"
    //   "CQ"
    //
    // Ierakstu secība ir faktiskā izspēles secība.
    // No šī masīva iespējams aprēķināt:
    //
    //   - pašreizējo stiķi;
    //   - kurš uzvar stiķi;
    //   - kam tagad gājiens;
    //   - cik stiķu paņemts;
    //   - kuras kārtis jau izspēlētas.
    // ------------------------------------------------------------

    plays: [],

    // ------------------------------------------------------------
    // Sadales gala rezultāts.
    //
    // Kamēr sadale nav pabeigta:
    //
    //     result = null
    //
    // Pēc sadales beigām šo lauku aizpilda
    // tiesneša (aprēķinu) funkcija.
    //
    // Iekšējā struktūra pašlaik vēl nav definēta.
    // ------------------------------------------------------------

    result: null

};
