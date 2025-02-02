import React from 'react';
import { useState, useEffect } from 'react';

import './index.css';


const CreateNFT = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    const savedOutputText = sessionStorage.getItem('outputText');
    if (savedOutputText) {
      setOutputText(savedOutputText);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setOutputText(inputValue);
    sessionStorage.setItem('outputText', inputValue);
  };

    return (
        <div className="create-nft-page-first">
          <header className="create-nft-header">
            <div className="create-nft-box">
                <div className="create-nft-input-field">
                    <input type="text" value={inputValue} onChange={handleChange} placeholder="Введите запрос на создание NFT&#10; (Обрабатывается AI GigaChat)" />
                    <button onClick={handleSubmit}>Отправить</button>
                </div>
                <p>{outputText}</p>
            </div>
            <div className="create-nft-box">
                <div className="create-nft-rectangle">
                <div className="content">
                    Здесь появится ваша картинка (когда-нибудь :'( )
                </div>
                </div>
            </div>
          </header>
        </div>
      );
};

export default CreateNFT;