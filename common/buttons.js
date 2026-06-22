// common/buttons.js

function pogasKrasa(id, klase) {
  const poga = document.getElementById(id);

  poga.classList.remove("poga-zala", "poga-dzeltena", "poga-sarkana", "poga-peleka");
  poga.classList.add(klase);
}

console.log("buttons.js ielādēts");
