function getIt(){
  $('p').on('click', function(){
    alert (`"Hey!"`);
  });
}

function frameIt(){

  $('img').load(function(){
    $('img').addClass('tasty');
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert(`"Your form is going to be submitted now."`);
  });
}



$(document).ready(function(){

getIt;
frameIt;
submitIt;
});
