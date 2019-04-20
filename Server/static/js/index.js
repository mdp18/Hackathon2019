  if($(window).width() >= 900) {
    console.log("FUCKS");
  }
  
  if($(window).width() >= 900) {
      console.log("FUCKIN");
  }

  document.addEventListener("orientationchange", function(event){
        switch(window.orientation) 
        {  
            case -90: case 90:
                console.log("Landscape")
                break; 
            default:
                console.log("portrait")
        }
    });

function lu-action() {
    console.log("left up was pressed");
}

function rd-action() {
    console.log("right down was pressed");
}

function a-action() {
    console.log("A down was pressed");
}

function b-action() {
    console.log("B down was pressed");
}