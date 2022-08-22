import React, { FC } from 'react';
import { PopupDesc, PopupTime, PopupWrapper } from './ExtraHeader.styled';

const App:FC = () => {
    return (
        <PopupWrapper>
            <PopupDesc>
                Омск, ул. Поликарпова, д. 27
            </PopupDesc>
            <PopupTime>
                Пн - Пт: 10.00 - 20.00, Сб - Вс: 11.00 - 19.00
            </PopupTime>
            <PopupDesc>
                Заказать звонок
            </PopupDesc>
        </PopupWrapper>
    );
}

export default App;
