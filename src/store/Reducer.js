import cardImage1 from '../assets/cardImage1.jpg';
import cardImage2 from '../assets/cardImage2.jpg';
import cardImage3 from '../assets/cardImage3.jpg';
import cardImage4 from '../assets/cardImage4.jpg';
import cardImage5 from '../assets/cardImage5.jpg';
import cardImage6 from '../assets/cardImage6.jpg';

const INITIAL_STATE = {
    hotels: [
        {
            cardImage: cardImage1,
            cardTitle: "NewYork Hotel",
            cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum asperiores fuga aliquam vitae accusantium? Rerum quas sapiente, pariatur aliquam assumenda, impedit, dolor molestiae ipsa eos saepe ducimus id in!"
        },
        {
            cardImage: cardImage2,
            cardTitle: "Virginia Hotel",
            cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum asperiores fuga aliquam vitae accusantium? Rerum quas sapiente, pariatur aliquam assumenda, impedit, dolor molestiae ipsa eos saepe ducimus id in!"
        },
        {
            cardImage: cardImage3,
            cardTitle: "Karachi Hotel",
            cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum asperiores fuga aliquam vitae accusantium? Rerum quas sapiente, pariatur aliquam assumenda, impedit, dolor molestiae ipsa eos saepe ducimus id in!"
        },
        {
            cardImage: cardImage4,
            cardTitle: "London Hotel",
            cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum asperiores fuga aliquam vitae accusantium? Rerum quas sapiente, pariatur aliquam assumenda, impedit, dolor molestiae ipsa eos saepe ducimus id in!"
        },
        {
            cardImage: cardImage5,
            cardTitle: "NewZealand Hotel",
            cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum asperiores fuga aliquam vitae accusantium? Rerum quas sapiente, pariatur aliquam assumenda, impedit, dolor molestiae ipsa eos saepe ducimus id in!"
        },
        {
            cardImage: cardImage6,
            cardTitle: "Melbourne Hotel",
            cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum asperiores fuga aliquam vitae accusantium? Rerum quas sapiente, pariatur aliquam assumenda, impedit, dolor molestiae ipsa eos saepe ducimus id in!"
        },
    ]
}

const reducer = (state = INITIAL_STATE) => {
    return state
}
export default reducer;