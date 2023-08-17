import { Box, Typography } from "@mui/material";
import "./FooterCard.css";

interface FooterCardProps {
  uri: string;
  title: string;
  subtitle: string;
}

const FooterCard = ({ uri, title, subtitle }: FooterCardProps) => {
  return (
    <Box className="card-container">
      {uri && <img className="card-img" src={uri} alt="card-img" />}
      <Box className="card-data">
        {title && <Typography>{title}</Typography>}
        {subtitle && (
          <Typography variant="body2" className="ellipsis two">
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FooterCard;
