var main = funtion() {
  $('.btn').click(funtion(){
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo.('.posts'); //Adding text to class posts
    $('.status-box').val(''); //Emptied the status-box
    $('.btn').addClass('disabled');
    $('.counter').text(140);
  });

  $('.status-box').keyup(funtion(){
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);

    if(charactersLeft < 0){
      $('.btn').addClass('disabled');
    }

    else if(charactersLeft === 140){
      $('.btn').addClass('disabled');
    }
    
    else {
      $('.btn').removeClass('disabled');
    }

  });
  $('.btn').addClass('disabled');
};

$(document).ready(main);