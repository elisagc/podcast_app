import { Box } from "@mui/material";
import AudioPlayer from "../components/Player/AudioPlayer";
import { usePlayer } from "../hooks/usePlayer";
import FooterCard from "./components/FooterCard";

const Footer = () => {
  const {
    playList: [podcast],
  } = usePlayer();

  return (
    <Box id="footer" bgcolor="background.paper">
      <FooterCard
        {...(podcast && {
          uri: podcast.artworkUrl100,
          subtitle: podcast.collectionName,
          title: podcast.artistName,
        })}
      />
      <AudioPlayer />
    </Box>
  );
};

export default Footer;
