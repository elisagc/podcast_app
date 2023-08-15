import { Box, IconButton, Slider, Typography, styled } from "@mui/material";
import React from "react";
import { ReactComponent as Play } from "../assets/media/play.svg";
import { ReactComponent as Pause } from "../assets/media/pause.svg";
import { ReactComponent as Rotate } from "../assets/media/rotate.svg";
import { ReactComponent as Suffle } from "../assets/media/shuffle.svg";
import { ReactComponent as Last } from "../assets/media/last.svg";
import { ReactComponent as Next } from "../assets/media/next.svg";
import { ReactComponent as Volume } from "../assets/media/volume.svg";
import "./MediaPlayer.css";

const MediaPlayer = () => {
  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.common.white,
    height: 2.5,
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-rail": {
      height: 5,
    },
  }));

  return (
    <Box className="container">
      <Box className="controls">
        <IconButton className="control-btn">
          <Suffle />
        </IconButton>
        <IconButton className="control-btn">
          <Last />
        </IconButton>
        <IconButton className="control-btn">
          <Play />
        </IconButton>
        <IconButton className="control-btn">
          <Next />
        </IconButton>
        <IconButton className="control-btn">
          <Rotate />
        </IconButton>
      </Box>

      <Box className="progress-bar">
        <Typography>03:30</Typography>
        <CustomSlider aria-label="Volume" value={20} onChange={() => {}} />
      </Box>
      <Box className="volume">
        <IconButton className="control-btn">
          <Volume />
        </IconButton>
        <CustomSlider value={20} onChange={() => {}} />
      </Box>
    </Box>
  );
};

export default MediaPlayer;
