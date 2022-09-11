import React, { FC } from 'react';
import { PopupDesc, PopupTime, PopupWrapper } from './ExtraHeader.styled';

const App:FC = () => {
    return (
        <PopupWrapper>
            <PopupDesc>
                Омск, ул.Фрунзе, д. 80
            </PopupDesc>
            <PopupTime>
                Пн - Пт: 11.00 - 19.00, Сб - Вс: 11.00 - 19.00
            </PopupTime>
            <PopupDesc>
                Заказать звонок
            </PopupDesc>
        </PopupWrapper>
    );
}

export default App;
