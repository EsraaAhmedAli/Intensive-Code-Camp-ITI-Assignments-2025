var canvas= document.getElementById("c1");
var ctx =canvas.getContext("2d");
let flag = 1;
var count = 0;
var timeout = setInterval(function (){
    ctx.clearRect(0,0, canvas.width , canvas.height);
    ctx.beginPath();

    if(count >= 10){
        ctx.arc(150,150,100, 0,Math.PI*2, true );
        clearInterval(timeout);
        ctx.fillStyle = "yellow"; 
        ctx.fill();
        ctx.stroke();
        return;
       
       
    }
  
    if(flag == 1 ){
        ctx.arc(150,150,100, 0,Math.PI, true );
        flag = 0;
        count++;
    }else{
        ctx.arc(150,150,100, 0,Math.PI, false );
        flag= 1;
        count++;
    }
    ctx.fillStyle = "yellow"; 
    ctx.fill();
    ctx.stroke();
},3000)



