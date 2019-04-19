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