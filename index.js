function change() {
    let redSquare = document.querySelector(".redSquare");
    let article = document.querySelector("article");
    let newRedSquare = redSquare.cloneNode(true);
    article.appendChild(newRedSquare);
}
