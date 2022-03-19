import React from 'react';
import '../Css/Footer.css';
import sitelogo from '../../src/Views/images/site-logo.svg';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='sitelogo'>
          <img src={sitelogo} alt="TatvaSoft"></img>
        </div>
        <p className='copyright'>
          {/* <img src={copyright} alt="Copyright"></img> */}
           2022 Tatvasoft.com. All rights reserved
        </p>
       </div>
    </>
    )
}

export default Footer;