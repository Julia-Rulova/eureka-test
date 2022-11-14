import './Review.css';

export default function Review({ name, job, text }) {
    return (
        <article className="review">
            <h4 className="review__name">{name}</h4>
            <p className="review__job">{job}</p>
            <p className="review__text">{text}</p>
            <button className="review__btn" type="button">Подробнее</button>
        </article>
    )
}