import * as React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

const Main = () => {
  const images = ["/img/women1.jpg", "/img/women3.jpg", "/img/women2.jpg"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1, // Takes up remaining space
        minHeight: 0, // Prevents unnecessary stretching
      }}
    >
      {/* Image Section */}
      <ImageList
        sx={{
          width: "70vw",
          height: "auto", // Ensures the height adjusts to content
          padding: 2,
          overflow: "hidden", // Prevents overflow
        }}
        cols={3}
      >
        {images.map((item) => (
          <ImageListItem key={item}>
            <img
              src={item}
              alt="beautiful woman"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Main;
