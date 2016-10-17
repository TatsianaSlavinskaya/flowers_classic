 var packing=require ('../packing');
 var inherit = require('../inherit');

inherit.inherit(Pot, packing.Packing);

function Pot (material, color, price, volume)
{    this.material=material;
    this.color=color;
    this.price=price;
    this.volume=volume;
} 
exports.Pot=Pot;
