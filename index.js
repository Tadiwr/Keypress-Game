let keydownCount = 0
const colors = ["blue", "red", "yellow", "tomato", "green" ]

// Changes the color of the background
function changeBgColor(color) {
    document.getElementById("body").style.backgroundColor = color
    document.getElementById("h1").innerText = color
}

// Deides whether to have a ornage or blue backgound
function x () {
    if ((keydownCount % 2) == 0) {
        changeBgColor("orange")
        keydownCount = keydownCount + 1;
    } else if ((keydownCount % 2) != 0) {
        changeBgColor("blue")
        keydownCount = keydownCount + 1;
    }
}

document.getElementById("body")
,addEventListener("keydown", () => {
    x()
} )