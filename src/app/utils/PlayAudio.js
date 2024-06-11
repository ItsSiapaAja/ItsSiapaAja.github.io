const listTrack = document.querySelectorAll(".track .album .tracks ul li");
const path = "../../music/tracks/";
const format = [".mp3", ".wav"];

(function () {
    var playAudio = document.querySelector(".track #audio");
    listTrack.forEach((li) => {
        li.addEventListener("click", () => {
            playAudio.src = path + li.innerHTML.toLowerCase() + format[1];
            playAudio.id = "audio";
            playAudio.play();
            // console.log(path + li.innerHTML.toLowerCase() + format[1]);
        });
    });
})();