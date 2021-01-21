canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image="racing.jpg";

car1_image="images.jpg";
car1_width=100;
car1_height=90;
car1_x=50;
car1_y=100;

car2_image="heroUpload_1589817853.jpg";
car2_width=100;
car2_height=90;
car2_x=50;
car2_y=300;

function ADD(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadRover;
    car1_imgTag.src=car1_image;
    car2_imgTag=new Image();
        car2_imgTag.onload=uploadRover2;
        car2_imgTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadRover(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
    function uploadRover2(){
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed =='39'){
        right();
        console.log("right");
    }
    
    if(keyPressed =='38'){
        up();
        console.log("up");
    }
    if(keyPressed =='37'){
        left();
        console.log("left");
    }
    if(keyPressed =='82'){
        car2_up();
        console.log("key w")
    }
}