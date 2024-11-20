let grassland_info = document.getElementById("grassland_info");

function changeFontSize(size) {
    // Set value of the parameter as fontSize
    grassland_info.style.fontSize = size;
}

function changeMode() {
    let toolbar = document.getElementById("toolbar");
    let mode  = document.getElementById("mode");
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    toolbar.classList.toggle("toolbar_light");
    mode.classList.toggle("mode_light");
    button1.classList.toggle("button_light");
    button2.classList.toggle("button_light");
    button3.classList.toggle("button_light");
    grassland_info.classList.toggle("grassland_info_light");

    if (mode.value === "Light Mode") {
        mode.value = "Dark Mode";
        mode.innerHTML = "Dark Mode";
    }
    else {
        mode.value = "Light Mode";
        mode.innerHTML = "Light Mode";
    }
}