const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var umbrella;
var drops = [];
var maxDrops = 100;
var lightning1, lightning2, lightning3, lightning4;
var img;

function preload()
{
    lightning1 = loadImage("images/thunderbolt/1.png");
    lightning2 = loadImage("images/thunderbolt/2.png");
    lightning3 = loadImage("images/thunderbolt/3.png");
    lightning4 = loadImage("images/thunderbolt/4.png");
}

function setup()
{
    createCanvas(500, 800);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(width/2, height-height/4, width/5);

    for(var i=1; i<=maxDrops; i++)
    {
        drops.push(new Drops(random(20, width-20), random(0, 750)));
    }
}

function draw()
{
    background("black");
    Engine.update(engine);

    umbrella.display();
    for(var index = 1; index <= drops.length; index++)
    {
        drops[index-1].display();
        drops[index-1].update();
    }

    lightning();
}   

function lightning()
{
    if(frameCount>= 80)
    {
        if(frameCount % 80 === 0)
        {
            var count = 0;
            randPos = random(width/3, width-width/3);
            switch(Math.round(random(1, 4)))
            {
                case 1: img = lightning1; break;
                case 2: img = lightning2; break;
                case 3: img = lightning3; break;
                case 4: img = lightning4; break;

            }
            
        }
        if(count < 20)
        {
            image(img, randPos, 0, width, height*1.4);
            count++;
        }
        
    }
}
