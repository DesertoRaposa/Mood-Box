import { MoodCard } from './MoodCard.js';

export class MoodCardsList {
	constructor (){
		this.parentElem = document.querySelector(".moodboard");
	}

	setData(data) {
		this.cardsData = data; //здесь будет массив с  данными
	}

	render() {
		for (let i = 0; i < this.cardsData.length; i++) {
			const cardData = this.cardsData[i]
			const card = new MoodCard(cardData); 
			this.parentElem.appendChild(card.html);
		}
	}
}
