/* Created by Tivotal */

let ulElem = document.querySelector("ul");
let liElems = document.querySelectorAll("li");
let btns = document.querySelectorAll(".btn i");

let dragActive = false;

ulElem.addEventListener("mousedown", () => {
  dragActive = true;
});

ulElem.addEventListener("mousemove", (e) => {
  if (!dragActive) return;
  ulElem.classList.add("drag");
  ulElem.scrollLeft -= e.movementX;
  showhideBtns(ulElem.scrollLeft);
});

ulElem.addEventListener("mouseup", () => {
  ulElem.classList.remove("drag");
  dragActive = false;
});

ulElem.addEventListener("mouseleave", () => {
  ulElem.classList.remove("drag");
  dragActive = false;
});

function showhideBtns(w) {
  let max = ulElem.scrollWidth - ulElem.clientWidth;
  btns[0].parentElement.style.display = w <= 0 ? "none" : "flex";

  btns[1].parentElement.style.display = max - w <= 1 ? "none" : "flex";
}

btns[1].addEventListener("click", () => {
  ulElem.scrollLeft += 300;
  showhideBtns((ulElem.scrollLeft += 300));
});

btns[0].addEventListener("click", () => {
  ulElem.scrollLeft += -300;
  showhideBtns((ulElem.scrollLeft += -300));
});

liElems.forEach((item) => {
  item.addEventListener("click", () => {
    ulElem.querySelector(".active").classList.remove("active");

    item.classList.add("active");
  });
});
