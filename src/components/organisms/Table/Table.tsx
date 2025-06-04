import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

export interface TableColumn {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface Props {
  columns: TableColumn[];
  data: any[];
}

const AppTable: React.FC<Props> = ({ columns, data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(col => (
            <TableCell key={col.accessor}>{col.header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, idx) => (
          <TableRow key={idx}>
            {columns.map(col => (
              <TableCell key={col.accessor}>
                {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AppTable;
