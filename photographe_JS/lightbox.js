//LightBox JS //
const modal = document.getElementById("lightbox_id");
const lightbox_content = document.getElementById("lightbox_contents");
const items_lightbox = document.getElementsByClassName(".js_modal_lightbox");
const close_lightbox = document.getElementById("js_close_lightbox");
const next_lightbox = document.getElementById("js_next_lightbox");
const prev_lightbox = document.getElementById("js_prev_lightbox");
const titre_lightbox= document.getElementById("titre_photo_modal")
let current_item_lightbox;

close_lightbox.addEventListener("click", function () {
    closeLightBox(modal);
});

next_lightbox.addEventListener("click", function () {
    nextLightboxItem(current_item_lightbox);
});
prev_lightbox.addEventListener("click", function () {
    previousLightboxItem(current_item_lightbox);
});

function openLightbox(modal, id, title) {
    hideAllImgLightbox();
    current_item_lightbox = document.getElementById("item_lightbox_" + id);
    modal.style.display = "block";
    titre_lightbox.innerText = title;
    current_item_lightbox.style.display = "block";
    console.log(title);
}

function closeLightBox(modal) {
    modal.style.display = "none";
}

function hideAllImgLightbox() {
    const lightbox_items = document.querySelectorAll(".js_hide_item_lightbox");
    for (i = 0; i < lightbox_items.length; i++) {
        lightbox_items[i].style.display = "none";
    }
}

function previousLightboxItem(current_img) {
    // on masque l'image actuelle
    let title;
    current_img.style.display = "none";
    if (current_img.previousSibling !== null) {
        // on affiche l'image précédente du DOM
        current_img.previousSibling.style.display = "block";
        // On défini l'image suivante comme étant l'image actuelle
        current_item_lightbox = current_img.previousSibling;
        title = current_img.previousSibling.dataset.title;
    } else {
        lightbox_content.lastElementChild.style.display = "block";
        current_item_lightbox = lightbox_content.lastElementChild;
        title = lightbox_content.lastElementChild.dataset.title;
    }
    titre_lightbox.innerText = title;
}
function nextLightboxItem(current_img) {
    // on masque l'image actuelle
    current_img.style.display = "none";
    let title;
    if (current_img.nextSibling !== null) {
        // on affiche l'image suivante du DOM
        current_img.nextSibling.style.display = "block";
        // On défini l'image suivante comme étant l'image actuelle
        current_item_lightbox = current_img.nextSibling;
        title = current_img.nextSibling.dataset.title;
        
    } else {
        console.log(lightbox_content.firstElementChild);
        lightbox_content.firstElementChild.style.display = "block";
        current_item_lightbox = lightbox_content.firstElementChild;
        title = lightbox_content.firstElementChild.dataset.title;
    }
    titre_lightbox.innerText = title;
}

const previousKeyboard = document.getElementById('js_prev_lightbox');

//Arrow previous
window.addEventListener("keydown", (event) => {
    if(event.key != "ArrowLeft"){return;}
    previousLightboxItem(current_item_lightbox);
});

//Arrow Next
window.addEventListener("keydown", (event) => {
    if(event.key != "ArrowRight"){return;}
    nextLightboxItem(current_item_lightbox);
});

window.addEventListener("keydown", (event) => {
    if(event.key != "Escape"){return;}
    closeLightBox(modal);
});
