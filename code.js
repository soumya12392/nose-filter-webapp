noseX = 0;
noseY = 0;
var clown_nose;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/dQn41Pnj/clown-nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    /*fill(96, 215, 197);
    stroke(96, 215, 197);
    circle(noseX, noseY, 20);*/
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save("myFilterImage.png");
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 13;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}