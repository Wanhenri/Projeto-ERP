import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

import Button from '../../object/Btn'

export const Wrapper = styled.section`
  margin-top: 85px;
`;

export const Container = styled.section`
  width: 100%;
  margin: 10px auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

`;


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, code, code2) {
  return { name, code, code2 };
}

const rows = [
  createData('teste_1', 159, 6.0),
  createData('teste_2', 237, 6.0),
  createData('teste_3', 262, 6.0),
  createData('teste_4', 305, 6.0),
  createData('teste_5', 356, 16.0),
];

const info = [
  {
    id: 1, 
    name: "Add Product",
    path: "/product"
  },  {
    id: 2, 
    name: "Add Vendor",
    path: "/vendor"
  }
]

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Wrapper>
        <Link to={props.path}>
          <Button style={{marginBottom:20 }}>{props.button}</Button>
        </Link>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>{props.name}</TableCell>
                <TableCell align="left">{props.code}</TableCell>
                <TableCell align="left">{props.price}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.code}</TableCell>
                  <TableCell align="left">{row.code2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Wrapper>
  );
}