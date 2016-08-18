"use strict";

var inventToLoad = require('./events');

var inventory = [];


var getInventory = function () {
  return inventory;
};

var loadInventory = function (callback) {
    return new Promise( function (resolve, reject) {
    var inventoryLoader = new XMLHttpRequest(); //get data
    inventoryLoader.open('GET', 'inventory.json');
    inventoryLoader.send();

    inventoryLoader.addEventListener('load', function () {
      var data = JSON.parse(this.responseText).cars; //store in private variable
      resolve(data);
      // callback(inventory);
      // cb(JSON.parse(evt.target.responseText))  //execute callback
    });
  });
};


module.exports = {getInventory, loadInventory};
