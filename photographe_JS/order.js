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
         <!-- Ordre photogrphe -->
         <div class="selectbox">
           <label for="selectorder">Trier par</label>
           <select tabindex="0" name="Popularity" id="selectorder">
             <option tabindex="0" value="popularity">Popularité</option>
             <option tabindex="0" value="date">Date</option>
             <option tabindex="0" value="title">Titre</option>
           </select>
         </div>
       </div>
      </div>
      
      
  `;

            const order = document.getElementById("selectorder");
            order.addEventListener("change", function (e) {
                orderBy(e.target.value, medias, artiste);
            });
            // Trier par //
            function orderBy(order, medias, artiste) {
                document.getElementById("flexmedias").innerHTML = "";

                switch (order) {
                    case "title":
                        medias.sort((a, b) => a.title.localeCompare(b.title));
                        break;

                    case "popularity":
                        medias.sort(function (a, b) {
                            return b.likes - a.likes;
                        });
                        break;

                    case "date":
                        medias.sort(function (a, b) {
                            return new Date(b.date) - new Date(a.date);
                        });
                        break;
                }
                factory(medias, artiste);
            }
        });
}
fetchMedia();
