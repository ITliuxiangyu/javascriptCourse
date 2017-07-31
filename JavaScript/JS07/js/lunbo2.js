var contentDiv = document.getElementById('content');

contentDiv.innerHTML += contentDiv.innerHTML;

var x = 0;

function move() {
    x -= 2;
    contentDiv.style.left = x + 'px';
    
    if (x == -1800) {
        x = 0;
        contentDiv.style.left = 0;
    }
}
    

function animation() {
    move();
    requestAnimationFrame(animation);
}
requestAnimationFrame(animation);