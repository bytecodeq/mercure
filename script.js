document.addEventListener("DOMContentLoaded", function () {
    const playPauseButton = document.getElementById("play-pause");
    let isPlaying = false;

    playPauseButton.addEventListener("click", function () {
        isPlaying = !isPlaying;
        playPauseButton.textContent = isPlaying ? "⏸" : "▶";
    });
});
