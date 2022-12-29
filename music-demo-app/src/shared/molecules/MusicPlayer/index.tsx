import { useEffect, useRef, useState } from "react";

import Forward10Icon from "@mui/icons-material/Forward10";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Replay10Icon from "@mui/icons-material/Replay10";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";

import { musicListTypes } from "../../../pages/MainPage/type";
import {
  H5Typography,
  SubTitleTypography,
} from "../../constant/typography/Typography";
import { TinyText, Wrapper } from "./style";

interface MusicPlayerProps {
  music: musicListTypes;
  onStopButtonClick: any;
}

export default function MusicPlayer(props: MusicPlayerProps) {
  const { music, onStopButtonClick } = props;

  const [position, setPosition] = useState(0);
  const [playMusic, setPlayMusic] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0); //seconds
  const audioPlayer: any = useRef(); //refrence for audion component
  const progressBar: any = useRef(); //refrence for progress bar
  const animationRef: any = useRef(); //refrence for animation

  useEffect(() => {
    const seconds: number = Math.floor(audioPlayer?.current?.duration);
    if (seconds && !isNaN(seconds)) {
      setDuration(seconds);
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    togglePlayPause();
  }, []);

  const theme = useTheme();

  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const togglePlayPause = () => {
    const playMusicState = playMusic;
    setPlayMusic(!playMusicState);
    if (playMusic) {
      audioPlayer.current.play(); //play the audio
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause(); //pause the audio
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changeRange = (event: any) => {
    const value = event?.target?.value;
    audioPlayer.current.currentTime = value;
    setPosition(Math.floor(value));
  };

  const replayMusic = () => {
    progressBar.current.value = Number(progressBar?.current?.value - 10);
    audioPlayer.current.currentTime = progressBar?.current?.value;
    setPosition(Math.floor(progressBar.current.value));
  };

  const forwardMusic = () => {
    progressBar.current.value = Number(progressBar?.current?.value + 10);
    audioPlayer.current.currentTime = progressBar?.current?.value;
    setPosition(Math.floor(progressBar.current.value));
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setPosition(Math.floor(progressBar.current.value));
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handleStopButton = () => {
    onStopButtonClick();
    audioPlayer.current.pause();
    progressBar.current.value = 0;
    audioPlayer.current.currentTime = 0;
    setPosition(Math.floor(0));
  };

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
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <audio
              ref={audioPlayer}
              src={music.previewUrl}
              preload="metadata"
            ></audio>
            <H5Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              text={music.trackName}
            />
            <SubTitleTypography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              text={music.artistName}
            />
          </CardContent>

          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton onClick={replayMusic}>
              <Replay10Icon sx={{ height: 38, width: 38, color: "black" }} />
            </IconButton>
            <IconButton onClick={togglePlayPause} aria-label="play/pause">
              {playMusic ? (
                <PlayArrowIcon sx={{ height: 38, width: 38, color: "black" }} />
              ) : (
                <PauseCircleIcon
                  sx={{ height: 38, width: 38, color: "black" }}
                />
              )}
            </IconButton>
            {!playMusic && (
              <IconButton
                onClick={() => {
                  handleStopButton();
                  setPlayMusic((pre) => !pre);
                }}
                aria-label="play/pause"
              >
                <StopCircleIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
            )}
            <IconButton onClick={forwardMusic}>
              <Forward10Icon sx={{ height: 38, width: 38, color: "black" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "70%",
                maxWidth: "70%",
              }}
            >
              <Slider
                ref={progressBar}
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={changeRange}
                sx={{
                  color:
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                  height: 4,
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: 8,
                    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                    "&:before": {
                      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === "dark"
                          ? "rgb(255 255 255 / 16%)"
                          : "rgb(0 0 0 / 16%)"
                      }`,
                    },
                    "&.Mui-active": {
                      width: 20,
                      height: 20,
                    },
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.28,
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: -2,
                }}
              >
                <TinyText>{formatDuration(position)}</TinyText>
                <TinyText>-{formatDuration(duration - position)}</TinyText>
              </Box>
            </Box>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "25%" }}
          image={music.artworkUrl100}
          alt="Album Cover"
        />
      </Card>
    </Wrapper>
  );
}
