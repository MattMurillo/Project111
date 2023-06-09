

Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(data_uri)
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Oi-32KSxk/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!')
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" +prediction_1;
    speak_data_2 = "And fun fact Bean Searfoss is a goofy clown and the second prediction is" +prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis); 
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }

    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;

        prediction_1 = results[0].label
        prediction_2 = results[1].label
        speak()
    }
    if(results[0] == "happy")
    {
        document.getElementById("update_emoji").innerHTML = "&#128522";
    }

    if(results[0] =="sad")
    {
        document.getElementById("updare_emoji").innerHTML = "&#128532";
    }
    if(results[0] == "angry")
    {
        document.getElementById("update_emoji").innerHTML = "&#128548";
    }
    if(results[0] =="normal")
    {
        document.getElementById("update_emoji").innerHTML = "&#128528;"
    }
    if(results[0] =="goofy")
    {
        document.getElementById("update_emoji").innerHTML = "&#129313;"
    }
    if(results[0] == "Goofy Ahh Kid")
    {
        document.getElementById("update_emoji").innerHTML = "&#129299;"
    }





    if(results[1] == "happy")
    {
        document.getElementById("update_emoji2").innerHTML = "&#1238522";
    }
    if(results[1] == "sad")
    {
        document.getElementById("update_emoji2").innerHTML = "&3128532";
    }
    if(results[1] == "angry")
    {
        document.getElementById("update_emoji2").innerHTML = "&#1238548";
    }
    if(results[1] =="normal")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128528;"
    }
    if(results[1] =="goofy")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129313;"
    }
    
    if(results[1] == "Goofy Ahh Kid")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129299;"
    }
}
