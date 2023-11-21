//! Phần chuyển đổi Background-----------------------------------------------------------------------------
var backgrounds = [
    'Img/Background/BackG1.jpg',
    'Img/Background/BackG2.gif',
    'Img/Background/BackG3.jpg',
    'Img/Background/BackG4.jpg',
    'Img/Background/BackG5.jpg',
];

var currentBackgroundIndex = 0;
// Lấy trạng thái background từ Local Storage khi trang web được load lại
var savedBackgroundIndex = localStorage.getItem('backgroundIndex');
if (savedBackgroundIndex !== null) {
    currentBackgroundIndex = parseInt(savedBackgroundIndex, 10);
}

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
    //Lưu trạng thái background vào Local Storage
    localStorage.setItem('backgroundIndex', currentBackgroundIndex.toString());
}

document.getElementById('changeBackground').addEventListener('click', changeBackground);
function setCoverBackgroundSize() {
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
}

window.onload = function() {
    setCoverBackgroundSize();
    // Thiết lập background khi trang web được load lại
    document.body.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
};


//! Phần chuyển đổi âm thanh-------------------------------------------------------------------------------
var audioSources = [
    'sound/Au1.mp3', 
    'sound/Au2.mp3', 
    'sound/Au2.mp3', 
    'sound/Au2.mp3', 
    'sound/Au2.mp3', 
];
var currentAudioIndex = 0;
var audio = new Audio(audioSources[currentAudioIndex]);

// Nút adjustSound được click
document.getElementById('adjustSound').addEventListener('click', function () {
    currentAudioIndex = (currentAudioIndex + 1) % audioSources.length;
    audio.src = audioSources[currentAudioIndex];
    audio.play();
});


