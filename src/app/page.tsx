import { Box } from "@mui/material";
import Main from "../components/Main";
import RecentlyViewedItemsWrapper from "../components/RecentlyViewedItems/RecentlyViewedItemsWrapper";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", alignItems: 'center', flexGrow: 1, height: "100vh", paddingBottom: "2rem" }}>
      <Main />
      <RecentlyViewedItemsWrapper />
    </Box>
  );
}
