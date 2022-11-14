import './Reviews.css';

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right-slider.svg';
import Review from './Review/Review';

export default function Reviews() {
    return (
        <section className="reviews">
            <div className="reviews__header">
                <h3 className="reviews__title">Отзывы</h3>
                <div className="reviews__btns">
                    <img className="reviews__slider-btn" src={arrowLeft} alt="стрелка назад." />
                    <img className="reviews__slider-btn" src={arrowRight} alt="стрелка вперед." />
                </div>
            </div>

            <div className="reviews__list">
                <Review
                    name="Гусев Вячеслав"
                    job="Индивидуальный предприниматель"
                    text="Velit, lectus sit urna tincidunt augue. Cursus vulputate pellentesque faucibus euismod. Diam pharetra, non, ut integer dui feugiat porttitor at. Non, dignissim enim viverra fringilla sit. Etiam justo a dignissim sociis vitae, nisi, justo, feugiat."
                />
                <Review
                    name="Зеленов Евгений"
                    job="Гененеральный директор трансопртной компании"
                    text="Mi auctor sit habitasse sed mi cras ullamcorper massa sed. In augue fames sodales pretium, at scelerisque. Pulvinar a mattis pharetra mi, aliquet sem tristique lorem eleifend. Nisl, scelerisque ut libero, pellentesque. Tincidunt vestibulum volutpat lacus imperdiet morbi vulputate tristique facilisi."
                />
            </div>

            <button className="reviews__read-btn" type="button">Читать все отзывы</button>
        </section>
    )
}