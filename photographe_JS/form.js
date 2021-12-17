function fetchMedia() {
    fetch(".././JSON/FishEyeData.json")
        .then((response) => response.json())
        .then((data) => (json_data = data))
        .then((data) => {
            // On récupère les infos de l'artistes et ses arts grâce à l'ID enregistré avant
            const artiste = data.photographers.find((t) => t.id == id); // find récupère le premier photographe avec le bon ID
            const medias = data.media.filter((t) => t.photographerId == artiste.id); // Filter permet de récupérer tout les arts de l'artiste

            const info_artiste = `
       <section class="infophotographe">
       <!-- Information Photographe -->
       <div class="descriptionphotographe">
         <div class="headerphotographe">
         <form action="">
         <h1 class="nom_artiste">Contactez-moi<br>${artiste.name}
         <div class=close_btn>
         <i class="fas fa-times"></i>     
         </div>
         </h1>
         <div class="form_content">
         <label for ="prenom">Prénom</label>
         
         <input onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)" class="text-control" type="text" id="prenom" name="first" minlength="2" /><br>
         <span id="formerror">Le champ Prénom a un minimum de 2 caractères / n'est pas vide.</span>
         <label for ="nom">Nom</label>
         <input onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)" class="text-control" type="text" id="nom" name="first" minlength="2" /><br>
        <span id="formerror2">Le champ nom a un minimum de 2 caractères / n'est pas vide.</span>
        
         <label for ="mail">e-mail</label>
          <input type="email" placeholder="E-Mail" id="mail">
          <span class="erreur" id="erreur_email"></span>
          <p class = "msg_input">Votre Message</p>
          <textarea id="zone_texte" class="erreur_area"></textarea>
          <button class= bouton_formulaire type="button">Contacter-moi</button>
         </div>
         </form>
       <div class="clichephotographe">
        <div class="artiste">
          <img tabindex="0" src="../SamplePhotos/PhotographersPhotos/${artiste.portrait}"
            alt="${artiste.name}"
          />
        </div>
      </div>
      
  `;
            //Ouverture Modal //

            const btn_formulaire = document.querySelector(".btn_form");
            btn_formulaire.addEventListener("click", function () {
                document.querySelector(".bg-modal").style.display = "flex";
            });

            const btn2 = document.querySelector(".bouton_formulaire");
            btn2.addEventListener("click", function () {
                // console.log(btn_formulaire);
            });
            // Fermeture Modal //
            const close_button = document.querySelector(".close_btn").addEventListener("click", function () {
                document.querySelector(".bg-modal").style.display = "none";
            });

            // Submit Constante//
            // Validation Formulaire //
            let validation_nom = false;
            let validation_prenom = false;
            let validation_mail = false;
            let validation_area = false;

            // Erreur Formulaire //
            const erreur_prenom = document.getElementById("formerror");
            console.log(erreur_prenom);
            const erreur_nom = document.getElementById("formerror2");
            const erreur_mail = document.getElementById("erreur_email");
            const erreurArea = document.getElementsByClassName("erreur_area");
            console.log(erreurArea);

            const configregex = /^[a-zA-ZÀ-ÖØ-öø-ÿ---_]+$/;
            const regexmail = /^\S+@\S+\.\S+$/;

            document.querySelector(".bouton_formulaire").addEventListener("click", function (e) {
                // Valeur Formulaire //
                let valeurPrenom = document.getElementById("prenom").value;
                let valeurNom = document.getElementById("nom").value;
                let valeurMail = document.getElementById("mail").value;
                let valeurArea = document.getElementById("zone_texte").value;

                //Regex

                // Eviter le comportement par défaut//
                e.preventDefault();

                // Regex Prénom

                // erreur_prenom.style.display = "none";

                if (valeurPrenom.length < 2) {
                    erreur_prenom.style.display = "inline-block";
                    erreur_prenom.textContent = "Veuillez renseigner un prénom avec un minimum de 2 caractères";
                    validation_prenom = false;
                } else {
                    validation_prenom = true;
                    erreur_prenom.textContent = "";
                }

                // Regex Nom

                // erreur_nom.style.display = "none";

                if (valeurNom.length < 2) {
                    erreur_nom.style.display = "inline-block";
                    erreur_nom.textContent = "Veuillez renseigner un nom avec un minimum de 2 caractères";
                    validation_nom = false;
                } else {
                    validation_nom = true;
                    erreur_nom.textContent = "";
                }

                erreur_mail.style.display = "none";

                if (!mail.value.match(regexmail)) {
                    erreur_mail.textContent = "Veuillez renseigner un email";
                    mail.classList.add("formulaire_erreur");
                    erreur_mail.style.display = "inline-block";
                    validation_mail = false;
                } else {
                    mail.classList.add("formulaire_valid");
                    validation_mail = true;
                    erreur_mail.textContent = "";
                }

                if (validation_area.value < 0) {
                    erreurArea.style.display = "inline-block";
                    erreurArea.nom.textContent = "Veuillez renseigner du texte";
                    validation_area = false;
                } else {
                    validation_area = true;
                    erreurArea.textContent = "";
                }

                // Validation Submit //

                if (validation_nom && validation_prenom && validation_mail && validation_area) {
                    modalSubmit();
                }
                function modalSubmit() {
                    btn2.addEventListener("click", function () {
                        const confirmation = document.querySelector(".bg-modal");
                        confirmation.addEventListener("click", function () {
                            confirmation.style.display = "none";
                            console.log(valeurNom);
                            console.log(valeurPrenom);
                            console.log(valeurMail);
                            console.log(valeurArea);
                        });
                    });
                }
            });
        });
}

fetchMedia();
