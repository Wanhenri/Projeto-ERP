import React, { useState } from 'react';
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


export default function SimpleTable(props) {
  const classes = useStyles();
  console.log("vendor")
  console.log(props.vendor)

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  function refreshPage(){ 
    window.location.reload(); 
}

  return (
    <Wrapper>
        <Link to={props.path}>
          <Button style={{marginBottom:20 }}>{props.button}</Button>
        </Link>
        <Button style={{marginBottom:20 }} onClick={() => this.refreshPage()}>RELOAD</Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell align="left">{props.cnpj}</TableCell>
                <TableCell align="left">{props.city}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {props.vendor.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.cnpj}</TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <Button 
                      style={{marginBottom: 3, backgroundColor: "var(--color-first)" }}
                      onClick={() => props.onSubmit(row.id)}                      
                    >DELETE
                    </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Wrapper>
  );
}