import '../blocks/index.css';

import { MoodCard } from './MoodCard.js';
import { MoodCardsList} from './MoodCardsList.js';
import { myRequest} from './myRequest.js';

const moodCardsList = new MoodCardsList();
const myReq = new myRequest ('http://localhost:3000/initialCards');

myReq.getResource()
    .then(result => {
        moodCardsList.setData(result);
        moodCardsList.render();
    })
    .catch(err => {
        console.log(`Ошибка: ${err}`);
    })