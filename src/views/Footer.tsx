import { Box } from "@mui/material";
import MediaPlayer from "../components/MediaPlayer";
import Card from "../components/Card";

const Footer = () => {
  return (
    <Box id="footer" bgcolor="background.paper">
      <Card title="Título" subtitle="subtitulo" uri="https://cataas.com/cat" />
      <MediaPlayer />
    </Box>
  );
};

export default Footer;
