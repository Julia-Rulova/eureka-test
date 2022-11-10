import './Navigation.css';

import arrow from "../../images/arrow-down.svg";

export default function Navigation() {
    return (
        <section className="nav">
            <ul className="nav__list">
                <li className="nav__item">Доставка топлива</li>
                <li className="nav__item">Топливные карты<img className="nav__arrow" src={arrow} alt="стрелка." /></li>
                <li className="nav__item">АЗС<img className="nav__arrow" src={arrow} alt="стрелка." /></li>
                <li className="nav__item">Цены на топливо</li>
                <li className="nav__item">О компании<img className="nav__arrow" src={arrow} alt="стрелка." /></li>
                <li className="nav__item">Контакты</li>
            </ul>
        </section>
    )
}