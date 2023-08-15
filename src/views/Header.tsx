import { Box } from "@mui/material";
import Search from "../components/Search";

const Header = () => {
  return (
    <Box id="header" sx={{ paddingX: { xs: 2, md: 0 } }}>
      <Search />
    </Box>
  );
};

export default Header;
