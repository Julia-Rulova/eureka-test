import './WorkCard.css';

import arrow from '../../../images/arrow-right.svg';

export default function WorkCard({ icon, time, title, description, isArrow, descriptionTwo }) {
    return (
        <article className="card">
            <div className="card__header">
                <img className="card__icon" src={icon} alt="иконка." />
                <div className="card__time-container">
                    <p className="card__time">{time} мин.</p>
                    {isArrow &&
                        <img className="card__arrow" src={arrow} alt="стрелка." />
                    }
                </div>
            </div>
            <h4 className="card__title">{title}</h4>
            <p className="card__description">{description}</p>
            <p className="card__description card__description_two">{descriptionTwo}</p>
        </article>
    )
}