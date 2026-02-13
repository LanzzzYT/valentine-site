let holdTimer;

function startHold() {
    const btn = document.querySelector(".hold-btn");

    holdTimer = setTimeout(() => {
        btn.classList.add("flip");

        const msg = document.getElementById("holdMessage");
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
            btn.classList.remove("flip");
        }, 5000);

    }, 800); // hold duration
}

function endHold() {
    clearTimeout(holdTimer);
}

function openLetter() {
    document.getElementById("paper").style.display = "block";

    const cdBox = document.getElementById("cdContainer");
    const cd = document.getElementById("cd");
    const music = document.getElementById("bgMusic");

    cdBox.classList.add("show");
    cd.classList.add("playing");
    music.play();
}
