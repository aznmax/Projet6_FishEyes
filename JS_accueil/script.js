function fetchData() {
    fetch("./JSON/FishEyeData.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const url = window.location.search;
            const id = 82;
            let artiste = data.photographers.find((a) => a.id == id);
            // console.log(artiste);
            const html = data.photographers.map((user) => {
                return `
              <div class="profilphotographe" data-tags="${user.tags}">
                  <a href="./Photographe/page_photographe.html?id=${user.id}">
                      <div  class="nomphotographe">
                          <img  src="./SamplePhotos/PhotographersPhotos/${user.portrait} "
                          alt= "Voici le portrait de ${user.name}">
                          <h2>${user.name}</h2>
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

const buttons = document.querySelectorAll(".js_filter_tag");
buttons.forEach((button)=> button.addEventListener("click", showTag));

function showTag(e){
    buttons.forEach((button)=>{
        console.log(button);   
        button.classList.remove("active");
    })
    e.target.classList.add("active");
    const boxes = document.querySelectorAll(".profilphotographe");
    console.log(boxes);
    console.log(`button ${e.target.id} cliqued`);
    const id = e.target.getAttribute("id");
    boxes.forEach((box)=>{
        const tags = box.getAttribute("data-tags").split(",");
        if(tags.includes(id)){
            box.style.removeProperty("display");
           
        }else{
            box.style.setProperty("display","none");
           
        }


    })
    

}

  

