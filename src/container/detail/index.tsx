import React from 'react';
import Heading from '../../components/heading';
import { HeadingVariant } from '../../components/heading/types';
import { useParams } from 'react-router-dom';

import bibopPng from '../../assets/images/profile/Кабан.png';
import './index.css';

const DetailPage = (): React.ReactElement => {
  const { id } = useParams();
  return (
    <div className="block">
      <div className="my-class"></div>
      <div className="block-1">
        <div className="icons"><img src={bibopPng} className="biboppng" /></div>
        <div className="details">
          <div className="detail">Детали</div>
          <div className="string">
            <div className="padd">Создатель:</div>
            <div className="padd">Cheburasha</div>
          </div>
          <div className="string">
            <div className="padd">Владелец:</div>
            <div className="padd">Krok Gena</div>
          </div>
          <div className="string">
            <div className="padd">Сеть:</div>
            <div className="padd">BNB Chain</div>
          </div>
          <div className="string">
            <div className="padd">ID токена:</div>
            <div className="padd">1300000000805</div>
          </div>
        </div>
      </div>
      <div className="block-2">
        <div className="profile-description">
          <div className="cyberpunk">Cyberpunk edition</div>
          <div className="bibop">Gold Rapper Bibop</div>
          <div className="price">Цена:</div>
          <div className="bibop">15 USDT</div>
          <div className="price">Предложения:</div>
          <table className="table">
            <tr>
              <th>Из</th>
              <th>Срок действия</th>
              <th>Цена предложения</th>
            </tr>
            <tr>
              <td>Crypto_life45</td>
              <td>In 3 Days</td>
              <td>1.5 USDT</td>
            </tr>
            <tr>
              <td>Paradise</td>
              <td>In 1 Days</td>
              <td>1.53 USDT</td>
            </tr>
          </table>
        </div>
        <div className="buttons">
          <button className = "button">Купить сейчас</button>
          <button className = "button">Предложить цену</button>
        </div>
      </div> 
    </div>
  );
};

export default DetailPage;