import React from "react"
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useStyles from "./tableBodyStyle";

const TableBodyComponent= ({userList}) =>{
    const classes = useStyles();

    return(
        <TableBody>
        {userList.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">
              <figure className={classes.profilePic}>
                <img className={classes.img} src={row.avatar}/>
              </figure>
            </TableCell>
            <TableCell align="center" >{row.id}</TableCell>
            <TableCell align="center">{row.first_name}</TableCell>
            <TableCell align="center">{row.last_name}</TableCell>
            <TableCell align="center">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
}

export default TableBodyComponent