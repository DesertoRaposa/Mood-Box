export default class MyRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getResource() {
    this.request = fetch(this.baseUrl)
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response.json());
        }
        return Promise.reject(new Error(`Что-то пошло не так: ${response.status}`));
      });
    return this.request;
  }
}
