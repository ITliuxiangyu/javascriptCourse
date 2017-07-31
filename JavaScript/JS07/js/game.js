(function () {

    // 文字数组
    var textArr = ["红", "黄", "蓝", "绿", "紫"];

    // 颜色数组
    var colorArr = ["red", "yellow", "blue", "green", "purple"];


    // 获取元素
    var liArr = document.getElementsByTagName('li');
    var timerDiv = document.getElementById('time');
    var scoreDiv = document.getElementById('score');
    var questionDiv = document.getElementById('question');

    // 答案
    var answer;

    // 分数
    var count = 0;

    // 随机数函数
    function randomNumer(x, y) {
        return Math.floor(Math.random() * (y - x + 1) + x);
    }
    
    // 打乱数组顺序
    function breakOrder(arr) {
        for (var i = 0; i < arr.length; i++) {
            var num = randomNumer(0, arr.length - 1);
            if (i != num) {
                var temp = arr[i];
                arr[i] = arr[num];
                arr[num] = temp;
            }
        }
    }

    // 改变li
    function changeLi() {
        // 打乱文字数组的顺序
        breakOrder(textArr);

        // 打乱颜色数组的顺序
        breakOrder(colorArr);

        // 重新给每个li元素赋内容和字体颜色
        for (var i = 0; i < liArr.length; i++) {
            liArr[i].innerHTML = textArr[i];
            liArr[i].style.color = colorArr[i];
        }

    }

    // 改变问题
    function changeQuestion() {
        questionDiv.innerHTML = textArr[randomNumer(0, textArr.length - 1)];
        var color = colorArr[randomNumer(0, colorArr.length - 1)];
        questionDiv.style.color = color;

        // 根据颜色确定答案
        switch (color) {
            case "red":
                answer = "红";
                break;
            case "green":
                answer = "绿";
                break;
            case "yellow":
                answer = "黄";
                break;
            case "blue":
                answer = "蓝";
                break;
            case "purple":
                answer = "紫";
                break;
            default:
                break;
        }

    }

    changeQuestion();
    changeLi();

    // 给每个li添加点击事件
    for (var i = 0; i < liArr.length; i++) {

        liArr[i].onclick = function () {

            // 判断点击的li里面的内容是否和答案一致
            if (this.innerHTML == answer) {

                // 得分加1
                count++;

                // 改变得分
                scoreDiv.innerHTML = "得分:" + count;

                changeLi();
                changeQuestion();

            }



        };


    }
    
    
    var t = 30;
    function minusTime() {
        t--;
        timerDiv.innerHTML = "剩余时间:" + t + "s";
        if (t == 0) {
            // 清除定时器
            // clearInterval(timer);
            // t = 30;
            // count = 0;
            // changeLi();
            // changeQuestion();
            alert("Game Over!!!");
            // timer = setInterval(minusTime, 1000);
            // 重新刷新页面
            window.location.reload();
            
        }
    }
    // 每秒执行一次函数
    var timer = setInterval(minusTime, 1000);
    // var n = 0;
    // function countTime() {
    //     n++;
    //     if (n % 60 == 0) {
    //         minusTime();
    //     }
    //     requestAnimationFrame(countTime);
    // }
    // requestAnimationFrame(countTime);


    // var a = 10;
    // b = a;
    // a = 20;
    // console.log(a, b);

    // var a = {name: "歪哥"};
    // // var b = a;
    // var b = {name: "帅哥"};
    // a.name = "帅哥";
    // console.log(a, b);
    // console.log(a === b);


    // var n = 0;
    // function test() {
    //     n++;
    //     console.log(n);
    //     requestAnimationFrame(test);
    // }
    
    // test();
    // requestAnimationFrame(test);

    
















})();