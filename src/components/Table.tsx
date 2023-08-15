import {
  Avatar,
  Box,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PodcastSearchColumn } from "../models/podcast";
import { PodcastCollectionColumn } from "../models/collection";
import "./Table.css";

interface TableProps {
  columns: PodcastSearchColumn[] | PodcastCollectionColumn[];
  rows: any[];
}

interface TableCardProps {
  uri: string;
  title: string;
  subtitle: string;
}

interface TableLabelProps {
  label?: string;
  className?: string;
}

export const TableCard = ({ uri, title, subtitle }: TableCardProps) => {
  return (
    <Box className="card-container">
      <Avatar src={uri} variant="rounded" />
      <Box>
        <Typography className="ellipsis one" variant="body2">
          {title}
        </Typography>
        <Typography className="ellipsis one">{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export const TableLabel = ({ label, className }: TableLabelProps) => {
  return (
    <Typography variant="body1" className={className}>
      {label}
    </Typography>
  );
};

const Table = ({ columns, rows }: TableProps) => {
  return (
    <TableContainer>
      <MUITable>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>
                <Typography variant="body1">{column.header}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {columns.map((column, index) => (
                <TableCell key={index}>{column.render(row)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
