import './DeliveryFuel.css';

import InputMask from 'react-input-mask';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';

import arrow from "../../images/arrow-down.svg";

export default function DeliveryFuel() {
    const [volumeValue, setVolumeValue] = useState(10);

    useEffect(() => {
        const maxValue = 6000;

        if (volumeValue > maxValue) {
            setVolumeValue(maxValue);
        }
    }, [volumeValue]);

    return (
        <section className="fuel">
            <div className="fuel__form-container">
                <h2 className="fuel__title">Топливо с доставкой</h2>

                <form className="fuel__form">
                    <div className="fuel__input-container">
                        <label className="fuel__input-label" htmlFor="type">Вид топлива</label>
                        <div className="fuel__custom-select">
                            <img className="fuel__select-arrow" src={arrow} alt="стрелка." />
                            <select className="fuel__select" id="type" placeholder="Укажите место" required>
                                <option>ДТ</option>
                                <option>ДТ</option>
                                <option>ДТ</option>
                            </select>
                        </div>
                    </div>
                    <div className="fuel__input-container fuel__input-container_range">
                        <label className="fuel__input-label">Объем топлива</label>
                        <input
                            className="fuel__input fuel__input_black"
                            id="volume"
                            type="number"
                            min={10}
                            max={6000}
                            step={1}
                            value={volumeValue}
                            onChange={e => setVolumeValue(e.target.value)}
                            required
                        />
                        <Slider
                            min={10}
                            max={6000}
                            step={1}
                            value={Number(volumeValue)}
                            onChange={e => setVolumeValue(e.target.value)}
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                boxSizing: "border-box",
                                width: 409,
                                color: "#098FCF",
                                padding: 0,
                                height: 2,
                                "& .MuiSlider-thumb": {
                                    height: 16,
                                    width: 16,
                                    backgroundColor: "#098FCF",
                                },
                                "& .MuiSlider-rail": {
                                    height: "50%",
                                    opacity: 0.3,
                                    backgroundColor: "#098FCF",
                                },
                                "& .MuiSlider-track": {
                                    height: "50%",
                                    border: "none",
                                },
                                ".css-eg0mwd-MuiSlider-thumb:hover, .css-eg0mwd-MuiSlider-thumb.Mui-focusVisible":
                                {
                                    boxShadow: "0 0 0 0",
                                },
                            }}
                        />
                    </div>
                    <div className="fuel__input-container">
                        <label className="fuel__input-label" htmlFor="place">Место доставки</label>
                        <input type="text" className="fuel__input" id="place" placeholder="Укажите место" required></input>
                    </div>
                    <div className="fuel__input-container">
                        <label className="fuel__input-label" htmlFor="name">Ваше имя</label>
                        <input type="text" className="fuel__input" id="name" placeholder="Имя" required></input>
                    </div>
                    <div className="fuel__input-container">
                        <label className="fuel__input-label" htmlFor="phone">Номер телефона</label>
                        <InputMask className="fuel__input" id="phone" placeholder="+7 (___) ___-__-__" mask="+7 (999) 999-99-99" maskChar="_" required></InputMask>
                    </div>
                </form>
            </div>

            <div className="fuel__result-conainer">
                <h3 className="fuel__result-title">Итого</h3>
                <div className="fuel__line" />
                <div className="fuel__price-container">
                    <p className="fuel__price">Стоимость топлива</p>
                    <p className="fuel__price">77 350.00 ₽</p>
                </div>
                <div className="fuel__line" />
                <div className="fuel__price-container">
                    <div className="fuel__price-text">
                        <p className="fuel__price">Цена за литр:</p>
                        <p className="fuel__price-description">Цена и стоимость указаны ориентировочно.
                            Точные цену и стоимость собщит наш менеджер при подтверждении заявки.</p>
                    </div>
                    <p className="fuel__price">45.50 ₽</p>
                </div>
                <div className="fuel__line" />
                <div className="fuel__price-container">
                    <div className="fuel__price-text">
                        <p className="fuel__price">Выгода:</p>
                        <p className="fuel__price-description">При цене на АЗС  49.59 ₽  за литр, цены актуальны на  23.11.2020 г. </p>
                    </div>
                    <p className="fuel__price fuel__price_bold">6 953.00 ₽</p>
                </div>
                <button type="submit" className="fuel__submit-btn">Заказать топливо</button>
            </div>
        </section>
    )
}