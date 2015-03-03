describe('Plane', function() {
  var plane;

  it('should be in the air when create', function() {
      plane = new Plane();
      expect(plane.isFlying).toBe(true);
  });

  it('should be able to land', function(){
      plane = new Plane();
      plane.land();
      expect(plane.isFlying).toBe(false);
  });

});

