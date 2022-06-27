const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 바로 현재 시각 표시됨
setInterval(getClock, 1000); //1초뒤에 출력되며 1초마다 갱신

// sayHello();
//그냥 한 번 곧바로 실행하고 끝

// setInterval(sayHello, 1000);
//1000 = 1s마다 sayHello 실행해줌 영원히

// setTimeout(sayHello, 5000);
//5초 뒤에 딱 한 번만 sayHello 실행되고 끝

// "1".padStart(2, "0")
// 가지고 있는 string을 2자리수로 만들고 부족한 시작부분에는 "0"으로 채워서 결국 "01"으로 출력해주는 함수