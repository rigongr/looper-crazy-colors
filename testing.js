let enter = document.getElementById('enter');
let input = document.getElementById('userInput');
let box = document.getElementsByClassName("box");

let colors = ['blue', 'green', 'red', 'aqua', 'yellow', 'black', 'lightgreen', 'aquamarine', 'coral', 'crimson', 'cadetblue','#fbe8ec', '#eef0ee', '#5e5e5e', '#f2f2f2', '#e75f80', '#9ca899', '#dee2dd', '#acb6aa', '#f1a3b6', '#eb5b7d', '#f08194', '#6e555a', '#555a6e', '#f8d1da', '#cdd3cc', '#f5bac8', '#1bdeaf', '#de4d1b', '#de1bac', '#de1b4a', '#5a6e55', '#c0ffee', '#c0ffbf', '#ffc6c3', '#c9ffbd', '#ffcece', '#ffc7b3', '#006400', '#dcd0ff', '#ffc2c2', '#cd0000', '#0067cd', '#cd6600', '#0db6a9', '#ffe1e1', '#548b54', '#116466', '#ff9500', '#ffef00', '#996666', '#ccccff', '#ffffcc'];

let degrees = 0;

enter.addEventListener('click', function(event){
    event.preventDefault();
    changeColor();
});

input.addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        changeColor()
    }
});

setInterval(function(){ changeColor(); }, 200);

function changeColor() {
    $(box).each(function(element){
        console.log(this.style.backgroundColor);
        this.style.backgroundColor = colors[Math.floor(Math.random() * Math.floor(colors.length))];
        this.style.transform = "rotate(" + Math.floor(Math.random() * Math.floor(200)) + "deg)"
    });
}
