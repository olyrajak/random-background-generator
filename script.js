let one = document.querySelector(".first");
var two = document.querySelector(".second");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let divFlex = document.querySelector(".flex");
h3.style.display = "none";
h4.style.display = "none";
divFlex.style.display = "none";

one.addEventListener("click", handleClick);
two.addEventListener("mousemove", handleMouseMove);

function handleClick() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    one.style.backgroundColor = color;
    h4.style.display = "block";
    h3.style.display = "block";
    divFlex.style.display = "block";
    h4.innerText = color;
}

function handleMouseMove() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    two.style.backgroundColor = color;
    h4.style.display = "block";
    h3.style.display = "block";
    divFlex.style.display = "block";
    h4.innerText = color;
}