document.querySelector('.js--weather-btn').addEventListener('click', function () {
    const promise = fetch('http://api.openweathermap.org/data/2.5/weather?q=ODESA&units=metric&APPID=5d066958a60d315387d9492393935c19', {
        method: 'GET'
    })
    promise
        .then(resp => resp.json())
        .then(data => {
            document.querySelector('.js--name').innerHTML = `Локація: ${JSON.stringify(data.name)}`;
            document.querySelector('.js--temp').innerHTML = `Температура: ${JSON.stringify(data.main.temp)}`;
            document.querySelector('.js--pressure').innerHTML = `Тиск: ${JSON.stringify(data.main.pressure)}`;
            document.querySelector('.js--description').innerHTML = `Опис: ${JSON.stringify(data.weather[0].description)}`;
            document.querySelector('.js--humidity').innerHTML = `Вологість: ${JSON.stringify(data.main.humidity)}`;
            document.querySelector('.js--speed').innerHTML = `Швидкість вітру: ${JSON.stringify(data.wind.speed)}`;
            document.querySelector('.js--deg').innerHTML = `Напрям вітру у градусах: ${JSON.stringify(data.wind.deg)}`;
            document.querySelector('.js--icon').setAttribute('src', `http://openweathermap.org/img/w/${JSON.stringify(data.weather[0].icon).replace(/"/g, '')}.png`);
        })
})
