import * as React from 'react';
import { Box } from '@mui/material';
import { HeaderStyles } from './HeaderStyles';
import UserManagement from '../UserManagement';
import Navigation from '../Navigation';
import ShoppingCart from '../ShoppingCart';

const Header = () => {
  return (
    <Box sx={HeaderStyles}>
      <Navigation />
      <ShoppingCart />
      <UserManagement />
    </Box >
  );
};

export default Header;
