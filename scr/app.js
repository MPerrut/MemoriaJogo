document.addEventListener('DOMContentLoaded', () => { 

    const cards = [
        {
          name: 'fries',
          img: 'scr/images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'scr/images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'scr/images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'scr/images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'scr/images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'scr/images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'scr/images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'scr/images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'scr/images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'scr/images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'scr/images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'scr/images/hotdog.png'
        }
      ];
    
     
    
      const grid = document.querySelector('.grid');
      const resultDisplay = document.querySelector('#result');
      let cardChosen = [];
      let cardsChosenIds = [];
      let cardsWon = [];

      function creatBoard(){
          cards.sort(() => 0.5 - Math.random());
          console.log(cards);
          for(let i = 0; i < cards.length; i++){
              const card = document.createElement('img');
              card.setAttribute('src', 'scr/images/blank.png');
              card.setAttribute('data-id', i);
              card.addEventListener('click', flipCard);
              grid.appendChild(card);
          }
      }    
      creatBoard();

      function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cards[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src',cards[cardId].img);
        if (cardChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
      }

      function checkForMatch() {
          const allCards = document.querySelectorAll('img');
          const optionOneId = cardsChosenIds[0];
          const optionTwoId = cardsChosenIds[1];
          if(optionOneId === optionTwoId) {
              alert('Você selecionou a mesma carta');
              allCards[optionOneId].setAttribute('src', 'scr/images/blank.png');
          } else if (cardChosen[0] === cardChosen[1]){
            alert('Você encontrou um par!!');
            allCards[optionOneId].setAttribute('src', 'scr/images/white.png');
            allCards[optionTwoId].setAttribute('src', 'scr/images/white.png');
            allCards[optionOneId].removeEventListener('click', flipCard);
            allCards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardChosen);

            cardChosen = [];
            cardsChosenIds = [];

          } else{
            allCards[optionOneId].setAttribute('src', 'scr/images/blank.png');
            allCards[optionTwoId].setAttribute('src', 'scr/images/blank.png');
            alert("Tente novamente");
          }  
         
          cardChosen = [];
          cardsChosenIds = [];
          resultDisplay.textContent = cardsWon.length;
          if(cardsWon.length === 6){
            cardsWon = [];
            resultDisplay.textContent = cardsWon.length;
            alert('Fim de jogo')
            endGame();
            creatBoard();
          }


      }

      function endGame(){
        for(let i = 0; i < cards.length; i++){
          grid.removeChild(grid.lastChild);
        } 
      }
});