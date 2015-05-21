$(document).ready(function(){
  window.dancers = [];

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
      Math.random() * 1000
    );
    var randGen = function(min, max){
      return Math.random() * (max - min) + min;
    }
    var x = randGen(0, $(".danceFloor").width() - dancer.dancerWidth);
    var y = randGen(0, $(".danceFloor").height() - dancer.dancerHeight);
    dancer.setPosition(y, x);


    $('.danceFloor').append(dancer.$node);
    window.dancers.push(dancer);
    var runMe = function(){
      for(i = 0; i < 100; i++){
        var dancer2 = new dancerMakerFunction(
          $(".danceFloor").height() * Math.random(),
          $(".danceFloor").width() * Math.random(),
          Math.random() * 1000
        );
        $('.danceFloor').append(dancer2.$node);
        window.dancers.push(dancer);
      }
    }
     // runMe();
  });

  $(".lineUpButton").on("click", function(event){

    var top = 0;
    var left = 0;
    for(var i=0;i< window.dancers.length; i++) {
      debugger;
      window.dancers[i].setPosition(top, left);
      left += 50;
      if(left > $(".danceFloor").width() - 50){
        top += 50;
        left = 0;
      }
    }
  });

});

