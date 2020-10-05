import { MoodCard } from './MoodCard.js';
import { Popup } from './Popup.js';

export class MoodCardsList {
  constructor() {
    this.parentElem = document.querySelector(".moodboard");
    this.moodCardsPopup = new Popup();
  }

  setData(data) {
    this.cardsData = data; //здесь будет массив с  данными
    this.moodCardsPopup.setDataForPopup(data);
  }
  
  render() {
    for (let i = 0; i < this.cardsData.length; i++) {
        const cardData = this.cardsData[i]
        const card = new MoodCard(cardData); 
        this.parentElem.appendChild(card.html);
    }
    this.moodCardsPopup.bindListeners();
  }
}
