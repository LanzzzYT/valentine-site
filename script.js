function playMusic() {
    const music = document.getElementById("bgMusic");
    const cd = document.getElementById("cd");

    music.play().catch(() => {
        console.log("Music autoplay blocked until user interacts.");
    });

    cd.classList.add("playing"); // start rotating
}

function openLetter() {
    const paper = document.getElementById("paper");
    paper.style.display = "block";
}
