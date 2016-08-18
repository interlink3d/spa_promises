CarLot = (function(carLot) {

  carLot.resetCards = function (cards){
    cards.forEach(function(card){
      card.classList.remove("color")
    })
  }

  carLot.styleCard = function (card, color){
    card.classList.add(color)
  }


  carLot.mirrorText = function (card, userInput){
    // userInput.value = card.querySelector("p").innerHTML  - mirrors text into text field to modify
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("color")){
         card.querySelector("p").innerHTML = "Description: " + userInput.value
      }
    })
  }

  return carLot

})(CarLot);
