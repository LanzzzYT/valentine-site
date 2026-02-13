function openLetter() {
    document.getElementById("paper").style.display = "block";

    const cdBox = document.getElementById("cdContainer");
    const cd = document.getElementById("cd");
    const music = document.getElementById("bgMusic");

    cdBox.classList.add("show");
    cd.classList.add("playing");
    music.play();
}

function showSecret(message) {
    const note = document.getElementById("secretNote");
    note.innerHTML = message;
    note.classList.add("show");

    setTimeout(() => {
        note.classList.remove("show");
    }, 5000);
}

