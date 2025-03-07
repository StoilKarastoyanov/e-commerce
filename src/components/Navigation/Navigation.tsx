import { Box } from '@mui/material';
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
