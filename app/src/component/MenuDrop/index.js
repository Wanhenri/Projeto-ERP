import React from 'react';
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
        name: "Home"
    },
    {
        id: 2,
        name:"Profile"
    }
  ];

  const menudropdown = [
    {
        id_: 1, 
        name:"Product", 
        add:"Add New Product",
        search:"Seach Product", 
        delet:"Delete product"
    },
    {
        id_: 2,
        name:"Vendor", 
        add:"Add New Product",
        search:"Seach Product", 
        delet:"Delete product"
    }
  ];

  return (
    <div>
        {menusimple.map((simple) => (
            <ButtonSimple key={simple.id_} content={simple.name} />
        ))}
        {menudropdown.map((drop) => (
        <>             
        <Button key={drop.id_} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {drop.name}
        </Button>
        <Menu
            key={drop.id_}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>{drop.add}</MenuItem>
            <MenuItem onClick={handleClose}>{drop.search}</MenuItem>
            <MenuItem onClick={handleClose}>{drop.delet}</MenuItem>
        </Menu>
        </>
        ))} 
    </div>
  );
}
