//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

var canvasX = 1000;
var canvasY = 2000;
var pxsize = 12
angleMode(DEGREES);

//setup - run once when the code is first starts
function setup() {
  createCanvas(canvasX, canvasY); // this sets the size of the area in which we can draw things
  background(250);

}

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(250); //light honeydew green colour

   if (background) { 
    
    background(242, 252, 217)

   }
   else {
    
    background(255, 254, 173)

  
   }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 //rect(40 ,40, rect_width, rect_height);
  



  //draw a bear
  stroke(250, 237, 240)
  fill(250, 237, 237)
  ellipse(pxsize*8, pxsize*9, 130, 110);
  ellipse(pxsize*6, pxsize*4.5, pxsize*2.5, pxsize*2);
  ellipse(pxsize*10, pxsize*4.5, pxsize*2.5, pxsize*2);
  

   //mouth part
   stroke(250)
   fill(255, 245, 245)
   ellipse(pxsize*8, pxsize*9.5, 50, 40);

   //draw his face

   //angry look
   stroke(61, 59, 59)
   strokeWeight(2) 
   fill(250, 237, 237)
   curve(10, 30, 74, 75, 120, 75, 89, 60);
   
   //eyes
   fill(61, 59, 59)
   ellipse(pxsize*9, pxsize*7.2, pxsize-4, pxsize-6);
   ellipse(pxsize*7, pxsize*7.2, pxsize-4, pxsize-6)

   //nose
   ellipse(pxsize*8, pxsize*8.2, pxsize-2, pxsize-6)
  
   //mouth
   line(pxsize*7.5, pxsize*9, pxsize*8.5, pxsize*9)
   line(pxsize*7.8, pxsize*9.4, pxsize*8.2, pxsize*9.4)
    
   
}

