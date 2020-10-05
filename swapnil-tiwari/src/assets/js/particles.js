/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

  export function loadParticles()
 {
  document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('mainWindow'), {
      dotColor: '#000',
      lineColor: '#5cbdaa'
    });
   
  }, false);
  

 }


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/