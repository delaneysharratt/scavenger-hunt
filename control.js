$(document).ready(function() {
  $("html").mousemove(function(moved) {
    //do something everytime the mouse moves

    console.log(moved.clientX, moved.clientY); //log out  our x and y position
    // console.log('hi!')

    $("#light").css({
      //change the css

      top: moved.clientY - 5000, //make the top the position of the mouse - 1/2 of the size of image height
      //to offset for the position starting @ the corner
      left: moved.clientX - 5000 //same as above, but for the horizontal version
    });
  });

  $("#tool").click(function() {
    if ($(this).attr("src") === "tool-open.png") {
      this.src = "tool-close.png";
    } else {
      this.src = "tool-open.png";
    }
  });
});
