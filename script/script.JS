//! Phần chuyển đổi Background-----------------------------------------------------------------------------
var backgrounds = [
    'tai_nguyen/Img/Background/BackGO1.gif',
    'tai_nguyen/Img/Background/BackG1.jpg',
    'tai_nguyen/Img/Background/BackG3.jpg',
    'tai_nguyen/Img/Background/BackG4.jpg',
    'tai_nguyen/Img/Background/BackG5.jpg',
    'tai_nguyen/Img/Background/BackG6.jpg',
    'tai_nguyen/Img/Background/BackG7.jpg',
    'tai_nguyen/Img/Background/BackG8.jpg',
];

var currentBackgroundIndex = 0;
var savedBackgroundIndex = localStorage.getItem('backgroundIndex');
if (savedBackgroundIndex !== null) {
    currentBackgroundIndex = parseInt(savedBackgroundIndex, 10);
}

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
    localStorage.setItem('backgroundIndex', currentBackgroundIndex.toString());
}

document.getElementById('changeBackground').addEventListener('click', changeBackground);
function setCoverBackgroundSize() {
    document.body.style.backgroundSize = "100% 50em";
    document.body.style.backgroundRepeat = "no-repeat";
}

window.onload = function() {
    setCoverBackgroundSize();
    document.body.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
};


//! Phần chuyển đổi âm thanh-------------------------------------------------------------------------------
var audioSources = [
    'tai_nguyen/sound/Au2.mp3', 
    'tai_nguyen/sound/Au3.mp3', 
    'tai_nguyen/sound/Au4.mp3', 
    'tai_nguyen/sound/Au1.mp3', 
    'tai_nguyen/sound/Au5.mp3', 
    'tai_nguyen/sound/Error.mp3',
    'tai_nguyen/sound/Error.mp3',
    'tai_nguyen/sound/Error.mp3',
    'tai_nguyen/sound/Error.mp3',
    'tai_nguyen/sound/Shutdown.mp3'
];
var currentAudioIndex = 0;
var audio = new Audio(audioSources[currentAudioIndex]);
document.getElementById('adjustSound').addEventListener('click', function () {
    currentAudioIndex = (currentAudioIndex + 1) % audioSources.length;
    audio.src = audioSources[currentAudioIndex];
    audio.play();
});


