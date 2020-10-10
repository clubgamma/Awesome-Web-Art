

var status="white"
function myFunction() {
    if(status=="white")
    {
        status="dark"
    }
    else{
        status="white"
    }

    var element = document.getElementById("change");
    if(status=="dark")
    {
        var x = document.getElementsByClassName("change");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.background = " linear-gradient(to bottom, rgb(37, 37, 37) 0%, #229dd6 100%)";
        }

        var y = document.getElementsByClassName("backmain");
        var j;
        for (j = 0; j < y.length; j++) {
          y[j].style.background = "  rgb(37, 37, 37) ";
        }

        document.getElementById("main").style.background = "  rgb(37, 37, 37) ";

    document.getElementById("page-top").style.color="white"

    // document.getElementBy("backmain").style.background = " linear-gradient(to bottom, rgb(37, 37, 37) 0%, #229dd6 100%)";
 
    document.getElementById("bulb").style.color = " yellow";
   
}
    else{
        var x = document.getElementsByClassName("change");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.background = " linear-gradient(to bottom, rgb(255,255,255) 0%, #229dd6 100%)";
        }

        var y = document.getElementsByClassName("backmain");
        var j;
        for (j = 0; j < y.length; j++) {
          y[j].style.background = "white";
        }
        document.getElementById("main").style.background = " white";

    document.getElementById("bulb").style.color = "black";
    document.getElementById("page-top").style.color="black"
    // document.getElementById("fixtheme").style.background = "white";
    
    // document.getElementById("page-top").style.background = " linear-gradient(to bottom, rgb(255, 255, 255) 0%, #229dd6 100%)";
  
    }

    element.classList.toggle("dark-mode");
 }



 function changetheme() {
  if(status=="white")
  {
      status="dark"
  }
  else{
      status="white"
  }

  var element = document.getElementById("change");
  if(status=="dark")
  {
      var x = document.getElementsByClassName("change");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.background = " linear-gradient(to bottom, rgb(37, 37, 37) 0%, #229dd6 100%)";
      }

      var y = document.getElementsByClassName("backmain");
      var j;
      for (j = 0; j < y.length; j++) {
        y[j].style.background = "  rgb(37, 37, 37) ";
      }
      document.getElementById("content-wrapper").style.background="  rgb(37, 37, 37) ";

  document.getElementById("page-top").style.color="white"
  // document.getElementById("containereverypage").style.background="  rgb(37, 37, 37) ";
  document.getElementById("hrl").style.background="white"

  
  // document.getElementBy("backmain").style.background = " linear-gradient(to bottom, rgb(37, 37, 37) 0%, #229dd6 100%)";

  document.getElementById("bulb").style.color = " yellow";
 
}
  else{
      var x = document.getElementsByClassName("change");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.background = " linear-gradient(to bottom, #fff 0%, #229dd6 100%)";
      }

      var y = document.getElementsByClassName("backmain");
      var j;
      for (j = 0; j < y.length; j++) {
        y[j].style.background = "white";
      }

  document.getElementById("bulb").style.color = "black";
  document.getElementById("page-top").style.color="black"
  // document.getElementById("fixtheme").style.background = "white";
  
  // document.getElementById("page-top").style.background = " linear-gradient(to bottom, rgb(255, 255, 255) 0%, #229dd6 100%)";
  document.getElementById("content-wrapper").style.background=" white";

  document.getElementById("page-top").style.color="black"
  // document.getElementById("containereverypage").style.background="  white ";

  }

  element.classList.toggle("dark-mode");
}