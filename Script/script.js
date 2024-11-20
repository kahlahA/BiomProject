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
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.fontSize = fontSize + "px"; // Apply new font size
    });
    // Optional: Display current font size
    const fontSizeDisplay = document.getElementById("font-size-display");
    if (fontSizeDisplay) {
        fontSizeDisplay.textContent = `Font Size: ${fontSize}px`;
    }
}

// Apply default font size on page load
document.addEventListener("DOMContentLoaded", () => {
    updateFontSize();
});
