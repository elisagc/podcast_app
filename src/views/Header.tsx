import { Box } from "@mui/material";
import Search from "../components/Search";
import { usePodcast } from "../hooks/usePodcast";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_EPISODE, PATH_SEARCH } from "../contants";

const Header = () => {
  const { setSearchTerm } = usePodcast();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const backUrl = pathname.includes(PATH_EPISODE) ? PATH_SEARCH : null;

  return (
    <Box id="header" sx={{ paddingX: { xs: 2, md: 0 } }}>
      <Search
        handleOnChange={(e) => {
          setSearchTerm(e.target.value);
          backUrl && navigate(backUrl);
        }}
        url={backUrl}
      />
    </Box>
  );
};

export default Header;
