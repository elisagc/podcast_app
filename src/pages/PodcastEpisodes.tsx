import { Box, CircularProgress } from "@mui/material";
import { format } from "date-fns";
import { Fragment } from "react";
import { ReactComponent as Clock } from "../assets/common/clock.svg";
import { ReactComponent as Pause } from "../assets/media/pause.svg";
import { ReactComponent as Play } from "../assets/media/play.svg";

import Hero from "../views/components/Hero";
import "../components/Player/AudioPlayer.css";
import Table, { TableCard, TableLabel } from "../components/Table";
import { usePodcast } from "../hooks/usePodcast";

import { usePlayer } from "../hooks/usePlayer";
import { PodcastColumn, PodcastEpisode } from "../models/podcast";
import { Control } from "../components/Player/Controls";

const PodcastEpisodes = () => {
  const { podcastEpisodesList, loading } = usePodcast();
  const [podCast, ...collection] = podcastEpisodesList;

  const { currentIndex, isPlaying, handleTogglePlay, setCurrentIndex } =
    usePlayer();

  const columns: PodcastColumn[] = [
    {
      header: "#",
      render: ({ index }) => {
        const isCurrentTrack = index === currentIndex;
        const handleOnClick = isCurrentTrack
          ? handleTogglePlay
          : () => setCurrentIndex(index);
        return (
          <Control isSmall onClick={handleOnClick}>
            {isCurrentTrack ? isPlaying ? <Pause /> : <Play /> : <Play />}
          </Control>
        );
      },
    },
    {
      header: "Title",
      render: ({ row }) => (
        <TableCard
          uri={row.artworkUrl600}
          title={row.collectionName}
          subtitle={row.trackName}
        />
      ),
    },
    {
      header: "Topic",
      render: ({ row: { description } }: { row: PodcastEpisode }) => (
        <TableLabel
          label={!description?.length ? "No description provided" : description}
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
    {
      header: (
        <Box justifyContent="center" display="flex" component="span">
          <Clock />
        </Box>
      ),
      render: ({ row }) => (
        <TableLabel label={format(new Date(row.releaseDate), "hh:mm")} />
      ),
    },
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Fragment>
      <Hero podCast={podCast} />
      <Table columns={columns} rows={collection} />
    </Fragment>
  );
};

export default PodcastEpisodes;
