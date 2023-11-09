import { useEffect , useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const MuiTable = () => {
    const [books,setBooks] = useState()
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => {
          console.log(response.data)
  
          setBooks(response.data)
        
         })
          .catch(error => {
            console.log(error)
          })
    },[])
    return(
        books&&(
            <TableContainer component={Paper}>
             <Table sx={{ bgcolor:'primary.main',border:'1px solid white',borderRadius:'5px'}} 
             style={{color:'white'}} 
             aria-label="simple-table">
               <TableHead>
                 <TableRow>
                   <TableCell align='center' style={{color:'black'}}>Name</TableCell>
                   <TableCell align='center' style={{color:'black'}}>ID</TableCell>
                   <TableCell align='center' style={{color:'black'}}>Phone&nbsp;</TableCell>
                   <TableCell align='center' style={{color:'black'}}>Email&nbsp;</TableCell>
                   <TableCell align='center' style={{color:'black'}}>Username&nbsp;</TableCell>
                   <TableCell align='center' style={{color:'black'}}>Address&nbsp;</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {books.map((book) => (
                   <TableRow key={book.id}>
                     <TableCell component="th" scope="book" align='center' style={{color:'white'}}>{book.name}</TableCell>
                     <TableCell align='center' style={{color:'white'}}>{book.id}</TableCell>
                     <TableCell align='center' style={{color:'white'}}>{book.phone}</TableCell>
                     <TableCell align='center' style={{color:'white'}}>{book.email}</TableCell>
                     <TableCell align='center' style={{color:'white'}}>{book.username}</TableCell>
                     <TableCell align='center' style={{color:'white'}}>{book.address.street},{book.address.suite},{book.address.city},{book.address.zipcode},{book.address.geo.lat},{book.address.geo.lng}
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
    ) );
}