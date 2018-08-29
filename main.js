var obj1={
    src:"in-1.jfif",
    name: "Kim rogers short",
    price: 50
}

var obj2={
    src:"in-2.jfif",
    name: "Kim rogers short",
    price: 100
}

var obj3={
    src:"in-3.jfif",
    name: "Kim rogers sandal",
    price: 150
}

var obj4={
    src:"in-4.jfif",
    name: "Kim rogers sandal",
    price: 150
}


var obj5={
    src:"in-5.jfif",
    name: "Kim rogers sandal",
    price: 150
}


var obj6={
    src:"in-6.jfif",
    name: "Kim rogers sandal",
    price: 150
}

var arrObj=[obj1,obj2,obj3, obj4, obj5, obj6]  ;

var nodeEntry= document.querySelector('.row-container');

arrObj.forEach(function(obj){
   var tempImage= `<div class="container">
   <a href="https://www.belk.com/gift-guide/americana-shop/" title="Click to go to product">
    <img src=`+obj.src+` />
    </a>
    <div>`+obj.name+`<div>
    <div>`+obj.price+`<div>
    </div>`;

    nodeEntry.insertAdjacentHTML('beforeend',tempImage);
});


var right = 0;
var maxMargin;
var skipMargin = 130;

function initialWidth(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function moveLeft(event){
  var container = document.querySelector(".row-container");
  if(right <= -maxMargin){
    //event.preventDefault();
  }
  else{
    right -= skipMargin;
  }
  container.style.marginLeft = right+"px";
}

function moveRight(event){
  var container = document.querySelector(".row-container");
  if(right==0){
    //event.preventDefault();
  }
  else if(right >= maxMargin){
    //event.preventDefault();
  }
  else{
     right += skipMargin;
  }
  container.style.marginLeft = right+"px";
}


document.querySelector('.carousel').addEventListener('load', initialWidth);