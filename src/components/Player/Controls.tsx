import { Box, ButtonProps } from "@mui/material";
import { ReactElement } from "react";
import { ReactComponent as LastIcon } from "../../assets/media/last.svg";
import { ReactComponent as NextIcon } from "../../assets/media/next.svg";
import { ReactComponent as PauseIcon } from "../../assets/media/pause.svg";
import { ReactComponent as PlayIcon } from "../../assets/media/play.svg";
import { ReactComponent as RotateIcon } from "../../assets/media/rotate.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/media/shuffle.svg";
import { PlayerValues } from "../../models/player";

interface ControlProps extends ButtonProps {
  children: ReactElement;
  isSmall?: boolean;
}

export const Control = ({
  children,
  isSmall = false,
  ...props
}: ControlProps) => (
  <button {...props} className={`control-btn ${isSmall ? "small" : "large"}`}>
    {children}
  </button>
);

const Controls = ({
  handleTogglePlay,
  handleChangeProgress,
  handleNextTrack,
  handleLastTrack,
  isPlaying,
  playList,
}: PlayerValues) => {
  return (
    <Box className="controls" sx={{ flex: { xs: 1, md: 0 } }}>
      <Control>
        <ShuffleIcon />
      </Control>

      <Control onClick={handleLastTrack}>
        <LastIcon />
      </Control>

      <Control onClick={handleTogglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Control>

      <Control onClick={handleNextTrack}>
        <NextIcon />
      </Control>

      <Control onClick={() => handleChangeProgress(0)}>
        <RotateIcon />
      </Control>
    </Box>
  );
};

export default Controls;
