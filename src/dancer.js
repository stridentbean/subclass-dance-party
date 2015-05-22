// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, height, width){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.dancerWidth = width || 20;
  this.dancerHeight = height || 20;

  //directions
  this.randomDirection();

  if(top > this.dancerHeight){
    this.top = top - this.dancerHeight;
  } else {
    this.top = top;
  }
  if(left > this.dancerWidth){
    this.left = left - this.dancerWidth;
  } else {
    this.left = left;
  }

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);
  this.step();

  var context = this;
  $(this.$node).on("click", function(event){
    var styleSettings = {
      border:"10px solid blue"
    };
    $(this).css(styleSettings);
    debugger;
    context.randomDirection();
  });
};

makeDancer.prototype.randomDirection = function(){
  if(Math.random() > 0.5) {
    this.vertical = 'down';
  } else {
    this.vertical = 'up';
  }

  if(Math.random() > 0.5) {
    this.horizontal = 'right';
  } else {
    this.horizontal = 'left';
  }
};

makeDancer.prototype.reverseDirection = function() {
  if(this.vertical === 'down') {
    this.vertical = 'up';

  } else {
    this.vertical = 'down';
  }

  if(this.horizontal === 'right') {
    this.horizontal = 'left';

  } else {
    this.horizontal = 'right';
  }
}

makeDancer.prototype.step = function(){
  var speed = 20;


  // var dancers = $(".dancer");
  // for(var i = 0; i < dancers.length; i++) {
  //     debugger;
  //   if(dancers[i].css(top) === this.top && dancers[i].css(left) === this.left) {
  //     if(dancers[i] !== this.$node){
  //       this.reverseDirection();
  //       dancers[i].reverseDirection();
  //     }
  //   }
  // }


  if(this.top > $(".danceFloor").height() - this.dancerHeight - speed) {
    this.vertical = 'up';
  }
  if(this.left > $(".danceFloor").width() - this.dancerWidth - speed) {
    this.horizontal = 'left';
  }
  if(this.top <= 0 + speed) {
    this.vertical = 'down';
  }
  if(this.left <= 0 + speed) {
    this.horizontal = 'right';
  }

  if(this.horizontal === 'right') {
    this.left+=speed;
  } else {
    this.left-=speed;
  }
  if(this.vertical === 'down') {
    this.top+=speed;
  } else {
    this.top-=speed;
  }

  this.setPosition(this.top, this.left);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function(top , left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.top = top;
  this.left = left;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {

};
