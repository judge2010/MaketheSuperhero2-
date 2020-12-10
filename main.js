var canvas=new fabric.Canvas("myCanvas");
block_imgWidth= 30;
block_imgHeight= 30;
player_x= 10;
player_y= 10;
var player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function (Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

});
 }
 function  new_img(get_Img){
    fabric.Image.fromURL(get_Img,function (Img){
        block_imgObject=Img;
        block_imgObject.scaleToWidth(block_imgWidth);
        block_imgObject.scaleToHeight(block_imgHeight);
        block_imgObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imgObject);
        
    });
     }
     window.addEventListener("keydown",my_keyDown);
     function my_keyDown(e){
         keyPressed=e.keyCode;
         console.log(keyPressed);
     if (keyPressed =="76"){
         new_img("ironman_legs.png");
         console.log("L");
     }
     if (keyPressed =="72"){
        new_img("captin_america_left_hand.png");
        console.log("H");
    }
    if (keyPressed =="82"){
        new_img("hulk_right_hand.png");
        console.log("R");
    }
    if (keyPressed =="66"){
        new_img("spiderman_body.png");
        console.log("B");
    }
    if (keyPressed =="70"){
        new_img("thor_face.png");
        console.log("F");
    }
    if (keyPressed =="73"){
        block_imgHeight = block_imgHeight + 10;
        block_imgWidth = block_imgWidth + 10;
        document.getElementById("height_value").innerHTML=block_imgHeight;
        document.getElementById("width_value").innerHTML=block_imgWidth;
        console.log("I");
    }
    if (keyPressed =="68"){
        block_imgHeight = block_imgHeight - 10;
        block_imgWidth = block_imgWidth - 10;
        document.getElementById("height_value").innerHTML=block_imgHeight;
        document.getElementById("width_value").innerHTML=block_imgWidth;
        console.log("D");
    }
    if (keyPressed == "38"){
        console.log("Up");
        Up();
            }
            if (keyPressed == "40"){
                console.log("Down");
                Down();
            }
            if (keyPressed == "37"){
                console.log("Left")
                Left();
            }
            if (keyPressed == "39"){
              console.log("Right")
              Right();  
            };
        
        function Up(){
            if (player_y > 0){
          player_y = player_y - block_imgHeight;
          canvas.remove(player_object);
          player_update();   
            }
        }
        function Down(){
            if (player_y < 380){
          player_y = player_y + block_imgHeight;
          canvas.remove(player_object);
          player_update();   
            }
        }
        function Left(){
            if (player_x > 0){
          player_x = player_x - block_imgWidth;
          canvas.remove(player_object);
          player_update();   
            }
        }
        function Right(){
            if (player_x < 880){
          player_x = player_x + block_imgWidth;
          canvas.remove(player_object);
          player_update();   
            }
        }
        
}
