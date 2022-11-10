import './Delivery.css';
import './Fast.css';

import InputMask from 'react-input-mask';

export default function Delivery() {
    return (
        <section className="delivery">
            <h1 className="delivery__title">Доставка топлива</h1>

            <article className="fast">
                <h2 className="fast__title">Быстрый <span className="fast__title_span">заказ топлива</span></h2>

                <form className="fast__form">
                    <div className="fast__inputs-container">
                        <div className="fast__input-container">
                            <label className="fast__input-label" htmlFor="name">Ваше имя</label>
                            <input type="text" className="fast__input" id="name" placeholder="Имя" required></input>
                        </div>
                        <div className="fast__input-container">
                            <label className="fast__input-label" htmlFor="phone">Номер телефона</label>
                            <InputMask className="fast__input" id="phone" placeholder="+7 (___) ___-__-__" mask="+7 (999) 999-99-99" maskChar="_" required></InputMask>
                        </div>
                        <button className="fast__submit-btn" type="submit">Заказать топливо</button>
                    </div>

                    <div className="fast__check-container">
                        <input className="fast__check" type="checkbox" required></input>
                        <p className="fast__check-label">Я согласен с условиями обработки данных</p>
                    </div>
                </form>
            </article>
        </section>
    )
}