import React from 'react';
import {Jumbotron} from "react-bootstrap";

import './Home.module.css';

export default function CoverImg(){
  return(
    <Jumbotron fluid>
        <img src={require(`../../images/sale.png`).default} alt="30% OFF linha Manga Rosa" width="100%" /> 
        {/* <!--Fundo foto criado por freepik - br.freepik.com --> */}
    </Jumbotron>
  )
}