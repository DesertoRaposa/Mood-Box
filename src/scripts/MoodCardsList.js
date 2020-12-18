import MoodCard from './MoodCard';
import Popup from './Popup';

export default class MoodCardsList {
  constructor() {
    this.parentElem = document.querySelector('.moodboard');
    this.moodCardsPopup = new Popup();
  }

  setData(data) {
    this.cardsData = data; /* здесь будет массив с  данными */
    this.moodCardsPopup.setDataForPopup(data);
  }

  render() {
    this.cardsData.forEach((element) => {
      const cardData = element;
      const card = new MoodCard(cardData);
      this.parentElem.appendChild(card.html);
    });
    this.moodCardsPopup.bindListeners();
  }
}
