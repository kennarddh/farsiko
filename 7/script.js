const bgColor = document.querySelector(".container")
const redPrevColor = document.querySelector(".container .slider #redPrev")
const greenPrevColor = document.querySelector(".container .slider #greenPrev")
const bluePrevColor = document.querySelector(".container .slider #bluePrev")

const redSlider = document.querySelector(".container .slider #red-slider")
const greenSlider = document.querySelector(".container .slider #green-slider")
const blueSlider = document.querySelector(".container .slider #blue-slider")

const r = redSlider.value
const g = greenSlider.value
const b = blueSlider.value

redPrevColor.style.backgroundColor = 'rgb(' + r + ', 0, 0)'
greenPrevColor.style.backgroundColor = 'rgb(0, ' + g + ', 0)'
bluePrevColor.style.backgroundColor = 'rgb(0, 0, ' + b + ')'

bgColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'

const ubahWarnaButton = document.querySelector(".container .button #button-ubah")

ubahWarnaButton.addEventListener("click", function () {
    bgColor.style.backgroundColor = 'lightblue'
})

const acakWarnaButton = document.querySelector(".container .button #button-acak")

acakWarnaButton.addEventListener("click", function () {
    const b = Math.ceil(Math.random() * 255)
    const r = Math.ceil(Math.random() * 255)
    const g = Math.ceil(Math.random() * 255)

    redPrevColor.style.backgroundColor = 'rgb(' + r + ', 0, 0)'
    greenPrevColor.style.backgroundColor = 'rgb(0, ' + g + ', 0)'
    bluePrevColor.style.backgroundColor = 'rgb(0, 0, ' + b + ')'

    redSlider.value = r
    blueSlider.value = b
    greenSlider.value = g

    bgColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

redSlider.addEventListener('input', function () {
    const r = redSlider.value
    const g = greenSlider.value
    const b = blueSlider.value

    redPrevColor.style.backgroundColor = 'rgb(' + r + ', 0, 0)'

    bgColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

greenSlider.addEventListener('input', function () {
    const r = redSlider.value
    const g = greenSlider.value
    const b = blueSlider.value

    greenPrevColor.style.backgroundColor = 'rgb(0, ' + g + ', 0)'

    bgColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

blueSlider.addEventListener('input', function () {
    const r = redSlider.value
    const g = greenSlider.value
    const b = blueSlider.value

    bluePrevColor.style.backgroundColor = 'rgb(0, 0, ' + b + ')'

    bgColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})