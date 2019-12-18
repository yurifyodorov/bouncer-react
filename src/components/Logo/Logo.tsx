import React from 'react';

import './Logo.scss';

import logo from '../../img/logo.svg';

const Logo: React.FC = () => {
    return (
        <img src={logo} className="logo" alt="logo-bouncer" />
    )
}

export default Logo;