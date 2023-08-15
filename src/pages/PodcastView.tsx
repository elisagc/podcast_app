import { Box, IconButton } from "@mui/material";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../assets/common/clock.svg";
import { ReactComponent as Play } from "../assets/media/play.svg";
import podcastData from "../assets/podcast.json";
import "../components/MediaPlayer.css";
import Table, { TableCard, TableLabel } from "../components/Table";
import { PodcastColumn } from "../models/podcast";

const PodcastView = () => {
  const columns: PodcastColumn[] = [
    {
      header: "#",
      render: () => (
        <IconButton
          component={Link}
          to={"/podcast-view"}
          className="control-btn"
        >
          <Play />
        </IconButton>
      ),
    },
    {
      header: "Title",
      render: ({ artworkUrl100, trackName, artistName }) => (
        <TableCard
          uri={artworkUrl100}
          title={trackName}
          subtitle={artistName}
        />
      ),
    },
    {
      header: "Topic",
      render: (row) => (
        <TableLabel label={row.shortDescription} className="ellipsis two" />
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

  return <Table columns={columns} rows={podcastData.results} />;
};

export default PodcastView;
