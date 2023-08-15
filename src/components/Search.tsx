import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";
import "./Search.css";

const Search = () => {
  return (
    <Box bgcolor="background.paper" className="search">
      <SearchIcon />
      <InputBase placeholder="Podcast" />
    </Box>
  );
};

export default Search;
