import { Box } from '@mui/material';
import * as React from 'react';
import { FooterStyles } from './FooterStyles';

function Footer() {
  // footer fixed to the bottom of the screen with linear gradient background transpearant from the top and lightgray from the bottom

  return (
    <Box sx={FooterStyles}>
      Footer
    </Box>
  );
}

export default Footer;
