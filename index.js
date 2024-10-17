const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const Rbtn = document.querySelector(".Rbtn");
const container = document.querySelector(".container");

// Event listener for the first button (Light/Dark toggle)
btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (btn.innerText === "Light") {
        container.style.backgroundColor = "black";
        btn.innerText = "Dark";
    } else {
        container.style.backgroundColor = "white";
        btn.innerText = "Light";
    }
});

// Event listener for the second button (Red/Blue toggle)
btn1.addEventListener("click", (e) => {
    e.preventDefault();

    if (btn1.innerText === "Red") {
        container.style.backgroundColor = "blue";
        btn1.innerText = "Blue";
    } else {
        container.style.backgroundColor = "red";
        btn1.innerText = "Red";
    }
});

// Event listener for the third button (Orange/Green toggle)
btn2.addEventListener("click", (e) => {
    e.preventDefault();

    if (btn2.innerText === "Orange") {
        container.style.backgroundColor = "green";
        btn2.innerText = "Green";
    } else {
        container.style.backgroundColor = "orange";
        btn2.innerText = "Orange";
    }
});

// Event listener for the random color button
Rbtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Generate a random color
    const randomColor = getRandomColor();
    container.style.backgroundColor = randomColor;
});

// Function to generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
