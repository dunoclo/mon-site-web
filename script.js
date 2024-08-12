document.querySelector('header H1').addEventListener('click', function(){
    alert('Bienvenue sur notre site web !');
    console.log('le titre a été cliqué !');
});
function seConnecter() {
    var identifiant = document.getElementById("identifiant").value;
    var motDePasse = document.getElementById("motDePasse").value;
    
    // Vérification de l'identifiant et du mot de passe (remplacez par vos propres valeurs)
    if (identifiant === "admin" && motDePasse === "password123") {
      // Redirection vers la page de bienvenue
      window.location.href = "page_bienvenue.html";
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
  }
  
  
