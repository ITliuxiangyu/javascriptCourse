var contentDiv = document.getElementById('content');
var x = 0, handle;

function scroll() {

    x -= 10;

    contentDiv.style.left = x + 'px';

    // 如果走了一张图片宽度的距离, 停顿1s再继续走
    if (x % 300 == 0) {
        cancelAnimationFrame(handle);

        // 延迟1s执行动画
        waigeTimeout(function () {
            handle = requestAnimationFrame(animation);
        }, 2);
    }

    if (x == -1800) {
        contentDiv.style.left = 0;
        x = 0;
    }
    
}

function animation() {
    handle = requestAnimationFrame(animation);
    scroll();
}

// requestAnimationFrame(animation);

waigeTimeout(animation, 2);

// 自定义延迟定时器
function waigeTimeout(func, t) {
    var i = 0, timer;
    function test() {
        timer = requestAnimationFrame(test);
        i++;
        console.log(i);
        if (i == t * 60) {
            func();
            cancelAnimationFrame(timer);
        }
    }
    timer = requestAnimationFrame(test);

}

// waigeTimeout(function () {
//     console.log(666);
// }, 1);

// waigeTimeout(function () {
//     console.log("歪哥666");
// }, 2);

// setInterval(function () {
//     console.log("666");
// }, 2000);
// console.log("~~~~~~~~~~~~~~~~");