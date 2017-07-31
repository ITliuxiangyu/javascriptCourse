(function () {

    // 获取小球div
    var ballDiv = document.getElementById('ball');

    // 初始位置x坐标, 和 沿着x轴运动方向的布尔值
    var x = y = 0, flagX = flagY = true, handle;


    // 沿着x轴方向运动的函数
    function moveX(s) {
        // 如果布尔值为true, 向右运动, 否则向左运动
        flagX ? x += s : x -= s;

        // 改变小球的位置
        ballDiv.style.left = x + 'px';

        // 当小球运动到最右边, 或者最左边的时候, 改变小球运动的方向
        if (x == 750 || x == 0) flagX = !flagX;
    }

    // 沿着y轴方向运动的函数
    function moveY(s) {
        flagY ? y += s : y -= s;
        ballDiv.style.top = y + 'px';
        if (y == 550 || y == 0) flagY = !flagY;
    }


    handle = requestAnimationFrame(animation);

    function animation() {
        handle = requestAnimationFrame(animation);
        moveX(5);
        moveY(5);
    }






})();