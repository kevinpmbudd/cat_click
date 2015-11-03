var count = 0;

$('#kitty').click(function(e) {
  count ++;
  console.log(count);
  $('#count').text('You have clicked me ' + count + ' times');
});