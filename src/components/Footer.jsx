import React from 'react';
import {FooterS, P} from './FooterStyled'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
        <FooterS>
            <P>
                Copyright © {year}
            </P>
        </FooterS>
    </div>
  );
}

export default Footer;