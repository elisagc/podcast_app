import { Box, Typography } from "@mui/material";
import "./Card.css";

interface CardProps {
  uri: string;
  title: string;
  subtitle: string;
}

const Card = ({ uri, title, subtitle }: CardProps) => {
  return (
    <Box className="card-container">
      <img className="card-img" src={uri} alt="card-img" />
      <Box className="card-data">
        <Typography>{title}</Typography>
        <Typography>{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
