export class Popup {
  constructor() {
    this.popup = document.querySelector('.popup');
    this.popup.addEventListener('click', () => {
    this.closePopup();
    });

    this.popupContent = document.querySelector('.popup__content');
    this.popupContent.addEventListener('click', (e) => { // останавливаем всплытие клика чтобы он не дошел до popup
    e.stopPropagation();
    });
  }

  bindListeners() {
    const popupTriggers = document.querySelectorAll('.moodboard__card');
    popupTriggers.forEach((cardElem) => {
    cardElem.addEventListener('click', (e) => this.clickHandler(e));
    });
  }

  clickHandler(e) {
    if (event.target.classList.contains('card__cover')) {
      const cardID = event.target.parentNode.id;

      this.cardsData.find(function (element) {
      if (cardID == element.id) {
        const popupImg = document.querySelector('.popup__photo');
        popupImg.style.backgroundImage = `url(${element.link})`;
        }
      });
    }
    this.popup.classList.remove('popup-hide');
    this.popup.classList.add('popup-visible');
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.popup.classList.remove('popup-visible');
    this.popup.classList.add('popup-hide');
    document.body.style.overflow = '';
  }

  setDataForPopup(data) {
    this.cardsData = data;
  }
}