

function sendMail() {
   let confirmSend = document.getElementById("confirm-send")
    var params = {
      nom: document.getElementById("nom").value,
      prenom: document.getElementById("prenom").value,
      email: document.getElementById("email").value,
      tel: document.getElementById("tel").value,
      sujet: document.getElementById("sujet").value,

      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_nooi69o";
    const templateID = "template_o4gnfh4";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("nom").value = "";
          document.getElementById("prenom").value = "";
          document.getElementById("email").value = "";
          document.getElementById("tel").value = "";
          document.getElementById("sujet").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          confirmSend.innerHTML = "Message envoyé"
      })
      .catch(err=>console.log(err));
  
  }
  
