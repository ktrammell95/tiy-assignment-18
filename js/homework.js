function Vehicle() {
  this.notLiving = true;
};

  function LandVehicle() {
    Vehicle.call(this);
  };
  //this makes it instance of vehicle
    LandVehicle.prototype = Object.create(Vehicle.prototype);

      function Car() {
        LandVehicle.call(this);
      };

      Car.prototype = Object.create(LandVehicle.prototype);

      function Train() {
        LandVehicle.call(this);
      };

      Train.prototype = Object.create(LandVehicle.prototype);


  function Aircraft() {
    Vehicle.call(this);
  };

    Aircraft.prototype = Object.create(Vehicle.prototype);

      function Plane() {
        Aircraft.call(this);
      };

      Plane.prototype = Object.create(Aircraft.prototype);


  function SeaVessel() {
    Vehicle.call(this);
   };

    SeaVessel.prototype = Object.create(Vehicle.prototype);

      function Boat() {
        SeaVessel.call(this);
      };

      Boat.prototype = Object.create(SeaVessel.prototype);




var extendee = {name: "Gizmo", animal: "dog"}

  var extended = _.extend(extendee);


function params(parameters) {
  var defaults = {
    name: "gizmo",
    animal: "dog",
    page: 1
  };

  var param = _.extend({}, defaults, parameters);
    return param;
}