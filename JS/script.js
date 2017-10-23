$(document).ready(function(){
  endpoint = "http://chilltec.net:4567/api/getTone";
  $("#submitMessage").on("click", function(){
    userInput = $("#textbox").val();
    if (userInput != "" && userInput != undefined) {
      $.post(endpoint, userInput, function(data){
        console.log(data);
        //response = JSON.parse(data);
        toPrint = "";
        toPrint += "Emotional Tones:  <br>";
        toPrint += "Anger: " + data.tone_categories[0].tones[0].score; + "<br>";
        toPrint += "Disgust: " + data.tone_categories[0].tones[1].score; + "<br>";
        toPrint += "Fear: " + data.tone_categories[0].tones[2].score; + "<br>";
        toPrint += "Joy: " + data.tone_categories[0].tones[3].score; + "<br>";
        toPrint += "Sadness: " + data.tone_categories[0].tones[4].score; + "<br>";
        toPrint += "Language Tones:  <br>";
        toPrint += "Analytical: " + data.tone_categories[1].tones[0].score; + "<br>";
        toPrint += "Confident: " + data.tone_categories[1].tones[1].score; + "<br>";
        toPrint += "Tentative: " + data.tone_categories[1].tones[2].score; + "<br>";
        toPrint += "Social Tones:  <br>";
        toPrint += "Openness: " + data.tone_categories[2].tones[0].score; + "<br>";
        toPrint += "Conscientiousness: " + data.tone_categories[2].tones[1].score; + "<br>";
        toPrint += "Extraversion: " + data.tone_categories[2].tones[2].score; + "<br>";
        toPrint += "Agreeableness: " + data.tone_categories[2].tones[3].score; + "<br>";
        toPrint += "Emotional Range: " + data.tone_categories[2].tones[4].score; + "<br>";
        
        $("#response").html(toPrint);
        console.log("test");
      });
    }
  });
});