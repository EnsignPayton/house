let fullImg = null;

const imgs = [...document.querySelectorAll(".gallery img")];
for (let img of imgs) {
    img.addEventListener("click", () => {
        img.classList.toggle("full");
        const isFull = img.classList.contains("full");
        fullImg = isFull ? img : null;
    });
}


document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Escape":
            if (fullImg) {
                fullImg.classList.remove("full");
                fullImg = null;
            }
            break;
        case "ArrowLeft":
            if (fullImg) {
                const iFull = imgs.indexOf(fullImg);
                const iPrev = iFull === 0 ? (imgs.length - 1) : (iFull - 1);
                fullImg.classList.remove("full");
                fullImg = imgs[iPrev];
                fullImg.classList.add("full");
            }
            break;
        case "ArrowRight":
            if (fullImg) {
                const iFull = imgs.indexOf(fullImg);
                const iNext = (iFull + 1) % imgs.length;
                fullImg.classList.remove("full");
                fullImg = imgs[iNext];
                fullImg.classList.add("full");
            }
            break;
    }
});