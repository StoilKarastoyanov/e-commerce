import * as React from 'react';
import { Box } from '@mui/material';
import { HeaderStyles } from './HeaderStyles';
import UserManagement from '../UserManagement';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <Box sx={HeaderStyles}>
      <Navigation />
      <UserManagement />
    </Box>
  );
};

export default Header;
