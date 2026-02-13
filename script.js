function openLetter() {
    const paper = document.getElementById("paper");
    const music = document.getElementById("bgMusic");

    paper.style.display = "block";

    music.play().catch(() => {
        console.log("Music autoplay blocked.");
    });
}
