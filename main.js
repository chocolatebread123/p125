
difference = 0;
rightWristX = 0;
leftWrist = 0;

function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(560, 135);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log('poseNet Is Initialized!');
}

function draw(){
background("pink");
fill("green");
stroke("cyan");
text("todays notice is that the entire school has to assemble for the assembly", 30, 100);
textSize(difference);

}
function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            
            leftWristX= results[0].pose.leftWrist.x;
            rightWristX= results[0].pose.rightWrist.x;
            
            difference = floor(leftWristX - rightWristX);

        }
}