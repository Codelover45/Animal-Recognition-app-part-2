function soundstart()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tTEPViTCb/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults() {
    console.log("gotresult");
    
}