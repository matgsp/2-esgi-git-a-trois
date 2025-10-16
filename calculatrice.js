// Chaque étudiant ajoute sa fonction ici 👇

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
