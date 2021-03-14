var canvas= new fabric.Canvas("canvas1");
player_x=30;
player_y-30;
block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x       });
            canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x       
        });
            canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=="80"){
    console.log("Press Shift & P Together");
    block_image_width=block_image_width+5;
    block_image_height=block_image_height+5;
    document.getElementById("blockwidth").innerHTML=block_image_width;
    document.getElementById("blockheight").innerHTML=block_image_height;
}

if(e.shiftKey==true && keyPressed=="77"){
    console.log("Press Shift & M Together");
    block_image_width=block_image_width-5;
    block_image_height=block_image_height-5;
    document.getElementById("blockwidth").innerHTML=block_image_width;
    document.getElementById("blockheight").innerHTML=block_image_height;
}

if(keyPressed=="38"){
up();
console.log("Up");    
}

if(keyPressed=="39"){
     right();
    console.log("Right");    
    }

    if(keyPressed=="40"){
         down();
        console.log("Down");    
        }

        if(keyPressed=="37"){
            left();
            console.log("Left");    
            }

       if(keyPressed=="87"){
           new_image("wall.jpg");
           console.log("Press W");
       }     

       if(keyPressed=="71"){
        new_image("ground.png");
        console.log("Press G");
    }   

    if(keyPressed=="76"){
        new_image("light_green.png");
        console.log("Press L");
    }   

    if(keyPressed=="84"){
        new_image("trunk.jpg");
        console.log("Press T");
    }   

    if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("Press R");
    }   

    if(keyPressed=="89"){
        new_image("yellow_wall.png");
        console.log("Press Y");
    }   

    if(keyPressed=="68"){
        new_image("dark_green.png");
        console.log("Press D");
    }  

    if(keyPressed=="85"){
        new_image("unique.png");
        console.log("Press U");
    }   

    if(keyPressed=="67"){
        new_image("cloud.jpg");
        console.log("Press C");
    }   
}

function up(){
if(player_y >=0){
    player_y=player_y-block_image_height;
    console.log("block_image_height"+block_image_height);
    console.log("when up pressed,x="+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
}
}

function down(){
    if(player_y <=500){
        player_y=player_y-block_image_height;
        console.log("block_image_height"+block_image_height);
        console.log("when down pressed,x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
    }

    function left(){
        if(player_x >=0){
            player_x=player_x-block_image_height;
            console.log("block_image_height"+block_image_height);
            console.log("when left pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
        }

        function right(){
            if(player_x <=850){
                player_x=player_x-block_image_height;
                console.log("block_image_height"+block_image_height);
                console.log("when right pressed,x="+player_x+"y="+player_y);
                canvas.remove(player_object);
                player_update();
            }
            }