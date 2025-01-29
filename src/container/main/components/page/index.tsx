import React from 'react';
import Image_Cat from '/src/assets/images/Cat.png';
import Image_Cat_bg from '/src/assets/images/Back cat.png';
import Caban from '/src/assets/images/Kaban.png';
import Monkey from '/src/assets/images/Monkey.png';
import Hero from '/src/assets/images/Hero.png';

import './index.css';

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className='my-class'></div>
            <div className="title-block">
                <div className="title-part">
                    <div className='nft-market'>
                        NFT МАРКЕТ
                    </div>
                    <div className='with-discounts'>
                        СО СКИДКАМИ
                    </div>
                    <div className='two-buttoms'>
                        <div className="button-buy-nft">
                        Купить NFT
                        </div>
                        <div className="button-galery">
                        Галерея
                        </div>
                        <div className='text-about-nft'>
                        NFT, также уникальный токен - вид криптографических токенов, каждый <br></br>
                        экземпляр которых уникален и не может быть обменян или замещён другим <br></br>
                        аналогичным токеном, хотя обычно токены взаимозаменяемы по своей природе.
                        </div>
                    </div>
                </div>
                <div className="logo-part">                
                    <img src={Image_Cat} alt="Cat" className="cat-logo" />
                    <img src={Image_Cat_bg} alt="Cat background" className="undercat-logo" />
                </div>
                
            </div>

            <div className='down-block'>
                <div className="invis-icon">
                    <div className="icons"></div>
                    <img src={Caban} alt="Крутой кабан" className="nft-icon" />
                    <div className='button'></div>
                </div>
                <div className="invis-icon">
                    <div className="icons"></div>
                    <img src={Monkey} alt="Крутая обезъяна" className="nft-icon" />
                    <div className='button'></div>
                </div>
                <div className="invis-icon">
                    <div className="icons"></div>
                    <img src={Hero} alt="Скрытный герой" className="nft-icon" />
                    <div className='button'></div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
