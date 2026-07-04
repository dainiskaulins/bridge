// common/utils.js
// 
// Vispārīgas palīgfunkcijas.
// Mazas funkcijas, kas noder vairākās vietās: kopēšana, nejauša izvēle, teksta formatēšana u.c.
// Šeit neliek specifiskus bridža noteikumus.

// ============================================================
// Atgriež nākamo spēlētāju pulksteņrādītāja virzienā.
//
// S → W → N → E → S
// ============================================================
function nakamaisSpeletajs(player) {
    if (player == "S") return "W";
    if (player == "W") return "N";
    if (player == "N") return "E";
    if (player == "E") return "S";
    return null;
}

//--------------
function log(message) {
    console.log(message);
}

console.log("common/utils.js ielādēts");
