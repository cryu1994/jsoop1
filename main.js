function VehicleConstructor(name, NumberOfWheels, NumberOfPassengers){
 var vehicle = {};

 vehicle.name = name;
 vehicle.NumberOfWheels = NumberOfWheels;
 vehicle.NumberOfPassengers = NumberOfPassengers;

 vehicle.MakeNoise = function(){
     console.log("I am a " + name + ", I have " + NumberOfWheels + " wheels and I can take up " + NumberOfPassengers + " passenger(s).")
 };
 return vehicle;
}
var Car = VehicleConstructor("Audi", 4, 4);
var bike = VehicleConstructor('bike', 2, 1);
bike.makenoise = function(){
    console.log("Ring ring!");
};
var Sadan = VehicleConstructor('Sadan', 4, 4);
Sadan.makenoise = function(){
    console.log("Honk Honk");
};
var Bus = VehicleConstructor('Bus', 8, 60);
Bus.drop = function(NumberOfPassengers){
    console.log("I have to drop " + NumberOfPassengers + " to work")
};

Car.MakeNoise();
bike.MakeNoise();
bike.makenoise();
Sadan.MakeNoise();
Sadan.makenoise();
Bus.MakeNoise();
Bus.drop(24);