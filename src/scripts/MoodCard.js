export class MoodCard {
  constructor(data) {
    this.link = data.link;
    this.tags = data.tags;

    this.create();
  }

  getTagsHTML() {
    let result = [];
    this.tags.forEach((tag) => {
      result.push(`<a class="tag" href="#">${tag}</a>`);
    })
    return result.join(', ');
  }
  
  create() {
    const element = document.createElement('div');
    element.classList.add("moodboard__card");
    element.innerHTML = `
      <a data-modal class="card__cover" href="#"> </a>
      <div class="card__like-wrap">
        <button class="card__like-icon"></button>
      </div>
      <div class="card__descr">
        <div class="card__tags">${this.getTagsHTML()}</div>
      </div>`;
    element.style.backgroundImage = `url(${this.link})`;
    this.html = element;
  }
}

