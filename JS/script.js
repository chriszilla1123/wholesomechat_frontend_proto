$(document).ready(function(){
  var endpoint = "http://chilltec.net:4567/api/getTone";
  $("#submitMessage").on("click", function(){
    checkTone();
  });
  
  var checkTone = function(){
    userInput = $("#textbox").val();
    if (userInput != "" && userInput != undefined) {
      $.post(endpoint, userInput, function(data){
        toPrint = "";
        toPrint += "Emotional Tones:  <br>";
        toPrint += "Anger: " + data.tone_categories[0].tones[0].score;
        toPrint += ", Disgust: " + data.tone_categories[0].tones[1].score;
        toPrint += ", Fear: " + data.tone_categories[0].tones[2].score;
        toPrint += ", Joy: " + data.tone_categories[0].tones[3].score;
        toPrint += ", Sadness: " + data.tone_categories[0].tones[4].score;
        toPrint += "<br>Language Tones:  <br>  ";
        toPrint += "Analytical: " + data.tone_categories[1].tones[0].score;
        toPrint += ", Confident: " + data.tone_categories[1].tones[1].score;
        toPrint += ", Tentative: " + data.tone_categories[1].tones[2].score;
        toPrint += "<br>Social Tones:  <br>  ";
        toPrint += "Openness: " + data.tone_categories[2].tones[0].score;
        toPrint += ", Conscientiousness: " + data.tone_categories[2].tones[1].score;
        toPrint += ", Extraversion: " + data.tone_categories[2].tones[2].score;
        toPrint += ", Agreeableness: " + data.tone_categories[2].tones[3].score;
        toPrint += ", Emotional Range: " + data.tone_categories[2].tones[4].score;
        
        $("#response").html(toPrint);
      });
    }
  };
});