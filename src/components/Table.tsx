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
import { PodcastColumn } from "../models/podcast";

interface TableProps {
  columns: PodcastColumn[];
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
    <Box display="flex" gap={2} alignItems="center">
      <Avatar src={uri} variant="rounded" />
      <Box>
        <Typography className="ellipsis one">{title}</Typography>
        <Typography className="ellipsis one" variant="body2">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export const TableLabel = ({ label, className }: TableLabelProps) => {
  return (
    <Typography variant="body2" className={className} maxWidth={250}>
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
                <Typography variant="body2">{column.header}</Typography>
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
                <TableCell width={column.width} key={index}>
                  {column.render({ row, index: rowIndex })}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
