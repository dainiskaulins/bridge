// common/buttons.js
//
// Palīgfunkcijas darbam ar pogām.
// Maina pogu krāsas, stāvokļus un izskatu.
// Šeit nav bridža noteikumu — tikai pogu tehnika.

function pogasKrasa(id, klase) {
  const poga = document.getElementById(id);

  poga.classList.remove("poga-zala", "poga-dzeltena", "poga-sarkana", "poga-peleka");
  poga.classList.add(klase);
}

console.log("common/buttons.js ielādēts");
