import * as React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Box } from '@mui/material';
import { HeaderStyles } from './HeaderStyles';

const Header = () => {
  return (
    <Box >
      <Box sx={HeaderStyles}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </Box>
    </Box>
  );
};

export default Header;
