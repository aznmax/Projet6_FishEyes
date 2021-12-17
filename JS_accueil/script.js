function fetchData() {
    fetch(".././JSON/FishEyeData.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const url = window.location.search;
            const id = 82;
            console.log(url);
            let artiste = data.photographers.find((a) => a.id == id);
            console.log(artiste);
            // console.log(artiste);
            const html = data.photographers.map((user) => {
                return `
              <div class="profilphotographe">
                  <a href="./Photographe/page_photographe.html?id=${user.id}">
                      <div tabindex="0" class="nomphotographe">
                          <img  src="./SamplePhotos/PhotographersPhotos/${user.portrait}"
                          alt="Voici le photographe ${user.name}">
                          <h2 >${user.name}</h2>
                      </div>
                  </a>
                  
                  <div  class="descriptionphotographe">
                      <h3>${user.city}, ${user.country}</h3>
                      <p>${user.tagline}</p>
                      <span>${user.price}€/jour</span>
                  </div>
      
                  <div class="tag">
                      <ul>
                     
                      ${user.tags
                          .map(
                              (tag) => ` <li>
                          #${tag}
                      </li>`
                          )
                          .join("")}
                       
                      </ul>
                  </div>
              </div>
      
          `;
            });

            const section = document.getElementById("flexphotographe");
            //   section.innerHtml = html;
            html.forEach((element) => {
                section.insertAdjacentHTML("beforeend", element);
            });
        });
}
fetchData();
