import './Benefits.css';

import Benefit from './Benefit/Benefit';

import certificate from '../../images/certificate.svg';
import clock from '../../images/clock.svg';
import ruble from '../../images/ruble.svg';
import map from '../../images/map.svg';
import shield from '../../images/shield.svg';
import way from '../../images/way.svg';

export default function Benefits() {
    return (
        <section className="benefits">
            <h2 className="benefits__title">Преимущества сервиса</h2>
            <div className="benefits__list">
                <Benefit
                    icon={certificate}
                    title="Качество топлива"
                    text="Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis."
                />
                <Benefit
                    icon={clock}
                    title="Бережем ваше время и нервы"
                    text="Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis."
                />
                <Benefit
                    icon={ruble}
                    title="Цена"
                    text="Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis."
                />
                <Benefit
                    icon={map}
                    title="Ваш комфорт—наша забота"
                    text="Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis."
                />
                <Benefit
                    icon={shield}
                    title="Безопасность процесса"
                    text="Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis."
                />
                <Benefit
                    icon={way}
                    title="Несколько ТС в одном месте?"
                    text="Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis."
                />
            </div>
        </section>
    )
}