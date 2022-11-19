const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animeOnScroll);
    function animeOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint =
                    window.innerHeight - window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add("_active");
            } else {
                animItem.classList.remove("_active");
            }
        }
    }

    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animeOnScroll();
    }, 300);
}

const audios = document.getElementsByClassName("custom-audio");

for (let element of audios) {
    let audio = element.querySelector("audio");
    let playBtn = element.querySelector("#play");
    let pauseBtn = element.querySelector("#pause");

    playBtn.addEventListener("click", () => {
        let playing = document.querySelector(
            ".custom-audio > .audio-btn.pause:not(.hide)"
        );
        if (playing) {
            playing.classList.add("hide");
            let playBtn = playing.parentElement.querySelector(
                ".custom-audio > .audio-btn.play.hide"
            );
            playBtn.classList.remove("hide");
        }

        pauseBtn.classList.remove("hide");
        playBtn.classList.add("hide");
        audio.play();
    });

    pauseBtn.addEventListener("click", () => {
        pauseBtn.classList.add("hide");
        playBtn.classList.remove("hide");
        audio.pause();
    });
}

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});
