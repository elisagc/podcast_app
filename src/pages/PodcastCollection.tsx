import { Fragment } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { format } from "date-fns";
import { ReactComponent as Clock } from "../assets/common/clock.svg";
import { ReactComponent as Play } from "../assets/media/play.svg";
import Table, { TableCard, TableLabel } from "../components/Table";
import Hero from "../components/Hero";
import { usePodcast } from "../hooks/usePodcast";
import { PodcastCollectionColumn } from "../models/collection";
import "../components/MediaPlayer.css";

const PodcastCollection = () => {
  const { podcastCollectionList, loading } = usePodcast();
  const [podCast, ...collection] = podcastCollectionList;

  const columns: PodcastCollectionColumn[] = [
    {
      header: "#",
      render: (row) => (
        <IconButton className="control-btn">
          <Play />
        </IconButton>
      ),
    },
    {
      header: "Title",
      render: (row) => (
        <TableCard
          uri={row.artworkUrl600}
          title={row.collectionName}
          subtitle={row.trackName}
        />
      ),
    },
    {
      header: "Topic",
      render: (row) => (
        <TableLabel
          label={row.description ?? "No description provided"}
          className="ellipsis two"
        />
      ),
    },
    {
      header: "Released",
      render: (row) => (
        <TableLabel label={format(new Date(row.releaseDate), "dd/MM/yy")} />
      ),
    },
    {
      header: (
        <Box justifyContent="center" display="flex" component="span">
          <Clock />
        </Box>
      ),
      render: (row) => (
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

export default PodcastCollection;
