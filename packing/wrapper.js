var packing = require('../packing');
var inherit= require('../inherit');

inherit.inherit(Wrapper,packing.Packing);
 function Wrapper(material, color, price, tinsel){
     this.material=material;
     this.color=color;
     this.price=price;
     this.tinsel=tinsel;
 };

 exports.Wrapper=Wrapper;
