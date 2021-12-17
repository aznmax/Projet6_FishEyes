// // On récupère l'URL avec window.location //
const url = new URL(window.location);

// On récupère le paramètre ID de l'URL
const id = url.searchParams.get("id");

// On récupère la data JSON
let json_data;
function fetchMedia() {
    fetch("../JSON/FishEyeData.json")
        .then((response) => response.json())
        .then((data) => (json_data = data))
        .then((data) => {
            // On récupère les infos de l'artistes et ses arts grâce à l'ID enregistré avant
            const artiste = data.photographers.find((t) => t.id == id); // find récupère le premier photographe avec le bon ID
            const medias = data.media.filter((t) => t.photographerId == artiste.id); // Filter permet de récupérer tout les arts de l'artiste

            liste_media = factory(medias, artiste);

            const info_artiste = `
       <section class="infophotographe">
       <!-- Information Photographe -->
       <div class="descriptionphotographe">
         <div class="headerphotographe">
           <!-- Bouton Photographe -->
           <button class=btn_form type="button">Contactez-moi</button>
           <h2 tabindex="0">${artiste.name}</h2>
         </div>
         <div class="bg-modal">
         <div class="modal-contents">
        
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
       
         </div>
       </div>
         <h3>${artiste.city},${artiste.country}</h3>
         <p>${artiste.tagline}</p>
         <div class="tag">
           <ul>
           ${artiste.tags
               .map(
                   (tag) => ` <li>
           #${tag}
       </li>`
               )
               .join("")}
           </ul>
         </div>
         <!-- Ordre photogrphe -->
         <div class="selectbox">
           <label for="selectorder" tabindex="0">Trier par</label>
           <select tabindex="0" name="Popularity" id="selectorder">
             <option tabindex="0" value="popularity">Popularité</option>
             <option tabindex="0" value="date">Date</option>
             <option tabindex="0" value="title">Titre</option>
           </select>
         </div>
       </div>
       <div class="clichephotographe">
        <div class="artiste">
          <img tabindex="0" src="../SamplePhotos/PhotographersPhotos/${artiste.portrait}"
            alt="${artiste.name}"
          />
        </div>
      </div>
      
      
  `;
            // const html_medias =

            const section = document.getElementById("infophotographe");
            const section_medias = document.getElementById("flexmedias");
            section.insertAdjacentHTML("beforeend", info_artiste);

            totalCount();
        });
}
fetchMedia();

// hearts.forEach(function(heart) {
//     heart.addEventListenr("click", handleHeart);
//     console.log(heart);
// });
