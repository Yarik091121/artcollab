import React from 'react';
import Image_Cat from '/src/assets/images/Cat.png';
import Image_Cat_bg from '/src/assets/images/Back cat.png';
import Caban from '/src/assets/images/Kaban.png';
import Monkey from '/src/assets/images/Monkey.png';
import Hero from '/src/assets/images/Hero.png';


import './index.css';
import { Link } from 'react-router-dom';
import { getNavigationValue } from '@brojs/cli';

const MainPage: React.FC = () => {
    const forceUpdate = React.useReducer(x => x + 1, 0)[1];

    return (
        <div className="main-page">
            <div className="main-page-container">
                <div className='main-bg'></div>
                <div className="main-title-block">
                    <div className="main-title-part">
                        <div className='main-nft-market'>
                            <span>NFT МАРКЕТ</span>
                        </div>
                        <div className='main-with-discounts'>
                            <span>СО СКИДКАМИ</span>
                        </div>
                        <div className='main-two-buttoms'>
                            <div className="main-button-buy-nft-wrapper">
                                <div className="main-button-buy-nft">
                                    <span>Купить NFT</span>
                                </div>
                            </div>
                            <div className="main-button-galery-wrapper">
                                <div className="main-button-galery">
                                    <span>Галерея</span>
                                </div>
                            </div>
                            <div className='main-text-about-nft'>
                                <span>NFT, также уникальный токен - вид криптографических токенов, каждый <br></br>
                            экземпляр которых уникален и не может быть обменян или замещён другим <br></br>
                            аналогичным токеном, хотя обычно токены взаимозаменяемы по своей природе.</span>
                            </div>
                            <div className="main-logo">
                                <img src={Image_Cat} alt="Cat" className="main-cat-logo" />
                                <img src={Image_Cat_bg} alt="Cat background" className="main-undercat-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="main-logo-part"></div>
                </div>

                <div className='main-down-block'>
                    <div className="main-invis-icon">
                        {/* <Link onClick={() => forceUpdate()} to={getNavigationValue('artcollab.detail')}>
                            <div className='main-button'></div>
                        </Link> */}
                        <div className='main-button'></div>
                        <div className='main-icons-wrapper'>
                            <div className="main-icons">
                                <img src={Caban} alt="Крутой кабан" className="main-nft-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="main-invis-icon">
                        <div className='main-button'></div>
                        <div className="main-icons-wrapper">
                            <div className="main-icons">
                                <img src={Monkey} alt="Крутая обезъяна" className="main-nft-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="main-invis-icon">
                        <div className='main-button'></div>
                        <div className="main-icons-wrapper">
                            <div className="main-icons">
                                <img src={Hero} alt="Скрытный герой" className="main-nft-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
