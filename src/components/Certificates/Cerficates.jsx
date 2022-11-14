import './Certificates.css';

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right-slider.svg';
import doc1 from '../../images/doc-1.png';
import doc2 from '../../images/doc-2.png';
import doc3 from '../../images/doc-3.png';
import doc4 from '../../images/doc-4.png';

export default function Certificates() {
    return (
        <section className="certificates">
            <div className="certificates__header">
                <h3 className="certificates__title">Сертификаты качества топлива</h3>
                <div className="certificates__slider-btns">
                    <img className="certificates__slider-btn" src={arrowLeft} alt="стрелка назад." />
                    <img className="certificates__slider-btn" src={arrowRight} alt="стрелка вперед." />
                </div>
            </div>

            <ul className="certificates__docs">
                <li className="certificates__doc">
                    <img className="certificates__doc-img" src={doc1} alt="документ." />
                </li>
                <li className="certificates__doc">
                    <img className="certificates__doc-img" src={doc2} alt="документ." />
                </li>
                <li className="certificates__doc">
                    <img className="certificates__doc-img" src={doc3} alt="документ." />
                </li>
                <li className="certificates__doc">
                    <img className="certificates__doc-img" src={doc4} alt="документ." />
                </li>
            </ul>

        </section>
    )
}