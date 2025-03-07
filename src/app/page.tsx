import { Box } from "@mui/material";
import Main from "../components/Main";
import RecentlyViewedItems from "../components/RecentlyViewedItems";
import { HomeWrapperStyles } from "./HomeStyles";

export default function Home() {
  return (
    <Box sx={HomeWrapperStyles}>
      <Main />
      <RecentlyViewedItems />
    </Box>
  );
}
