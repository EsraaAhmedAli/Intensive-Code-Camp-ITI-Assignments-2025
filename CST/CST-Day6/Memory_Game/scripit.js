// صور الكروت (اتنين من كل نوع)
const cardsArray = [
    './images/1.gif', './images/1.gif',
    './images/2.gif', './images/2.gif',
    './images/3.gif', './images/3.gif',
    './images/4.gif', './images/4.gif',
    './images/5.gif', './images/5.gif',
    './images/6.gif', './images/6.gif'
  ];
  
  // خلط الكروت
  cardsArray.sort(() => 0.5 - Math.random());
  
  // gameBoard: المكان اللي هيتحط فيه الكروت.
  const gameBoard = document.getElementById('game-board');
  const congratsMessage = document.getElementById('congrats-message');
  
  let flippedCards = []; // الكروت اللي اللاعب قلبها حاليًا
  let flippedCardIds = [];
  let matchedPairs = 0;      // عدد الأزواج اللي اللاعب اكتشفها
  
  // إنشاء الكروت
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement('img');
    card.src = './images/Moon.gif'; // الصورة الخلفية للكارت
    card.classList.add('card');
    card.setAttribute('data-id', i);   // رقم الكرت لتمييزه
    gameBoard.appendChild(card);  
  
    card.addEventListener('click', flipCard);
  }
  
  function flipCard() {
    const cardId = this.getAttribute('data-id');
  
    // منع الضغط على نفس الكارت مرتين
    if (flippedCardIds.includes(cardId)) return;
  
    this.src = cardsArray[cardId];
  
    flippedCards.push(this);
    flippedCardIds.push(cardId);
  
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
  
  function checkMatch() {
    const [card1, card2] = flippedCards;
    const [id1, id2] = flippedCardIds;
  // لو الصورتين نفس بعض والكرتين مش نفس الكرت
    if (cardsArray[id1] === cardsArray[id2] && id1 !== id2) {
      // الكروت متطابقة
      card1.removeEventListener('click', flipCard);
      card2.removeEventListener('click', flipCard);
  
      matchedPairs++;
  
      // لو خلص كل الأزواج
      //  طلع رساله تهنئه 
      if (matchedPairs === cardsArray.length / 2) {
        showCongrats();
      }
    } else {
  
      // الكروت مش متطابقة، رجعهم مقلوبين تاني
      card1.src = './images/Moon.gif';
      card2.src = './images/Moon.gif';
    }
  
    // تفريغ القيم للمرحلة القادمة
    flippedCards = [];
    flippedCardIds = [];
  }
  
  function showCongrats() {
    congratsMessage.style.display = 'block';
  }
  