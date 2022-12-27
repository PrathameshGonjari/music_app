import * as React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import {
  H5Typography,
  SubTitleTypography,
} from "../../constant/typography/Typography";
import { Wrapper } from "./style";

interface MusicCardProps {
  image: string;
  AlbumTitle: string;
  AlbumSubTitle: string;
}

export default function MusicCard(props: MusicCardProps) {
  const { image, AlbumTitle, AlbumSubTitle } = props;

  return (
    <Wrapper>
      <Card sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: 430,
            maxWidth: 430,
          }}
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
            <SubTitleTypography text={AlbumSubTitle} />
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={image}
          alt="Album Cover"
        />
      </Card>
    </Wrapper>
  );
}
