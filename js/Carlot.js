"use strict";

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },

    loadInventory: function (callback) {
      return new Promise( function (resolve, reject) {
      var inventoryLoader = new XMLHttpRequest(); //get data
      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.send();

      inventoryLoader.addEventListener('load', function () {
        var data = JSON.parse(this.responseText); //store in private variable
        callback(inventory);
        // cb(JSON.parse(evt.target.responseText))  //execute callback
      });
    });
  };
 }
})();
