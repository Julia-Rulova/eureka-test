import './Partners.css';

import lukoil from '../../images/lukoil.png';
import gazprom from '../../images/gazprom.png';
import rosneft from '../../images/rosneft.png';
import tat from '../../images/tat.png';

export default function Partners() {
    return (
        <section className="partners">
            <h3 className="partners__title">Наши партнеры</h3>
            <ul className="partners__list">
                <li><img className="partners__img" src={lukoil} alt="Лукойл." /></li>
                <li><img className="partners__img" src={gazprom} alt="Газпром." /></li>
                <li><img src={rosneft} alt="Роснефть." /></li>
                <li><img className="partners__img" src={tat} alt="Татнефть." /></li>
            </ul>

            <div className="partners__line" />

            <ul className="partners__slider-dots">
                <li className="partners__slider-dot pertners__slider-dot_active" />
                <li className="partners__slider-dot" />
                <li className="partners__slider-dot" />
            </ul>
        </section>
    )
}