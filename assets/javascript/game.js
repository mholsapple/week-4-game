<!DOCTYPE html>
<html>
<head>
  <title>simple crystal game</title>
  <style type="text/css">
    /*
      we threw in some styling to make the picture fit on the page better
  */
    .crystalImage {
      width: 300px;
      height: 300px;
    }
  </style>
</head>
<body>

<p><span id="number"></span></p>

<p><span id="yourNumber"></span></p>

<div id="crystals">
</div>

<!-- we added jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
<script type="text/javascript">
  $( document ).ready(function() {

    var numberToGuess = 53;

    var counter = 0;

    var numbers = [10, 5, 3, 7];

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }   

    shuffle(numbers);
    console.log(numbers);

    $('#number').text(numberToGuess);

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');

      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src', 'http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg');

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }

    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));

      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });

  });
</script>
</body>
</html>
