var loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

const mobilebtn1 = document.querySelector(".button-group-testmo");
const nav_header1 = document.querySelector(".testmo");
const show_hide1 = () => {
    nav_header1.classList.toggle("active");
  };
  mobilebtn1.addEventListener("click", () => show_hide1());
  
  const remove1 = () => {
    nav_header1.classList.remove("active");
  };
  
  
  
const mobilebtn = document.querySelector(".mob-nav");
const nav_header = document.querySelector(".main-header");
const show_hide = () => {
    nav_header.classList.toggle("active");
  };
  mobilebtn.addEventListener("click", () => show_hide());
  
  const remove = () => {
    nav_header.classList.remove("active");
  };
