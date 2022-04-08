
console.log(
    document.getElementById("body").style.height
)

let keydownCount = 0
const colors = ["blue", "red", "yellow", "tomato", "green" ]


// Changes the color of the background
function changeBgColor(color) {
    document.getElementById("body").style.backgroundColor = color
    // document.getElementById("h1").innerText = String(color).toUpperCase()
}

// Toggles between colors
function toggleColors () {

    if (keydownCount <= colors.length - 1) { 
        changeBgColor(colors[keydownCount])
        keydownCount ++
    }
    
    else if (keydownCount > colors.length - 1 ) {
        keydownCount = 0
    }
}

document.getElementById("body")
,addEventListener("keydown", (data) => {
    toggleColors();
    console.log(data.code)
} )