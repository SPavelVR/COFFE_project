function imgSlider(anything) {
    document.querySelector(".starbucks").src = anything
}

function changeCircleColor(number) {
    const cicrle = document.querySelector('.circle')
    let color = ['#017143', '#eb7495', '#d752b1']
    cicrle.style.background = color[number - 1]
}

const imgs = document.querySelectorAll(".imgBolder")
imgs.forEach((item) => {
    item.onclick = function() {
        imgSlider(`img/img${item.src.at(-5)}.png`)
        changeCircleColor(item.src.at(-5))
    }
})