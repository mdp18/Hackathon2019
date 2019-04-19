
/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
  <script type="text/javascript" src="../static/js/sketch.js"></script> */

  $(window).on('resize', function() {
    if (window.matchMedia("only screen and (min-width: 900px)").matches) {
      $.getScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js');
      $.getScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js');
      $.getScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js');
      $.getScript('../static/js/sketch.js');
    } else {

    }
  });