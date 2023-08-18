import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Pause } from "../assets/media/pause.svg";
import { ReactComponent as Play } from "../assets/media/play.svg";

import "../components/Player/AudioPlayer.css";
import { Control } from "../components/Player/Controls";
import Table, { TableCard, TableLabel } from "../components/Table";
import { PATH_EPISODE } from "../contants";
import { usePodcast } from "../hooks/usePodcast";
import { PodcastColumn } from "../models/podcast";
import { usePlayer } from "../hooks/usePlayer";

const PodcastSearch = () => {
  const { podcastSearchList, setPodcastSelectedId, podcastSelectedId } =
    usePodcast();
  const { isPlaying } = usePlayer();
  const navigate = useNavigate();

  const handleSelectPodcast = (id: number) => () => {
    setPodcastSelectedId(id);
    navigate(PATH_EPISODE);
  };

  const columns: PodcastColumn[] = [
    {
      header: "#",

      render: ({ row: { trackId } }) => {
        const isSelectedPodcast = trackId === podcastSelectedId;
        return (
          <Control isSmall onClick={handleSelectPodcast(trackId)}>
            {isSelectedPodcast ? isPlaying ? <Pause /> : <Play /> : <Play />}
          </Control>
        );
      },
    },
    {
      header: "Name",
      render: ({ row: { artworkUrl100, trackName, artistName } }) => (
        <TableCard
          uri={artworkUrl100}
          title={trackName}
          subtitle={artistName}
        />
      ),
    },
    {
      header: "Description",
      render: ({ row }) => (
        <TableLabel
          label={row.trackCensoredName ?? "No description provided"}
          className="ellipsis two"
        />
      ),
    },

    {
      header: "Released",
      render: ({ row }) => (
        <TableLabel label={format(new Date(row.releaseDate), "dd/MM/yy")} />
      ),
    },
  ];

  if (!podcastSearchList) {
    return (
      <Box>
        <Typography variant="h4" align="center">
          Start listening to the best podcasts
        </Typography>
        <Typography variant="h6" align="center">
          Please search your favorite podcast
        </Typography>
      </Box>
    );
  }

  return <Table columns={columns} rows={podcastSearchList} />;
};

export default PodcastSearch;
