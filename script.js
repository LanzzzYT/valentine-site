let holdTimer;

function openLetter() {
    document.getElementById("paper").style.display = "block";

    const cdBox = document.getElementById("cdContainer");
    const cd = document.getElementById("cd");
    const music = document.getElementById("bgMusic");

    cdBox.classList.add("show");
    cd.classList.add("playing");

    music.play().catch(() => {
        alert("Tap ulit baby 😌");
    });
}

function startHold() {
    holdTimer = setTimeout(() => {
        const msg = document.getElementById("holdMessage");
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 5000);

    }, 800);
}

function endHold() {
    clearTimeout(holdTimer);
}

/* Secret Popup */
function showSecret(text) {
    const popup = document.getElementById("secretPopup");
    popup.innerText = text;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}
