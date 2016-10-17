function Packing() {};


this.material = "no material";
this.color="no color";
this.price=0;

Packing.prototype.getPrice = function(){
    return this.price;
};
Packing.prototype.printInformation = function(){
    console.log("material of packing is" + this.material + "color of packing is" + this.color);
};


exports.Packing=Packing;
