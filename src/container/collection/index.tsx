import React from 'react';

import './index.css';
import { Link } from 'react-router-dom';
import { getNavigationValue } from '@brojs/cli';

import PixelMen from '/src/assets/images/PixelMan.png';
import HarmonyJapan from '/src/assets/images/HarmonyJapan.png';
import NatureCity from '/src/assets/images/NatureCity.png';


const Collection = (): React.ReactElement => {
    return(
    <div className='collection-page-first'>
        <div className="collection-app">
        <header className="collection-app-header">
            <div className="collection-icons">
            <div className="collection-icon">
                <img src={PixelMen} alt="NFT with Pixel Mans" />
                <p>Pixel Man</p>
            </div>
            <div className="collection-icon">
                <img src={HarmonyJapan} alt="NFT with Japans homes" />
                <p>Harmony of Japan</p>
            </div>
            <div className="collection-icon">
                <img src={NatureCity} alt="NFT with nature city house" />
                <p>Nature city</p>
            </div>
            <div className="collection-icon">
                <img src={PixelMen} alt="NFT with Pixel Mans" />
                <p>Pixel Man 2</p>
            </div>
            </div>
            <div className="collection-collections">
            <p>Ваши коллекции:</p>
            </div>
            <div className='collection-answer-collections'>
                <p>В данный момент у вас нет коллекций.</p>
            </div>
        </header>
        </div>
    </div>
    );
};

export default Collection;