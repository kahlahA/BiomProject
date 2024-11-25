// Default font size for <p> elements
let fontSize = 20; 

// Function to increase font size
function increaseFontSize() {
    if (fontSize < 40) { // Prevent font size from exceeding 40px
        fontSize += 2;
        updateFontSize();
    }
}

// Function to decrease font size
function decreaseFontSize() {
    if (fontSize > 12) { // Prevent font size from becoming too small
        fontSize -= 2; 
        updateFontSize();
    }
}

// Function to reset font size to default
function resetFontSize() {
    fontSize = 20; // Reset to default
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
            el.style.backgroundColor = "white"; // Set background to white
            el.style.color = "black"; // Set text color to black
        });
    } else {
        document.querySelectorAll(".right, .right2, .left3").forEach(el => {
            el.style.backgroundColor = "#494949"; // Default dark mode background for .right
            el.style.color = "white"; // Default dark mode text color for .right
        });
    }
}

// Function to toggle color-blind mode
function toggleColorBlindMode() {
    document.body.classList.toggle("color-blind-mode");

    // Adjust styles for color-blind users
    if (document.body.classList.contains("color-blind-mode")) {
        document.body.style.backgroundColor = "#f4f4f4";  // Lighter background for better contrast
        document.body.style.color = "#333";  // Darker text for better visibility
        
        // Update elements' colors to avoid reliance on just red/green
        document.querySelectorAll('.right, .right2, .left3').forEach((el) => {
            el.style.color = '#222';  // Darker, high contrast color for text
            el.style.backgroundColor = '#f7f7f7';  // Light background for better contrast
        });

        // Modify buttons for better visibility
        document.querySelectorAll('button').forEach((btn) => {
            btn.style.backgroundColor = '#007bff'; // Blue buttons, distinguishable for most types of color blindness
            btn.style.color = '#fff';  // White text for clarity
        });
    } else {
        document.body.style.backgroundColor = ""; // Reset to default
        document.body.style.color = ""; // Reset to default

        // Reset elements' colors
        document.querySelectorAll('.right, .right2, .left3').forEach((el) => {
            el.style.color = "";  // Reset text color
            el.style.backgroundColor = "";  // Reset background color
        });

        // Reset button styles
        document.querySelectorAll('button').forEach((btn) => {
            btn.style.backgroundColor = ""; // Reset button background
            btn.style.color = ""; // Reset button text color
        });
    }
}


// Apply default font size on page load
document.addEventListener("DOMContentLoaded", updateFontSize);
