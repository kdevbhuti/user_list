import React from "react";
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useStyles from "./tableHeadStyle";

const TableHeadComponent = () =>{
    const classes = useStyles();
    return(
        <TableHead className={classes.tableHead}>
            <TableRow>
                <TableCell align="center" component="th" scope="row">Profile Image</TableCell>
                    <TableCell align="center" >User Id</TableCell>
                    <TableCell align="center">First Name</TableCell>
                    <TableCell align="center">Last Name&nbsp;</TableCell>
                    <TableCell align="center">Email&nbsp;</TableCell>
            </TableRow>
      </TableHead>
    )
}

export default TableHeadComponent