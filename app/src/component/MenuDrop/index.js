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
      id: 1, 
      name:"View", 
      add:"Open table",
      search:"View table", 
      delet:"Extract Table"
    },
    {
      id: 2, 
      name:"Product", 
      add:"Add New Product",
      search:"Seach Product", 
      delet:"Delete product"
    },
    {
        id: 3,
        name:"Vendor", 
        add:"Add New Vendor",
        search:"Seach Vendor", 
        delet:"Delete Vendor"
    }
  ];

  return (
    <div>
        {menusimple.map((simple) => (
            <ButtonSimple key={simple.id} content={simple.name} />
        ))}
        {menudropdown.map((drop) => (
        <>
        <Button key={drop.id} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {drop.name}
        </Button>                
        <Menu            
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >            
            <MenuItem key={drop[1]} onClick={handleClose}>{drop.add}</MenuItem>   
            <MenuItem key={drop[2]} onClick={handleClose}>{drop.search}</MenuItem>
            <MenuItem key={drop[3]} onClick={handleClose}>{drop.delet}</MenuItem>           
        </Menu>
        </>
        ))} 
    </div>
  );
}
