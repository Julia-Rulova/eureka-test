import './Tables.css';

export default function Table() {
    return (
        <section className="tables">
            <h2 className="tables__title">Стоимость топлива</h2>

            <ul className="tables__list">
                <li className="tables__item">Сорт топлива</li>
                <li className="tables__item">Экологический класс</li>
                <li className="tables__item">Производитель</li>
                <li className="tables__item">Наличный расчет</li>
                <li className="tables__item">Безналичный расчет</li>
            </ul>

            <table className="table">
                <tbody>
                    <tr className="table__tr">
                        <td className="table__hight" rowSpan="5">ДТ</td>
                        <td className="table__td table__td_euro" rowSpan="3">ЕВРО-5</td>
                        <td className="table__td">Газпромнефть</td>
                        <td className="table__td">45.43 р.</td>
                        <td className="table__td">44.43 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td">Лукойл</td>
                        <td className="table__td">45.16 р.</td>
                        <td className="table__td">43.98 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td">Роснефть</td>
                        <td className="table__td">42.34 р.</td>
                        <td className="table__td">41.64 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td_euro table__td_last" rowSpan="2">ЕВРО-4</td>
                        <td className="table__td">Газпромнефть</td>
                        <td className="table__td">-</td>
                        <td className="table__td">-</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td_last">Лукойл</td>
                        <td className="table__td table__td_last">41.16 р.</td>
                        <td className="table__td table__td_last">40.67 р.</td>
                    </tr>
                </tbody>
            </table>

            <table className="table">
                <tbody>
                    <tr className="table__tr">
                        <td className="table__hight" rowSpan="8">АИ-95</td>
                        <td className="table__td table__td_euro" rowSpan="3">ЕВРО-5</td>
                        <td className="table__td">Газпромнефть</td>
                        <td className="table__td">45.43 р.</td>
                        <td className="table__td">44.43 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td">Лукойл</td>
                        <td className="table__td">45.16 р.</td>
                        <td className="table__td">43.98 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td">Роснефть</td>
                        <td className="table__td">42.34 р.</td>
                        <td className="table__td">41.64 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td_euro" rowSpan="2">ЕВРО-4</td>
                        <td className="table__td">Газпромнефть</td>
                        <td className="table__td">-</td>
                        <td className="table__td">-</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td">Лукойл</td>
                        <td className="table__td">41.16 р.</td>
                        <td className="table__td">40.67 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td_euro table__td_last" rowSpan="3">ЕВРО-3</td>
                        <td className="table__td">Роснефть</td>
                        <td className="table__td">42.34 р.</td>
                        <td className="table__td">41.64 р.</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td">Газпромнефть</td>
                        <td className="table__td">-</td>
                        <td className="table__td">-</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td  table__td_last">Лукойл</td>
                        <td className="table__td table__td_last">45.16 р.</td>
                        <td className="table__td table__td_last">43.98 р.</td>
                    </tr>
                </tbody>
            </table>
        </section >
    )
}