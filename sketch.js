const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
backgroundImg = loadImage(bg)

    Engine.update(engine);

    // write code to display time in correct format here

getBackgroundImg();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Sydney");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0530 && hour<=0700){
        bg = "sunrise1.png";
    }
    else if(hour>=0701 && hour<=0800){
        bg = "sunrise2.png";
    }
    else if(hour>=0801 && hour<=0900){
        bg = "sunrise3.png"
    }
    else if(hour>=0901 && hour<=1000){
        bg = "sunrise4.png"
    }
    else if(hour>=1001 && hour<=1100){
        bg = "sunrise5.png"
    }
    else if(hour>=1101 && hour<=1300){
        bg = "sunrise6.png"
    }
    else if(hour>=1301 && hour<=1500){
        bg = "sunset7.png"
    }
    else if(hour>=1501 && hour<=1800){
        bg = "sunset8.png"
    }
    else if(hour>=1801 && hour<=1900){
        bg = "sunset10.png"
    }
    else if(hour>=1901 && hour<=2000){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);


}
