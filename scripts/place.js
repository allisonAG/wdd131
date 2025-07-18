const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();

lastModified.innerHTML = `Last modified: ${document.lastModified}`;

//Windchill

const calculateWindChill = function (temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return chill.toFixed(1);
    }
    else {

        return "N/A";
    }
}

const windChill = document.querySelector("#windchill");
const temp = 27;
const wind = 11;

const result = calculateWindChill(temp, wind);
windChill.innerHTML = result === "N/A" ? result : `${result} °C`;