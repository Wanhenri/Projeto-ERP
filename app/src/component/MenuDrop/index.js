import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ButtonSimple from '../../object/ButtonSimple';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menusimple = [
    {
      id: 1, 
      name: "Welcome",
      path: "/"
    },
    {
        id: 2, 
        name: "Home",
        path: "/home"
    },
    {
        id: 3,
        name:"Profile",
        path: "/profile"
    },
    {
        id: 4,
        name:"Data",
        path: "/data"
    }
  ];


  return (
    <div>
        {menusimple.map((simple) => (
          <Link to={simple.path}>
            <ButtonSimple key={simple.id} content={simple.name} />
          </Link>
        ))}
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Add
          </Button>                
          <Menu            
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >            
            <Link to={"/product"}> <MenuItem  onClick={handleClose}>Product</MenuItem></Link>
            <Link to={"/vendor"}> <MenuItem  onClick={handleClose}>Vendor</MenuItem></Link>
          </Menu>
    </div>
  );
}
