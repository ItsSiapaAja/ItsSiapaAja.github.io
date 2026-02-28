const navLink = document.querySelectorAll(".jumbotron ul li");

let link = 0;

module.exports = function startN() {
    const about = document.querySelector(".about").getBoundingClientRect().top;
    const socialmedia = document.querySelector(".socialmedia").getBoundingClientRect().top;
    const music = document.querySelector(".music").getBoundingClientRect().top;

    navLink.forEach((nav) => {
        nav.addEventListener("click", () => {
            if(nav.className == "about-me")
            {
                link = about;
            }
            else if(nav.className == "social-media")
            {
                link = socialmedia;
            }
            else if(nav.className == "music-album")
            {
                link = music;
            }

            console.log(link);
            window.scrollTo({
                top: link,
                left: 0,
                behavior: "smooth"
            });
        });
    });
}