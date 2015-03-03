var Airport = function(){
  this.planes = [];
};

Airport.prototype.planeCount = function() {
  this.planes = [];
};

Airport.prototype.park = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.planes.splice(plane);
};