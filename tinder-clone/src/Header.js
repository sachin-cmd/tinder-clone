import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
    return (
        <div className="header">
            {/* <h2>Iam a header</h2> */}
            <IconButton>
            <PersonIcon  fontSize="large"  className="header__icon"/>
            </IconButton>
            <IconButton>

            <img
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG6.png"
            alt="" />
             </IconButton>

<IconButton>
            <ForumIcon  fontSize="large"  className="header__icon" />
            </IconButton>

            
        </div>
    )
}

export default Header
