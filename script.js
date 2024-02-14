const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C');
const F = document.querySelector('.F');

const swap = () => {
    if (C.textContent === '°C') {
        C.textContent = '°F';
        F.textContent = '°C';
        converter.placeholder = "Temperature in °F";
    } else {
        F.textContent = '°F';
        C.textContent = '°C';
        converter.placeholder = "Temperature in °C";
    }
};

const reset = () => {
    converter.value = '';
    result.textContent = '';
};

const convert = () => {
    const inputValue = converter.value.trim();

    if (/^(-?\d+(\.\d+)?)$/.test(inputValue)) {
        result.style.color = "black";

        const temperature = parseFloat(inputValue);

        if (C.textContent === '°C') {
            const value = (temperature * 1.8) + 32;
            result.textContent = `${temperature}°C is equal to ${value.toFixed(2)}°F`;
        } else {
            const value = (temperature - 32) / 1.8;
            result.textContent = `${temperature}°F is equal to ${value.toFixed(2)}°C`;
        }
    } else if (inputValue === '') {
        result.style.color = "#993300";
        result.textContent = 'Enter some number';
    } else {
        result.style.color = "#993300";
        result.textContent = 'Enter only numbers!!!';
    }
};

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);
