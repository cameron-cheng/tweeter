$(document).ready(function() {
  
  let maxLength = 140;
  
  $('#tweet-text').keyup(function(e) {
  
    // Finding total characters in Textarea
    let textLength = $(this).val().length;

    //Remaining Characters
    let remainder = maxLength - textLength;
    
    $(this).parent().find('.counter').val(remainder);

    //Logic to change counter red when below 0
    if (remainder < 0) {
      
    }
  });


});