// Default font size for <p> elements
let fontSize = 20; 

// Function to increase font size
function increaseFontSize() {
    if (fontSize < 40) { 
        fontSize += 2;
        updateFontSize();
    }
}

// Function to decrease font size
function decreaseFontSize() {
    if (fontSize > 12) { 
        fontSize -= 2; 
        updateFontSize();
    }
}

// Function to reset font size to default
function resetFontSize() {
    fontSize = 20; 
    updateFontSize();
}

// Function to apply the new font size to all <p> elements
function updateFontSize() {
    document.querySelectorAll("p").forEach(p => {
        p.style.fontSize = fontSize + "px"; // Apply new font size
    });

    // Display current font size if element exists
    const fontSizeDisplay = document.getElementById("font-size-display");
    if (fontSizeDisplay) {
        fontSizeDisplay.textContent = `Font Size: ${fontSize}px`;
    }
}

// Function to toggle light/dark mode
function toggleLightMode() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    // Apply light mode style to `.right` elements
    if (document.body.classList.contains("light-mode")) {
        document.querySelectorAll(".right, .right2, .left3").forEach(el => {
            el.style.backgroundColor = "white";
            el.style.color = "black"; 
        });
    } else {
        document.querySelectorAll(".right, .right2, .left3").forEach(el => {
            el.style.backgroundColor = "#494949"; 
            el.style.color = "white";
        });
    }
}

// Function to toggle color-blind mode
function toggleColorBlindMode() {
    document.body.classList.toggle("color-blind-mode");

    // Adjust styles for color-blind users
    if (document.body.classList.contains("color-blind-mode")) {
        document.body.style.backgroundColor = "#f4f4f4";  
        document.body.style.color = "#333";  
        
        // Update elements' colors to avoid reliance on just red/green
        document.querySelectorAll('.right, .right2, .left3').forEach((el) => {
            el.style.color = '#222';  
            el.style.backgroundColor = '#f7f7f7';  
        });

        // Modify buttons for better visibility
        document.querySelectorAll('button').forEach((btn) => {
            btn.style.backgroundColor = '#007bff'; 
            btn.style.color = '#fff';  
        });

        // Modify navigation links for better visibility
        document.querySelectorAll('#navbar .navOptions').forEach((nav) => {
            nav.style.backgroundColor = '#f7f7f7'; 
            nav.style.color = '#222'; 
        });
    } else {
        document.body.style.backgroundColor = ""; 
        document.body.style.color = ""; 

        // Reset elements' colors
        document.querySelectorAll('.right, .right2, .left3').forEach((el) => {
            el.style.color = "";  
            el.style.backgroundColor = "";  
        });

        // Reset button styles
        document.querySelectorAll('button').forEach((btn) => {
            btn.style.backgroundColor = ""; 
            btn.style.color = ""; 
        });

        // Reset navigation link styles
        document.querySelectorAll('#navbar .navOptions').forEach((nav) => {
            nav.style.backgroundColor = ""; 
            nav.style.color = ""; 
        });
    }
}

// Apply default font size on page load
document.addEventListener("DOMContentLoaded", updateFontSize);
