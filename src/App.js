
import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import useStyles from './AppStyle';
import Pagination from '@material-ui/lab/Pagination';
import TableHeadComponent from './Components/TableHeadComponent';
import TableBodyComponent from './Components/TableBodyComponent';

function App() {
  const [userList, setUserList] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const classes = useStyles();

  React.useEffect(async()=>{
    const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
    if(response){
     const result = await response.json();
      setUserList(result.data)
      setTotalPages(result.total_pages)
    }
  })

  const hansleOnPageChange = (event, page) =>{
    setCurrentPage(page)
  } 


  return (
    <div>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
         <TableHeadComponent/>
         <TableBodyComponent userList={userList}/>
        </Table>
      </TableContainer>
      <div className={classes.pagination}>
        <Pagination count={totalPages} color="primary" shape="rounded" onChange={hansleOnPageChange}/>
      </div>
    </div>
    
  );
}

export default App;
