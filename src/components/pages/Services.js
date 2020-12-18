import React from 'react';
import '../../App.css';
import Paper from "@material-ui/core/Paper";
import { Container } from '@material-ui/core';
import {Button} from "../../components/Button";

export default function Services() {
  return (
  <div className="product-bg">
  <Container>
    <h1 style={{color: "white", fontSize: "100px"}}>SERVICES</h1>
    <Paper elevation = {3} square>
    <div className="center" style={{padding: "25px"}}>
    <img src= {"https://images.unsplash.com/photo-1443927024987-129b3c966f5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80"} style={{height: "300px", width: "300px", }} />
     <h3>Services Offered In This Package</h3>
     <ul className="center">
       <li>Feature #1</li>
       <li>Feature #2</li>
       <li>Feature #3</li>
       <li>Feature #4</li>
       <li>Feature #5</li>
     </ul>
     <div className="center">
       <Button >Book Now</Button>
     </div>
     </div>
  </Paper>
  </Container>
  </div>
  );
}
