import { IconButton } from "@mui/material";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ReactComponent as Play } from "../assets/media/play.svg";
import podcastData from "../assets/podcast.json";
import "../components/MediaPlayer.css";
import Table, { TableCard, TableLabel } from "../components/Table";
import { PodcastColumn } from "../models/podcast";

const PodcastSearch = () => {
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
      header: "Name",
      render: ({ artworkUrl100, trackName, artistName }) => (
        <TableCard
          uri={artworkUrl100}
          title={trackName}
          subtitle={artistName}
        />
      ),
    },
    {
      header: "Description",
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
  ];

  return <Table columns={columns} rows={podcastData.results} />;
};

export default PodcastSearch;
