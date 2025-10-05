import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>Study At:Shree Nepal National Secondary School Manawa (Baderwa) Parsa-9</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/developer_pawan093/?hl=en">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://github.com/pawansahaniofficial">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/developerpawan093">
            <Facebook color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
