describe ('Airport', function(){
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it ('should have no planes when created', function(){
    expect(airport.planes).toEqual([]);
  });

  it ('should accept a plane', function(){
    plane.land();
    airport.park(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('should allow plane to take off', function(){
    plane.land();
    airport.park(plane);
    expect(airport.planes).toEqual([plane]);
    airport.takeOff();
    expect(airport.planes).toEqual([]);
  });

});