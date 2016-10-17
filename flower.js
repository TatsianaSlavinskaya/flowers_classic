function Flower( ) {};

this.name="no name"; 
this.price = 0; 
this.color="no color"; 

Flower.prototype.getPrice = function() { 
return this.price; 
}; 

Flower.prototype.getColor = function() { 
return this.color; 
};  

Flower.prototype.printPrice = function() { 
console.log(this.price); 
}; 
exports.Flower = Flower;


