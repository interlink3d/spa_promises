(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./events":2}],2:[function(require,module,exports){
"use strict";

var cardStyle = require('./styles');

  var activateEvents = function() {

    var cards = document.querySelectorAll(".carCard");

    cards.forEach(function(card){
      card.addEventListener("click", function(){
        var userInput = document.getElementById("userInput");
        userInput.value = "";
        userInput.focus();
        cardStyle.resetCards(cards);
        cardStyle.styleCard(card, "color");
        cardStyle.mirrorText(card, userInput);
      });
    });

  };

module.exports = activateEvents;

},{"./styles":4}],3:[function(require,module,exports){
"use strict";

var createdInv = require('./Carlot');
var populateToLoad = require('./events');


  var populatePage = function (inventory) {
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

        populateToLoad();
  };

  createdInv.loadInventory().then(function(stuff){
    populatePage(stuff);
  });




},{"./Carlot":1,"./events":2}],4:[function(require,module,exports){
"use strict";

var morphs = {};

  morphs.resetCards = function (cards){
    cards.forEach(function(card){
      card.classList.remove("color");
    });
  };

  morphs.styleCard = function (card, color){
    card.classList.add(color);
  };


  morphs.mirrorText = function (card, userInput){
    // userInput.value = card.querySelector("p").innerHTML  - mirrors text into text field to modify
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("color")){
         card.querySelector("p").innerHTML = "Description: " + userInput.value;
      }
    });
  };

module.exports = morphs;

},{}]},{},[3]);
