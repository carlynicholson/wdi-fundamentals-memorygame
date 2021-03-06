const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "https://res.cloudinary.com/df6sigxz7/image/upload/v1583166627/queen-of-hearts_y733gt.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "https://res.cloudinary.com/df6sigxz7/image/upload/v1583166627/queen-of-diamonds_xl1brj.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "https://res.cloudinary.com/df6sigxz7/image/upload/v1583166627/king-of-hearts_oln0nc.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "https://res.cloudinary.com/df6sigxz7/image/upload/v1583166627/king-of-diamonds_bh3mty.png"
	},
	];
	const cardsInPlay = [];
	
	function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
	}
	
	
	function flipCard() {
		let cardId = this.getAttribute('data-id');
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	}
	
	function createBoard(){
		for (let i = 0; i < cards.length; i++) {
			let cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			cardElement.setAttribute('data-id' ,i);
			document.getElementById('game-board').appendChild(cardElement);
			cardElement.addEventListener('click', flipCard);
		}
	}
	
	createBoard();