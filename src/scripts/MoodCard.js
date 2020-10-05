export class MoodCard {
  constructor(data) {
    this.link = data.link;
    this.tags = data.tags;
    this.id = data.id;

    this.create();
    }

  getTagsHTML() {
    let result = [];
    this.tags.forEach((tag) => {
      result.push(`<a class="tag" href="#">${tag}</a>`);
    });
    return result.join(', ');
  }

  create() {
    const element = document.createElement('div');
    element.classList.add("moodboard__card");
    element.id = this.id;
    element.innerHTML = `
      <div class="card__cover" href="#"> </div>
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

