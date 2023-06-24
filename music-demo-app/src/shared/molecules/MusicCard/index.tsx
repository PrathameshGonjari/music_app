import { useState, useEffect } from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import { musicListTypes } from "../../../pages/MainPage/type";
import {
  H5Typography,
  SubTitleTypography,
} from "../../constant/typography/Typography";
import { Wrapper } from "./style";

interface MusicCardProps {
  image: string;
  AlbumTitle: string;
  AlbumSubTitle: string;
  onPlayButtonClick: any;
  music: musicListTypes;
  // playMusic: boolean;
}

export default function MusicCard(props: MusicCardProps) {
  const {
    image,
    AlbumTitle,
    AlbumSubTitle,
    onPlayButtonClick,
    music,
    // playMusic,
  } = props;

  return (
    <Wrapper>
      <Card sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "70%",
            maxWidth: "70%",
          }}
          id="parent"
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <H5Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              text={AlbumTitle}
            />
            <SubTitleTypography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              text={AlbumSubTitle}
            />
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
              className="hidden-child"
              onClick={() => {
                onPlayButtonClick(music);
              }}
              aria-label="play/pause"
            // disabled={playMusic}
            >
              <PlayArrowIcon
                className="playButton"
                sx={{ height: 38, width: 38, color: "black" }}
              />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "25%" }}
          image={image}
          alt="Album Cover"
        />
      </Card>
    </Wrapper>
  );
}
