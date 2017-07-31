// 先了解对象
/*
var o = {
    name: "小晶",
    age: 38,
    gender: "妇女",
    info: function () {
        console.log(this.name, this.age, this.gender);
    }
};
// 读取值
console.log(o.name, o.age, o.gender);
// 设置属性
o.carType = "BMW";
console.log(o);

o.info();
*/

// 获取元素
var contentDiv = document.getElementById('content');

// 获取所有按钮
var btns = document.getElementsByTagName('button');


// btns[0].num = 0;
// btns[1].num = 1;
// btns[2].num = 2;
// btns[3].num = 3;

for (var i = 0; i < btns.length; i++) {
    // 给每个button添加一个属性num, 用来标记我们点击的是第几个按钮
    btns[i].num = i;

    // 给每个按钮添加点击事件
    btns[i].onclick = function () {

        // this代表点击的按钮本身
        contentDiv.style.left = -300 * this.num + 'px';
        
    };
}





















