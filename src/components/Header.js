import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DehazeIcon from '@material-ui/icons/Dehaze';
import { indigo } from '@material-ui/core/colors';

import "../components/Header.css";
import "../Lato/Lato-Bold.ttf";

const options = [
  {
    "name":"Home",
    "id":"/"
  },
  {
    "name":"About Me",
    "id":"/about"
  },
  {
    "name":"Properties",
    "id":"/properties"
  },
  {
    "name":"Contact Me",
    "id":"/contact"
  }
];

console.log("options",options)

const ITEM_HEIGHT = 48;

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="header">
      <Link className="header__logo" to="/">
        <img src={"/assets/logo_header.png"} alt="logo" />
      </Link>

      <div className="header__nav">
        <Link to="/" className="header__link">
          <span>Home</span>
        </Link>

        <Link to="/about" className="header__link">
          <span>About Me</span>
        </Link>

        <Link to="/properties" className="header__link">
          <span>Properties</span>
        </Link>

        <Link to="/contact" className="header__link">
          <span>Contact Me</span>
        </Link>
      </div>

      <div className="header__drop">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <DehazeIcon style={{ color: indigo[50] }}/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "24ch"
              
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option.name}
              selected={option === "Home"}
              onClick={handleClose}
              component={Link}
              to={`${option.id}`}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </nav>
  );
}

export default Header;
