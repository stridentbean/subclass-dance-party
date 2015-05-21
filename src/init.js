$(document).ready(function(){
  window.dancers = [];

  var randGen = function(min, max){
    return Math.random() * (max - min) + min;
  }

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($(".danceFloor").height() * Math.random()),
      ($(".danceFloor").width() * Math.random()),
      Math.random() * 500
    );

    $('.danceFloor').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $(".lineUpButton").on("click", function(event){

    var top = 0;
    var left = 0;
    var tallestDancerInRow = 0;
    for(var i=0;i< window.dancers.length; i++) {
      if(window.dancers[i].dancerHeight > tallestDancerInRow){
        tallestDancerInRow = window.dancers[i].dancerHeight;
      }
      window.dancers[i].setPosition(top, left);
      left += window.dancers[i].dancerWidth;
      if(left > $(".danceFloor").width() - 50){
        top += tallestDancerInRow;
        tallestDancerInRow = 0;
        left = 0;
      }
    }
  });

  $(".addTenDancersButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var runMe = function(){
      for(i = 0; i < 100; i++) {
        var dancer = new dancerMakerFunction(
          $(".danceFloor").height() * Math.random(),
          $(".danceFloor").width() * Math.random(),
          Math.random() * 500
        );

        $('.danceFloor').append(dancer.$node);
        window.dancers.push(dancer);
      }
    }
    runMe();
  });

});

