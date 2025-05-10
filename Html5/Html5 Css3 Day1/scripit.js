var video = document.getElementsByTagName("video")[0];
video.addEventListener("timeupdate", function (event) {
    console.log("Current time:", (video.currentTime) / 60);
    console.log(" duration:", video.duration);
    var current = video.currentTime;
    var duration = video.duration;
    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60).toString().padStart(2, '0');
    const formattedDuration = duration.toFixed(2);
    console.log("formattedDuration", `${minutes}`, `${formattedDuration}`, `${seconds}`);
    seekBar.value = video.currentTime;

});

document.getElementById("play").onclick = function () {
    video.play()
}
document.getElementById("Stop").onclick = function () {
    video.pause()
}
document.getElementById("Stop").onclick = function () {
    video.pause()
}
document.getElementById("mute").onclick = function () {
    video.muted = !video.muted;
    document.getElementById("mute").innerText = video.muted ? "Un Muted" : "Muted";
}
document.getElementById("10secadd").onclick = function () {
    video.currentTime += 10;

}
document.getElementById("5secadd").onclick = function () {
    video.currentTime += 5;
}
document.getElementById("10secsub").onclick = function () {
    video.currentTime -= 10;
}
document.getElementById("5secsub").onclick = function () {
    video.currentTime -= 5;
}


video.addEventListener("loadedmetadata", function () {
    seekBar.max = video.duration;
});


seekBar.addEventListener("input", function () {
    video.currentTime = seekBar.value;
});

var volumeBar = document.getElementById("volumeBar");
volumeBar.addEventListener("input", function () {
    video.volume = volumeBar.value;
});

var timeDisplay = document.getElementById("timeDisplay");

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}


video.addEventListener("loadedmetadata", function () {
    timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
});


video.addEventListener("timeupdate", function () {
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});


var SpeedBar = document.getElementById("SpeedBar");
SpeedBar.addEventListener("input", function () {
    video.playbackRate = SpeedBar.value;

});







