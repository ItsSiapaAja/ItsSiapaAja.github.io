const navLink = document.querySelector(".jumbotron .listen .button");
const music = document.querySelector(".track").getBoundingClientRect().top;

navLink.addEventListener("click", () => {
    window.scrollTo({
        top: music,
        left: 0,
        behavior: "smooth"
    });
});