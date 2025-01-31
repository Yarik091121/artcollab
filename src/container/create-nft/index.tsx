import React from 'react';

import './index.css';
import { Link } from 'react-router-dom';
import { getNavigationValue } from '@brojs/cli';


const CreateNFT = (): React.ReactElement => {
    return (
        <div className="create-nft-page-first">
          <header className="App-header">
            <div className="box">
                <div className="input-field">
                    <input type="text" placeholder="Введите запрос на создание NFT&#10; (Обрабатывается AI GigaChat)" />
                    <button>Отправить</button>
                </div>
            </div>
            <div className="box">
                <div className="rectangle">
                <div className="content">
                    <p>Здесь появится ваша картинка (когда-нибудь :'( )</p>
                </div>
                </div>
            </div>
          </header>
        </div>
      );
};

export default CreateNFT;