song = "";
song2 = "";

scoreLeftWrist = 0;
scoreRightWrist = 0;

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {

    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {

    canvas = createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {

    console.log('PoseNet is initialized');
}

function gotPoses() {

    if(results.length > 0) {

        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw() {
  
    image(video, 0, 0, 600, 500);
    song_variable.isPlaying(song);

    if(scoreLeftWrist > 0.2) {

        circle(leftWristX,leftWristY,20);
        song_variable.stop(song2);

    }

    if(scoreRightWrist > 0.2) {

        circle(rightWristX,rightWristY,20);
        song_variable.stop(song);
    }

    if(song_variable.isPlaying() = song) {

      song.play();
    }

    if(song_variable.isPlaying() = song) {

        song2.play();
    }
}

function play() {

    song.play();
}