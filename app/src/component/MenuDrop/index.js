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
    },
    {
        id: 3,
        name:"Data"
    }
  ];

  const menudropdown = [
    {
      id: 1, 
      name:"Product", 
      add:"Add New Product",
      search:"Seach Product", 
      delet:"Delete product"
    },
    {
        id: 2,
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
              <MenuItem  onClick={handleClose}>Product</MenuItem>   
              <MenuItem  onClick={handleClose}>Vendor</MenuItem>          
          </Menu>
    </div>
  );
}
