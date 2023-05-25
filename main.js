function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(700, 175);
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100, 175);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose' , gotposes);
}

function modelLoaded(){
    console.log("pose net is initialilzed");
    }
    
function gotposes(error, results){
        if(error){
        console.log(error);
        }
        else {
            console.log(results);
        }
    }
    