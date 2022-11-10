import './HowWork.css';

import WorkCard from './WorkCard/WorkCard';

import cursor from '../../images/cursor.svg';
import phone from '../../images/phone-icon.svg';
import oil from '../../images/oil.svg';

export default function HowWork() {
    return (
        <section className="how-work">
            <h2 className="how-work__title">Как мы работаем</h2>
            <div className="how-work__cards">
                <WorkCard
                    icon={cursor}
                    time="1-3"
                    title="Оформление заявки"
                    description="Заполните заявку на сайте, укажите удобное для вас место приезда заправщика, сорт и количество топлива, которое хотите купить"
                    isArrow={true}
                />
                <WorkCard
                    icon={phone}
                    time="1-3"
                    title="Подтверждение заявки менеджером"
                    description="Дождитесь звонка нашего менеджера для уточнения условий заказа"
                    isArrow={true}
                />
                <WorkCard
                    icon={oil}
                    time="30-90"
                    title="Заправка вашего автомобиля"
                    description="В назначенное время приедет заправщик и заправит автомобиль топливом."
                    descriptionTwo="Если у заказчика есть действующий договор на топливные карты, то при оплате можно провести транзакцию через терминал. Переносное устройство есть у каждого заправщика"
                    isArrow={false}
                />
            </div>
        </section>
    )
}