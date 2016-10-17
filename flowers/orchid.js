 var flower =require ('../flower');
 var inherit = require('../inherit');

inherit.inherit(Orchid, flower.Flower);

function Orchid(name, price, color){
    this.name=name;
    this.price = price;
    this.color= color;
};

exports.Orchid = Orchid;
