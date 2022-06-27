const API_KEY = "069a4daffeaf45d393360fd47f22e38f";
//https://openweathermap.org/ 무료 사이트에서 current weather data api 무료 이용

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name + " /";
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`
    });
}

function onGeoError(){
    alert("We can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//argument 첫번째 : 성공시 띄우는 function // 두번째 : 실패시 띄우는 function

//처음에 한번 위치정보 동의하면 새로고침했을때 다시 안 물어보게 하고 싶음