const judul = document.getElementById("judul");

console.log(judul);

judul.style.backgroundColor = "red";

judul.innerHTML = "kennard"

judul.addEventListener("mouseenter", function () {
    judul.style.backgroundColor = 'blue';
});

judul.addEventListener("mouseout", function () {
    judul.style.backgroundColor = 'red';
});

console.log(judul.innerText)
console.log(judul.innerHTML)
console.log(judul.style)
console.log(judul.classList)
console.log(judul.attributes)

const p = document.getElementsByTagName("p");

console.log(p[2]);

const p1 = document.getElementsByClassName("p1");

console.log(p1);

const li2 = document.querySelector("#container #b ul li:nth-child(2)");

li2.style.backgroundColor = "green";

li2.addEventListener("mouseenter", function () {
    li2.style.backgroundColor = 'yellow';
});

li2.addEventListener("mouseout", function () {
    li2.style.backgroundColor = 'green';
});

console.log(li2)

const li = document.querySelectorAll("#container #b ul li");

console.log(li)

li.forEach(element => {
    element.style.color = 'blue';
});

const p4 = document.querySelector("#container #b p");

p4.style.backgroundColor = "blue";

console.log(p4)