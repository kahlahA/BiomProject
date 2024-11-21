let heading = document.getElementById("heading");

let jungle_info = document.getElementById("jungle_info");
let link = document.getElementById("link");

let toolbar = document.getElementById("toolbar");
let mode  = document.getElementById("mode");
let colorblind = document.getElementById("colorblind");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function changeFontSize(size) {
    // Set value of the parameter as fontSize
    jungle_info.style.fontSize = size;
}

function changeMode() {
    toolbar.classList.toggle("toolbar_light");
    mode.classList.toggle("mode_light");
    colorblind.classList.toggle("colorblind_light");
    button1.classList.toggle("button_light");
    button2.classList.toggle("button_light");
    button3.classList.toggle("button_light");

    jungle_info.classList.toggle("jungle_info_light");

    if (mode.value === "Light Mode") {
        mode.value = "Dark Mode";
        mode.innerHTML = "Dark Mode";
    }
    else {
        mode.value = "Light Mode";
        mode.innerHTML = "Light Mode";
    }
}

function toggleColorblind() {
    heading.classList.toggle("heading_colorblind");

    toolbar.classList.toggle("toolbar_colorblind");
    mode.classList.toggle("mode_colorblind");
    colorblind.classList.toggle("colorblind_colorblind");
    button1.classList.toggle("button_colorblind");
    button2.classList.toggle("button_colorblind");
    button3.classList.toggle("button_colorblind");

    jungle_info.classList.toggle("jungle_info_colorblind");
    link.classList.toggle("link_colorblind");

    if (colorblind.value === "Colorblind Mode ON") {
        colorblind.value = "Colorblind Mode OFF";
        colorblind.innerHTML = "Colorblind Mode OFF";
    }
    else {
        colorblind.value = "Colorblind Mode ON";
        colorblind.innerHTML = "Colorblind Mode ON";
    }
}