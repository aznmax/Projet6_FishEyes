function handleHeart(e) {
    const el = e.target;
    let likes_count = el.parentNode.querySelector("span").innerText;

    if (el.classList.contains("far")) {
        el.classList.remove("far");
        el.classList.add("fas");
        el.parentNode.querySelector("span").innerText++;
    } else {
        el.classList.remove("fas");
        el.classList.add("far");
        el.parentNode.querySelector("span").innerText--;
    }
    totalCount();
}

function totalCount() {
    // On sélectionne la span qui affiche le total des likes
    const total_likes = document.getElementById("total_like");
    // on séléctionne tous les span avec la class qui contiennent la valeur des likes
    const numberlikes = document.getElementsByClassName("art_likes");
    // On initialise notre variable qui va faire le total
    let likes_count = 0;
    // On boucle sur le nombre total de span
    for (let i = 0; i < numberlikes.length; i++) {
        // On incrémente à chaque fois la valeur de la span dans votre variable total
        likes_count += parseInt(numberlikes[i].innerText);
    }
    // On change le texte qui apparait dans la barre fixe
    total_likes.innerText = likes_count;
}
