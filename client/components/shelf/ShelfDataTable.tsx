import Link from 'next/link';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Shelf } from '@/utils/interfaces';
import { useRouter } from 'next/navigation';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ShelfDataTable = ({ shelves }: { shelves: Shelf[] }) => {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-between items-start gap-10 col-start-1 col-span-1 md:col-span-2 row-start-1 row-span-1'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Shelf Name</StyledTableCell>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Shelf ID</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {shelves.map((shelf) => (
              <TableRow
                key={shelf.id}
                className='hover:bg-slate-100 hover:cursor-pointer'
                onClick={() => router.push(`/shelf/${shelf.id}`)}
              >
                <StyledTableCell>{shelf.name}</StyledTableCell>
                <StyledTableCell>
                  {shelf.serialNumber}
                </StyledTableCell>
                <StyledTableCell>{shelf.id}</StyledTableCell>
                <StyledTableCell>{shelf.date}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link href='/shelf/new'>
        <button className='bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-sm text-white self-end text-sm'>
          Add Shelf
        </button>
      </Link>
    </div>
  );
};

export default ShelfDataTable;
