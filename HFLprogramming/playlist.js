
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick();
    loadPlaylist();
};
function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;  
    console.log(songName);
    var li = document.createElement("li");
    li.innerHTML = songName;
    console.log(li.innerHTML);
    var ul = document.getElementById("playlist");
    
    ul.appendChild("li");
    save(songName);
};

window.onload = init;