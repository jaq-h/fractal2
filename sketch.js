class Tri {
  
  
  constructor()
  {
    this.g=0;
    this.r=0;
    this.b=0;
    this.w = 50; 
    this.h = 50;
    this.o = 1;
    this.a = 0;
    
  }

  randomColor()
  {
    //var rand = random(0,1);
    // if(rand<.5)
    // {
         this.r= random(50,150);
         this.g= 0; 
         this.b= random(150,255); 
         
     //}
     //else
     //{
         //this.r= random(100,150); 
         //this.g= 0;
         //this.b= random(50,200); 
         //this.o =opacity;
       
     //}
     //else{
     //  this.r= 255; 
     //  this.g= random(200,255);
     //  this.b= 255; 
     //  this.o =opacity;
     //}
     
    
  }
  setSize( i)
  {
    this.w = 7*width/pow((i+1),1);
    
  }
  drawT()
  {
    

    fill( color([this.r,this.g,this.b, 255]));
    noStroke();
    //textureMode(IMAGE);
    //texture(img);
    // setStroke(false);
    // shapeMode(CENTER);
    this.h = sqrt(3)/2*this.w;
    triangle( (-1/2.0)*this.w,(-1/3.0)*this.h, (1/2.0)*this.w, (-1/3.0)*this.h, 0, (2/3.0)*this.h); 
  }
 
}


let triangles = [];
let listSize = 600;
let count =0;
let opacity = 25;
let rate = 1.0001;
function setup()
{
   
   createCanvas(1920,1080);
   frameRate(10);
   colorMode(RGB, 255)
   //img = loadImage("texture1.png");
   for(var i = 0; i< listSize-1; i++)
   {
     let temp = new Tri();
     temp.setSize(i);
     temp.randomColor();
     triangles.push(temp);
     
   }
     // let voidTri = new Tri();
     // voidTri.setSize(listSize);
     // // triangles[triangles.length-1].rotate(675/360*(triangles.length-2));
     // voidTri.r=0;
     // voidTri.g=0;
     // voidTri.b=0;
     // voidTri.o=200;
    //triangles.push(voidTri);
   
   
   
}

function draw()
{
  clear();
  background(200,0,255);
          translate(width/2,height/2);
          count+=2;

     for(var i =0; i<triangles.length-2; i++)
     { 
      triangles[i].drawT();
      triangles[i].setSize(i);
      //triangles[i].o = (255)/(i+1);
 
      rotate((i/1500)+count/1000 );
   
     }
   //  triangles[triangles.length-1].drawT();
   
     for(var j=0; j<triangles.length-2; j++)
     {
        triangles[j] = triangles[j+1];
           
     }
     triangles[triangles.length-2] = new Tri();
      triangles[triangles.length-2].setSize(triangles.length);
      triangles[triangles.length-2].randomColor();
     // // triangles[triangles.length-2].rotate(675/360*(triangles.length-2));
     // triangles[triangles.length-1].setSize(triangles.length-1);
     // // triangles[triangles.length-1].rotate((675/360*(triangles.length-2))+count);
     //filter(BLUR,1);
     
    
  // delay(10);
}
