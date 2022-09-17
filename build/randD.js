let headerClick = document.querySelector(".-h-ll-click");
let list_link = document.querySelector(".list-link");
let ll_dropdown = "-ll-dropdown";

headerClick.addEventListener("click", function () {
    list_link.classList.toggle(ll_dropdown);
});