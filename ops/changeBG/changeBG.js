
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let timer;
const startMe = function () {
    timer = setInterval(changeColor, 500);
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    };

}
function stopMe() {
    clearInterval(timer);
}
document.querySelector('#start').addEventListener('click', startMe)
document.querySelector('#stop').addEventListener('click', stopMe)


