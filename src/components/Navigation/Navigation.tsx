import { Box } from '@mui/material';
import * as React from 'react';
import Dropdown from '../Dropdown';
import { categories, colors, sizes } from '../constants';



const Navigation = () => {
  return (
    <Box>
      <Dropdown {...categories} />
      <Dropdown {...colors} />
      <Dropdown {...sizes} />
    </Box>
  )
};

export default Navigation;
