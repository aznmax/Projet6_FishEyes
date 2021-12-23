function factory(medias, artiste) {
    let result = "";
    const artiste_prenom = artiste.name.split(" ").slice(0, -1).join(" ");
    const section_medias = document.getElementById("flexmedias");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const video = document.createElement("video");
    const source = document.createElement("source");
    const span = document.createElement("span");
    const icone_likes = document.createElement("i");
    icone_likes.classList = "far fa-heart js_like";
    

    medias.forEach((media) => {
        // result += "<div>";
        const mediaartiste = div.cloneNode();
        mediaartiste.classList = "mediaartiste";
        console.log(mediaartiste);
        mediaartiste.setAttribute("tabindex", 1);
        const flexdescription = div.cloneNode();
        flexdescription.classList = "flexdescription";
        const textemedia = div.cloneNode();
        textemedia.classList = "artiste";
        const nomphoto = p.cloneNode();
        nomphoto.innerText = media.title;
        const likes = span.cloneNode();
        likes.classList.add("art_likes");
        likes.innerText = media.likes;
        const coeur = icone_likes.cloneNode();
        const image = img.cloneNode();
        const video_media = video.cloneNode();

        if (media.hasOwnProperty("image")) {
            image.src = "../SamplePhotos/" + artiste_prenom + "/" + media.image + " ";
            image.title= `${media.title}` + ` ${media.date}`+ ` ${media.price}€`;
            image.classList.add("js_modal_lightbox");
            flexdescription.appendChild(image);
            image.dataset.id = media.id;
            image.setAttribute("onclick", "openLightbox(modal, " + media.id +", '"+media.title+ "')");
        } else {
            video_media.src = "../SamplePhotos/" + artiste_prenom + "/" + media.video + "";
            // video_media.setAttribute("controls", "controls");
            video_media.classList.add("js_modal_lightbox");
            video_media.dataset.id = media.id;
            video_media.setAttribute("onclick", "openLightbox(modal, " + media.id +", '"+media.title+ "')");
            flexdescription.appendChild(video_media);
        }
        mediaartiste.appendChild(flexdescription);
        flexdescription.appendChild(textemedia);
        textemedia.appendChild(nomphoto);
        textemedia.appendChild(likes);
        textemedia.appendChild(coeur);
       
        result = mediaartiste;
        section_medias.appendChild(result);

        // Insérer les images dans la modal
        const lightbox_content = document.getElementById("lightbox_contents");

        if (media.hasOwnProperty("image")) {
            const item_lightbox = img.cloneNode();
            item_lightbox.src = "../SamplePhotos/" + artiste_prenom + "/" + media.image + " ";
            item_lightbox.setAttribute("id", `item_lightbox_${media.id}`);
            item_lightbox.dataset.title = media.title;
            item_lightbox.classList.add("js_hide_item_lightbox");
            lightbox_content.appendChild(item_lightbox);
        } else {
            const item_lightbox = video.cloneNode();
            const source_lightbox = source.cloneNode()
            // const truc = source.cloneNode();
            source_lightbox.src = "../SamplePhotos/" + artiste_prenom + "/" + media.video + "";
            source_lightbox.setAttribute("type", "video/mp4")
            item_lightbox.style.zIndex="1";
            item_lightbox.appendChild(source_lightbox);
            item_lightbox.setAttribute("controls", "controls");
            item_lightbox.setAttribute("id", `item_lightbox_${media.id}`);
            item_lightbox.dataset.title = media.title;
            item_lightbox.classList.add("js_hide_item_lightbox");
            // item_lightbox.appendChild(truc);
            lightbox_content.appendChild(item_lightbox);
        }
        const hearts = document.querySelectorAll(".fa-heart");
        // console.log(hearts);
        hearts.forEach(function (heart) {
            heart.addEventListener("click", handleHeart);
        });
    });
    return result;
}
