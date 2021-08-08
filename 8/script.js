const translate = document.querySelectorAll(".translate")

window.addEventListener("scroll", function () {
    let scrollPosY = window.pageYOffset
    
    translate.forEach(function (img) {
        img.style.transform = `translateY(${scrollPosY * img.dataset.speed}px)`
    })
})