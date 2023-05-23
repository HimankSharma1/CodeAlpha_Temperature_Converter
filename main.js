const bdy = document.querySelector("body")
let celsius = document.getElementById("celsius");
let scale = document.getElementById("slider")
let fahrenheit = document.getElementById("fahrenheit");
let fahrenheit_lab = document.getElementsByClassName("fer");
let cel_lab = document.getElementsByClassName("cel");
let output;
function celToFar() {
    output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    scale.value = parseFloat(celsius.value);
    for (i = 0; i < fahrenheit_lab.length; i++) {
        fahrenheit_lab[i].innerHTML = parseFloat(fahrenheit.value);
    }
    for (let i = 0; i < cel_lab.length; i++) {
        cel_lab[i].innerHTML = parseFloat(celsius.value);
    }
    update_gradient();
}
function farToCel() {
    output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    scale.value = parseFloat(output.toFixed(2));
    for (i = 0; i < fahrenheit_lab.length; i++) {
        fahrenheit_lab[i].innerHTML = parseFloat(fahrenheit.value);
    }
    for (let i = 0; i < cel_lab.length; i++) {
        cel_lab[i].innerHTML = parseFloat(celsius.value);
    }
    update_gradient();
}
function Scale_read() {
    output = (parseFloat(scale.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    celsius.value = parseFloat(scale.value);
    for (i = 0; i < fahrenheit_lab.length; i++) {
        fahrenheit_lab[i].innerHTML = parseFloat(fahrenheit.value);
    }
    for (let i = 0; i < cel_lab.length; i++) {
        cel_lab[i].innerHTML = parseFloat(celsius.value);
    }
    update_gradient();
}
function update_gradient() {
    let percentage = (output + 40) / 150 * 100;
    // Calculate the color shades based on the percentage
    let blueShade = Math.round(255 * (1 - percentage / 100));
    let redShade = Math.round(255 * (percentage / 100));
    // Update the gradient background with the color shades
    bdy.style.background = `linear-gradient(to bottom, rgba(0, 0, ${blueShade}, 1.0), rgba(${redShade}, 0, 0, 1.0))`;
}