const quotes = [
    {
        quote: "Be the change that you wish to see in the world.",
        author: "- Mahatma Gandhi -",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "- Mahatma Gandhi -",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "- Oprah Winfrey -",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney -",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "- Margaret Mead -",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "- Ralph Waldo Emerson -",
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "- Dr. Seuss -",
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "- Tony Robbins -",
    },
    {
        quote: "Live in the sunshine, swim the sea, drink the wild air.",
        author: "- Ralph Waldo Emerson -",
    },
    {
        quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author: "- Marilyn Monroe -"
    }
]
//총 10개 array로 저장 quotes[0] ~ quotes[9]로 데이터 쓸수있음

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math
//Math.random() 랜덤숫자 0.xxxxxxxx 나옴
//Math.rando,()*10 x.xxxxxxx 1.xxx - 9.xxxxxx 
//Math.round(1.1) 소숫점 이하 빼고 1만 반올림
//Math.ceil(1.3) 올림 2
//Math.floor(1.9) 버림 1

//Math.floor(Math.random() * 10) 0-9까지 정수출력