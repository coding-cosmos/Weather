async function getWeather(location) {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=90da9679a7cc46dea76204520241201&q=${location}`,
        { mode: "cors" }
    );
    const weatherData = await res.json();
    return weatherData
}

async function printWeatherData(location){
  const d = await getWeather(location);
  console.log(d.current.temp_c);
}

async function getTemp(location) {
    const data = await getWeather(location);
    return data.current.temp_c;
}

function getCity() {
    const locationInput = document.querySelector('input#location');
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        console.log(locationInput.value);
        e.preventDefault();
        printWeatherData(locationInput.value);
        renderTemp(locationInput.value);
        return false;
    })
}

async function renderTemp(location) {
    const temp = await getTemp(location);
    const tempEle = document.querySelector('span.temp');
    tempEle.innerText = `${temp}`;
}

getCity();
