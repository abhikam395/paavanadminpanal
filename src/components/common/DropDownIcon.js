import React from 'react';
import './../../assets/scss/common.scss';

import dropDownIcon from './../../assets/icons/dropdown-icon.png';

export default function DropDownIcon(){
    return (
        <img src={dropDownIcon} 
            alt="dropdown-icon" 
            className="dropdown-icon"/>
        )
}