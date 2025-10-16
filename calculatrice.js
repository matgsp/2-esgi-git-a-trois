function multiplication() {
  const a = parseFloat(document.getElementById("nombre1").value);
  const b = parseFloat(document.getElementById("nombre2").value);
  const resultat = a * b;
  document.getElementById("resultat").innerText = "Résultat : " + resultat;
}

function division() {
  const a = parseFloat(document.getElementById("nombre1").value);
  const b = parseFloat(document.getElementById("nombre2").value);

  if (b === 0) {
    document.getElementById("resultat").innerText = "Erreur : division par zéro impossible.";
  } else {
    const resultat = a / b;
    document.getElementById("resultat").innerText = "Résultat : " + resultat;
  }
// Chaque étudiant ajoute sa fonction ici 👇
function reset() {
  document.getElementById("nombre1").value = "";
  document.getElementById("nombre2").value = "";
  document.getElementById("resultat").innerText = "Résultat : ";
}

function addition() {
    const a = parseFloat(document.getElementById("nombre1").value);
    const b = parseFloat(document.getElementById("nombre2").value);
    const resultat = a + b;
    document.getElementById("resultat").innerText = "Résultat : " + resultat;
}

function soustraction() {
    const a = parseFloat(document.getElementById("nombre1").value);
    const b = parseFloat(document.getElementById("nombre2").value);
    const resultat = a - b;
    document.getElementById("resultat").innerText = "Résultat : " + resultat;
}
