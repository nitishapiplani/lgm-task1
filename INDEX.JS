document.querySelector(".btn1").onclick=function(){ 
    document.querySelector(".btn1").innerHTML="Go To Menu";
    document.querySelector(".btn1").style.cursor="pointer";
}

document.querySelector(".btn2").onclick=function(){ 
    document.querySelector(".btn2").innerHTML="SEC 10 GGN ";
    document.querySelector(".btn2").style.cursor="pointer";
}

document.querySelector(".btn3").onclick=function(){ 
    document.querySelector(".btn3").innerHTML="HAVE SOME SHAKES";
    document.querySelector(".btn3").style.cursor="pointer";
}
function enlargeImage(x) {
    x.style.height = "120px";
    x.style.width = "120px";
    x.style.cursor="pointer";
}
function sameImage(x){
    x.style.height="100px";
    x.style.width="100px";
    x.style.background="none";
}