function openLetter() {
    const paper = document.getElementById("paper");
    const cdContainer = document.getElementById("cdContainer");
    const music = document.getElementById("bgMusic");
    const cd = document.getElementById("cd");

    // Show paper
    paper.style.display = "block";

    // Show CD small top-right
    cdContainer.classList.add("show");

    // Play music & rotate CD
    music.play().catch(() => console.log("Music blocked until interaction."));
    cd.classList.add("playing");
}

// Secret love note function
function showSecret() {
    const note = document.getElementById("secretNote");
    note.classList.add("show");

    // Fade out after 5 seconds
    setTimeout(() => {
        note.classList.remove("show");
    }, 5000);
}
