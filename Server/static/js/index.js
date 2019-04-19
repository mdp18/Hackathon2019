
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
  <script type="text/javascript" src="../static/js/sketch.js"></script>

  $(window).on('resize', function() {
    if (window.matchMedia("only screen and (min-width: 1240px) and (max-width: 1280px)").matches) {
      $.getScript('changer/js/changer-1280.js');
    } else if (window.matchMedia("only screen and (min-width: 1390px) and (max-width: 1440px)").matches) {
      $.getScript('changer/js/changer-1440.js');
    } else if (window.matchMedia("only screen and (min-width: 1441px) and (max-width: 1441px)").matches) {
      $.getScript('changer/js/changer-1441.js');
    }
  });