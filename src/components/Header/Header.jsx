import './Header.css';

import logo from "../../images/logo.png";
import phone from "../../images/phone.svg";
import account from "../../images/account.svg";

export default function Header() {
    return (
        <section className="header">
            <img className="header__logo" src={logo} alt="логотип." />
            <div className="header__phone-container">
                <img className="header__phone-img" src={phone} alt="телефон." />
                <p className="header__phone">8 (495) 127-82-80</p>
            </div>
            <div className="header__btns">
                <button className="header__btn">Напишите нам</button>
                <button className="header__btn">
                    <img className="header__account-img" src={account} alt="аккаунт." />
                    Личный кабинет
                </button>
            </div>
        </section>
    )
}