import * as React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

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
            <Image
              src={item}
              alt="beautiful woman"
              width={300} // Set a proper width
              height={400} // Set a proper height
              style={{ objectFit: "cover" }} // Ensures correct aspect ratio
              priority={true} // Improve LCP (optional)
            />
            {/* <img
              src={item}
              alt="beautiful woman"
              loading="lazy"
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Main;
