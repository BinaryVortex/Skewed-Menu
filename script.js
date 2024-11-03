const progress = document.getElementById("progress");
const value = document.getElementById("value");
const rangeSlider = document.getElementById("slider");

var percentValue = rangeSlider.value;
value.innerText = percentValue;
progress.style.strokeDashoffset = 440 - (440 * percentValue) / 100;

rangeSlider.addEventListener("input", () => {
    percentValue = rangeSlider.value;
    value.innerText = percentValue;
    progress.style.strokeDashoffset = 440 - (440 * percentValue) / 100;

});