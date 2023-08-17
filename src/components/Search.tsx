import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, styled } from "@mui/material";
import { ChangeEvent, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../assets/common/back.svg";
import "./Search.css";

interface SearchProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  url?: string | null;
}
const Search = ({ handleOnChange, url }: SearchProps) => {
  const navigate = useNavigate();

  const BackButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.common.white,
    height: 50,
    width: 50,
    borderRadius: 15,
    marginRight: "1rem",
    background: theme.palette.background.paper,
    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
      borderRadius: "15px",
    },
  }));

  return (
    <Fragment>
      {url && (
        <BackButton onClick={() => navigate(url)}>
          <Back />
        </BackButton>
      )}
      <Box bgcolor="background.paper" className="search">
        <SearchIcon />
        <InputBase
          placeholder="Podcast"
          className="input"
          onChange={handleOnChange}
        />
      </Box>
    </Fragment>
  );
};

export default Search;
