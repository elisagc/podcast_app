import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "./Slider";

const ProgressBar = ({
  progressValue,
  durationValue,
  handleChangeProgress,
}: {
  progressValue: number;
  durationValue: number;
  handleChangeProgress: (newValue: number) => void;
}) => {
  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };
  return (
    <Box className="progress-bar">
      <Typography width={50}>{formatTime(progressValue)}</Typography>
      <Slider
        step={1}
        value={progressValue}
        min={0}
        max={durationValue}
        onChange={(_, value) => {
          const newValue = value as number;
          !isNaN(newValue) && handleChangeProgress(newValue);
        }}
      />
    </Box>
  );
};

export default ProgressBar;
