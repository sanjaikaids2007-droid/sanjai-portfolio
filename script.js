// Smooth welcome message
window.onload = function () {
    console.log("Welcome to Sanjai's Portfolio!");
};

// Download Resume Button
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", () => {
        alert("Resume will be added soon!");
    });
}
