function imgSing(anything) {
    document.querySelector(".starbucks").src = anything
}

const imgs = document.querySelectorAll(".imgBolder")
imgs.forEach((item) => {
    item.onclick = function() {
        imgSing(`img/img${item.src.at(-5)}.png`)
    }
})