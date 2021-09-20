function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/waY2vMP5u/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    
    }
    else {
        console.log(results);
       randomnumberr = Math.floor(Math.random() * 255) + 1;
       randomnumberg = Math.floor(Math.random() * 255) + 1;
       randomnumberb = Math.floor(Math.random() * 255) + 1;

       document.getElementById('result_label').innerHTML = 'I Can Hear - '+ results[0].label;
       document.getElementById('result_confidence').innerHTML = 'Accuracy -'+ (results[0].confidence * 100).toFixed(2) + " %";
       document.getElementById('result_label').style.color = "rbg("+ randomnumberr + "," + randomnumberg + "," + randomnumberb + ")";
       document.getElementById('result_confidence').style.color = "rbg("+ randomnumberr + "," + randomnumberg + "," + randomnumberb + ")";

       img1 = document.getElementById('aliens-01.png');
       img2 = document.getElementById('aliens-02.png');
       img3 = document.getElementById('aliens-03.png');
       img4 = document.getElementById('aliens-04.png');

       if (results[0].label == "Clap") {
           img1 = 'aliens-01.gif';
           img2 = 'aliens-02.png';
           img3 = 'aliens-03.png';
           img4 = 'aliens-04.png';
       }
       else if (results[0].label == "Snap") {
        img1 = 'aliens-01.png';
        img2 = 'aliens-02.png';
        img3 = 'aliens-03.gif';
        img4 = 'aliens-04.png';
    }
    else if (results[0].label == "Bell") {
        img1 = 'aliens-01.png';
        img2 = 'aliens-02.gif';
        img3 = 'aliens-03.png';
        img4 = 'aliens-04.png';
    }
    else {
        img1 = 'aliens-01.png';
        img2 = 'aliens-02.png';
        img3 = 'aliens-03.png';
        img4 = 'aliens-04.gif';
    }
    }
    
    }

    

