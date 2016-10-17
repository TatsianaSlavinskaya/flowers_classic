var rose_constructor = require('./flowers/rose');
var orchid_constructor= require('./flowers/orchid');
var bouquet_constructor=require('./bouquet');
var wrapper_constructor=require('./packing/wrapper');
var pot_constructor=require('./packing/pot')
var prompt = require('prompt');


var bouquet=new bouquet_constructor.Bouquet();
var rose1 = new rose_constructor.Rose("Mister linkoln", 60, "red");
var rose2 =  new rose_constructor.Rose("Eden", 50, "pink");
var orchid1 = new orchid_constructor.Orchid("Brassia", 90, "pink");
var orchid2 = new orchid_constructor.Orchid("Oncidom", 70, "red");
var wrapper1= new wrapper_constructor.Wrapper("paper", "red", 15, true);
var pot1 =  new pot_constructor.Pot("ceramic", "blue", 30, 25);
prompt.start();


console.log("if you want a bouquet with wraper: enter 1, if you want bouquet in pot enter 2, if you want only flowers enter 3 ");
prompt.get([ "n",'rose1Count', 'orchid1Count', 'rose2Count', 'orchid2Count'], function (err, result) {
  var cost;
if (result.n==1){
    cost=wrapper1.getPrice();
    
} else if  (result.n==2){
    cost=pot1.getPrice();
}else {
    cost=0;
}
 
 for(var i = 0; i < result.rose1Count; i++){
  bouquet.addFlower(rose1);
 }

 for(var i = 0; i < result.orchid1Count; i++){
       bouquet.addFlower(orchid1);
 }
 for (var i=0; i<result.rose2Count; i++){
     bouquet.addFlower(rose2);
 }
 for (var i = 0 ; i<result.orchid2Count; i++){
     bouquet.addFlower(orchid2);
     
 }
  

 console.log(bouquet.showBouquet());
 var b = bouquet.totalPrice();
 console.log('The bouquet consist of:');
 console.log(rose1.name +": " + result.rose1Count);
 console.log(rose2.name + ": " + result.rose2Count);
 console.log(orchid1.name + ": " + result.orchid1Count);
 console.log(orchid2.name + ": " + result.orchid2Count);
var summa= b + cost;   
 
 console.log(" flower's price: " + b +  " packing price: " + cost + " Total price: " + summa);
console.log(" ");

console.log("Sorted flowers in the bouquet by price: ");
bouquet.sortByPrice();

console.log("Bouquet with red flowers:");
bouquet.showBouquet(bouquet.filterFlowers());
});







