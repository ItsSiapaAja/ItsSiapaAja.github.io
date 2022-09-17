console.log("Hello World");

let header = 100;
const aboutMe = document.getElementById("aboutme");
const socialMedia = document.getElementById("socialmedia");
const project = document.getElementById("project");

const linkHome = document.querySelector("nav ul li.home-link");
const linkAboutMe = document.querySelector("nav ul li.aboutme-link");
const linkSocialMedia = document.querySelector("nav ul li.socialmedia-link");
const linkProject = document.querySelector("nav ul li.project-link");

linkHome.addEventListener("click", function (e) {
    let offset = 0;

    window.scrollTo({
        top: offset,
        behavior: "smooth"
    });
});

linkAboutMe.addEventListener("click", function (e) {
    let pos = aboutMe.getBoundingClientRect().top;
    let offset = pos + window.pageYOffset - header;

    window.scrollTo({
       top: offset,
       behavior: "smooth" 
    });
});

linkSocialMedia.addEventListener("click", function (e) {
    let pos = socialMedia.getBoundingClientRect().top;
    let offset = pos + window.pageYOffset - header;

    window.scrollTo({
       top: offset,
       behavior: "smooth" 
    });
});

linkProject.addEventListener("click", function (e) {
    let pos = project.getBoundingClientRect().top;
    let offset = pos + window.pageYOffset - header;

    window.scrollTo({
       top: offset,
       behavior: "smooth" 
    });
});