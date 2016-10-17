function Bouquet(){
	var flowers = [];
	this.addFlower = function (something){
		return flowers.push(something);
	}
	
	this.showBouquet = function(){
		return console.log(flowers);
	}
	var sum = 0;
	this.totalPrice = function(){
		for(var i=0; i < flowers.length; i++){
			sum+=flowers[i].getPrice();
		}
		 return sum;
	}
	this.sortByPrice = function(){
		return console.log(flowers.sort(comparePrice))
	}
	this.filterFlowers = function(){
		var filteredFlowers = flowers.filter(function(flower){
			return  (flower.color == 'red');
		});
		return filteredFlowers;
	}
	}

	function comparePrice(flower1 , flower2){
	return flower1.price - flower2.price;
	}

exports.Bouquet=Bouquet;