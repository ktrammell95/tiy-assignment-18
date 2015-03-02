function Vehicle() {
  this.notLiving=true;
}

function Car() {
  Vehicle.call(this);
}

//this makes it instance of vehicle
Car.prototype = Object.create(Vehicle.prototype));

function Aircraft(){
  Vehicle.call(this);
}


