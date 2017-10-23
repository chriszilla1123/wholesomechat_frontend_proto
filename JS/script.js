$(document).ready(function(){
  endpoint = "http://chilltec.net:4567/api/getTone";
  $("#submitMessage").on("click", function(){
    userInput = $("#textbox").val();
    if (userInput != "" && userInput != undefined) {
      $.post(endpoint, userInput, function(data){
        console.log(data);
        response = JSON.parse(data);
        toPrint = "";
        toPrint += "Emotions: \n";
        toPrint += "Anger: " + response.tone_categories.0.tones.0.score;
        
        $("#response").html(toPrint);
      });
    }
  });
});