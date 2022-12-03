const smLink = document.querySelectorAll(".socialmedia #show");

smLink.forEach((sm) => {
    sm.addEventListener("click", () => {
        if(sm.className == "scm dc")
        {
            navigator.clipboard.writeText("paran#4130");
        }
        else if(sm.className == "scm gh")
        {
            location.href = "https://github.com/ItsSiapaAja";
        }
        else if(sm.className == "scm yt")
        {
            location.href = "https://www.youtube.com/channel/UCC01wjaHIuqkfmYMnz70baw";
        }
    });
});