import React from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { getNavigationValue } from '@brojs/cli';
import phonePng from '../../assets/images/profile/Зерно.png';

import './index.css';

const NotFoundPage = (): React.ReactElement => {
    // const { id } = useParams();
    // Нужно наложить фон из папки '../../assets/images/profile/Зерно.png' а также сделать по центру градиентную плашку с надписью: "Страница не найдена"
    // const navigate = useNavigate();

    return (

        <div className="notfound-page">
            <div className="notfound-rect">
                <div className="notfound-message">
                    <div className="notfound-message-head">Ops...</div>
                    <div className="notfound-message-text"> К сожалению в данный момент страница не доступна. 
                        Приносим свои извинения.</div>
                </div>
            </div>
        </div>
    );
    
};

export default NotFoundPage;