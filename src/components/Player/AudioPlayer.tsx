import { Box } from "@mui/material";
import { usePlayer } from "../../hooks/usePlayer";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const props = usePlayer();

  return (
    <Box className="container">
      <Controls {...props} />
      <ProgressBar {...props} />
      <VolumeControl {...props} />
    </Box>
  );
};

export default AudioPlayer;
