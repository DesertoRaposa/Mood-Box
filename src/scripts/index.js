import '../blocks/index.css';
import MoodCardsList from './MoodCardsList';
import MyRequest from './MyRequest';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

const moodCardsList = new MoodCardsList();
const myReq = new MyRequest('http://localhost:3000/initialCards');
myReq.getResource()
  .then((result) => {
    moodCardsList.setData(result);
    moodCardsList.render();
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
