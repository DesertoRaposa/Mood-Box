export class myRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getResource() {
    this.request = fetch(this.baseUrl)
    .then((response) => {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return Promise.reject(`Что-то пошло не так: ${response.status}`);
    })
    return this.request;
  }

}
