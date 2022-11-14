import './Benefit.css';

export default function Benefit({ icon, title, text }) {
    return (
        <article className="benefit">
            <img className="benefit__icon" src={icon} alt="иконка." />
            <div className="benefit__text-container">
                <h4 className="benefit__title">{title}</h4>
                <p className="benefit__text">{text}</p>
            </div>
        </article>
    )
}