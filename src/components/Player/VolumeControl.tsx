import { Box } from "@mui/material";
import { ReactComponent as Volume } from "../../assets/media/volume.svg";
import "./AudioPlayer.css";
import Slider from "./Slider";

interface VolumeControlProps {
  volumeValue: number;
  handleChangeVolume: (newValue: number) => void;
}
const VolumeControl = ({
  volumeValue,
  handleChangeVolume,
}: VolumeControlProps) => {
  return (
    <Box className="volume">
      <Box className="large" display="flex" alignItems="center" ml={2}>
        <Volume />
      </Box>
      <Slider
        min={0}
        max={1}
        step={0.01}
        value={volumeValue}
        onChange={(_, newValue) => {
          handleChangeVolume(newValue as number);
        }}
      />
    </Box>
  );
};

export default VolumeControl;
