let desert_info = document.getElementById("desert_info");
let tundra_info = document.getElementById("tundra_info");
let forest_info = document.getElementById("forest_info");
let grassland_info = document.getElementById("grassland_info");
let ocean_info = document.getElementById("ocean_info");
let jungle_info = document.getElementById("jungle_info");

let tundra = document.getElementById("tundra");
let forest = document.getElementById("forest");
let grassland = document.getElementById("grassland");
let ocean = document.getElementById("ocean");
let jungle = document.getElementById("jungle");

function changeFontSize(size, space) {
    desert_info.style.fontSize = size;
    tundra_info.style.fontSize = size;
    forest_info.style.fontSize = size;
    grassland_info.style.fontSize = size;
    ocean_info.style.fontSize = size;
    jungle_info.style.fontSize = size;

    tundra.style.top = parseInt(space, 10) + 200 + '%';
    forest.style.top = (parseInt(space, 10) * 2) + 300 + '%';
    grassland.style.top = (parseInt(space, 10) * 3) + 400 + '%';
    ocean.style.top = (parseInt(space, 10) * 4) + 500 + '%';
    jungle.style.top = (parseInt(space, 10) * 5) + 600 + '%';
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
    desert_info.classList.toggle("desert_info_light");
    tundra_info.classList.toggle("tundra_info_light");
    forest_info.classList.toggle("forest_info_light");
    grassland_info.classList.toggle("grassland_info_light");
    ocean_info.classList.toggle("ocean_info_light");
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