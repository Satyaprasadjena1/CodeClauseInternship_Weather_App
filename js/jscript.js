function getWeather()
{
console.log("kama")
    const city = document.getElementById('cityInput').value
    apikey = 'acbd6710de176aa90815106c4622eb01'
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        dispdata(data)
    })
    //console.log(mydata)
    // document.getElementById('weatherinfo').innerHTML = mydata
}

function dispdata(data)
{
    console.log(data.name)
    document.getElementById('weatherinfo').innerHTML = `city: ${data.name} <br> temp: ${data.main.temp} <br> desc: ${data.weather[0].description} <br> wind speed: ${data.wind.speed} `
    console.log(data.main.temp)
}