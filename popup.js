function plusdedetail(){
    document.getElementById("popup-1").classList.toggle("activeov") ;
}

function plusdedetail2(){
    document.getElementById("popup-2").classList.toggle("activeov") ;
}

function plusdedetail3(){
    document.getElementById("popup-3").classList.toggle("activeov") ;
}

function plusdedetail4(){
    document.getElementById("popup-4").classList.toggle("activeov") ;
}
function plusdedetail5(){
    document.getElementById("popup-5").classList.toggle("activeov") ;
}


var currentIndex = 1; // Index de la pop-up actuelle

function afficherPopup(index) {
  // Masquer toutes les pop-ups
  var popups = document.getElementsByClassName("popup");
  for (var i = 0; i < popups.length; i++) {
    popups[i].classList.remove("activeov");
  }

  // Afficher la pop-up spécifiée par l'index
  var popup = document.getElementById("popup-" + index);
  popup.classList.add("activeov");

  // Mettre à jour l'index actuel
  currentIndex = index;
}

function popupSuivante() {
  var totalPopups = 5; // Nombre total de pop-ups

  // Incrémenter l'index actuel et afficher la pop-up suivante
  currentIndex++;
  if (currentIndex > totalPopups) {
    currentIndex = 1; // Revenir à la première pop-up si on atteint la dernière
  }
  afficherPopup(currentIndex);
}

function popupPrecedente() {
  var totalPopups = 5; // Nombre total de pop-ups

  // Décrémenter l'index actuel et afficher la pop-up précédente
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = totalPopups; // Revenir à la dernière pop-up si on atteint la première
  }
  afficherPopup(currentIndex);
}


function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_sf8xuxi";
  const templateID = "template_f8akxn5";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}


