const navLink = document.querySelectorAll(".jumbotron ul li");

const about = document.querySelector(".about").getBoundingClientRect().top;
const socialmedia = document.querySelector(".socialmedia").getBoundingClientRect().top;


navLink.forEach((nav) => {
    nav.addEventListener("click", () => {
        if(nav.className == "about-me")
        {
            window.scrollTo({
                top: about,
                behavior: "smooth"
            });
        }
        else if(nav.className == "social-media")
        {
            window.scrollTo({
                top: socialmedia,
                behavior: "smooth"
            });
        }
        else if(nav.className == "home")
        {
            location.reload();
        }
    });
});