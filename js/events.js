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
