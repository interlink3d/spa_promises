"use strict";

(function(){
  CarLot.populatePage = function (inventory) {
    var output = document.querySelector('.output');
    var results = '';
    inventory.forEach(function(car, i){

      if (i % 3 === 0){
        results += `<div class="row">`;
      }

        results +=
        `<div class="col-md-3 carCard" style="border-color: ${car.color}">
           <h2>Make: ${car.make}</h2>
           <h3>Model: ${car.model}</h3>
           <h5>Year: ${car.year}<h5>
           <h5>Price: ${car.price}<h5>
           <h5>Color: ${car.color}<h5>
           <h5>Available: ${car.purchased}</h5>
           <p class="descrip"> Description: ${car.description} </p>
        </div>`;

      if ((i + 1) % 3 === 0){
        results += `</div>`;
      }

    });

    output.innerHTML = results;

    CarLot.activateEvents();
  };

  CarLot.loadInventory(CarLot.populatePage);

})();

