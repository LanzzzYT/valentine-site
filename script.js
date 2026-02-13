function openLetter() {
    const letter = document.querySelector(".letter");
    const music = document.getElementById("bgMusic");

    letter.style.display = "block";

    music.play().catch(() => {
        console.log("Autoplay blocked until user interacts.");
    });
}
