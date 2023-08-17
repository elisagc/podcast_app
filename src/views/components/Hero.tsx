import { Fragment } from "react";
import { Box, Hidden, Typography } from "@mui/material";
import { ReactComponent as Pause } from "../../assets/media/pause.svg";
import { ReactComponent as Play } from "../../assets/media/play.svg";
import { PodcastEpisode } from "../../models/podcast";
import Img from "../../assets/common/thubmnail.png";
import { usePlayer } from "../../hooks/usePlayer";
import { Control } from "../../components/Player/Controls";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "./Hero.css";

const Hero = ({ podCast }: { podCast: PodcastEpisode }) => {
  const { isPlaying, handleTogglePlay } = usePlayer();

  return (
    <Fragment>
      <Box className="hero-img-container">
        <img alt="hero-img" src={Img} className="hero-img" />
      </Box>
      <Box className="hero-content" sx={{ paddingX: { xs: 2 } }}>
        <Hidden smDown>
          <Control onClick={handleTogglePlay}>
            {isPlaying ? <Pause /> : <Play />}
          </Control>
        </Hidden>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          className="ellipsis one"
          maxWidth={500}
        >
          {podCast && podCast.trackName}
        </Typography>

        <Hidden smDown>
          <Box className="hero-selector">
            <SearchIcon />
            <Typography width={70} mx={1}>
              Order by
            </Typography>
            <ExpandMore />
          </Box>
        </Hidden>
      </Box>
    </Fragment>
  );
};

export default Hero;
