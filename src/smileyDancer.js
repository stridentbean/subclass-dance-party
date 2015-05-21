var makeSmileyDancer = function(top, left, timeBetweenSteps){
  var diameter = 50;
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps, diameter, diameter);

  this.$node.prepend('<img src="assets/smiley.png" alt="Smiley face" height="'+ diameter +'" width="' + diameter + '">');
  this.$node.removeClass('dancer');
  this.$node.addClass('smiley');
};

makeSmileyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeSmileyDancer;

//this.$node = $('<span class="dancer"></span>');
