var makeGreenBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('green');
};

makeGreenBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeGreenBlinkyDancer.prototype.constructor = makeGreenBlinkyDancer;


