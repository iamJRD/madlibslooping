$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ['person1', 'person2', 'animal', 'verb', 'noun'];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput);
    });
    
  $("#story").css("visibility", "visible");
    event.preventDefault();
  });
});
