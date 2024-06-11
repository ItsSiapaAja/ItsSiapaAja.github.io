const listTrack = document.querySelectorAll(".track .album .tracks ul li");
const path = "../../music/tracks/";
const format = [".mp3", ".wav"];
const playing = document.querySelector(".track p span");

(function () {
    var playAudio = document.querySelector(".track #audio");
    listTrack.forEach((li) => {
        li.addEventListener("click", () => {
            playAudio.src = path + li.innerHTML.toLowerCase() + format[1];
            playAudio.id = "audio";
            playAudio.play();
            playing.innerHTML = li.innerHTML;
            // console.log(path + li.innerHTML.toLowerCase() + format[1]);
        });
    });
})();