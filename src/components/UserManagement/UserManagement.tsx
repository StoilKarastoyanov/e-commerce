import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Box } from '@mui/material';
import * as React from 'react';

const UserManagement = () => {
  return (
    <Box>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </Box>
  );
};

export default UserManagement;
