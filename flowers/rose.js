 var flower =require ('../flower');
 var inherit = require('../inherit');

inherit.inherit(Rose, flower.Flower);

function Rose(name, price, color){
    this.name=name;
    this.price = price;
    this.color= color;
	};

exports.Rose = Rose;
