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
