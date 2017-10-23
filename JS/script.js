$(document).ready(function(){
  endpoint = "http://chilltec.net:4567/api/getTone";
  $("#submitMessage").on("click", function(){
    userInput = $("#textbox").val();
    console.log(userInput);
    if (userInput != "" && userInput != undefined) {
      $.post(endpoint, userInput, function(data){
        $("#response").html(JSON.stringify(data));
        console.log("Success!");
      });
    }
  });
});