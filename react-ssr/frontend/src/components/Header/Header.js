import React from 'react';
import { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import Link from 'next/link'

import './header.module.css';

function Header (){
  const [username,setUserName] = useState("");
  const [token,setToken] = useState("");

  

  return(
    <Navbar className="navbar" expand='sm'>
      <Navbar.Brand as={Link} href="/">
        <img  id="logo" src={require("../../images/pitanga_logo_menu.png")} alt="Pitanga logo"/>
      </Navbar.Brand>
   {/*    <Image src={require('../../images/pitanga2_logo_dark_menu.png')} width={100} height={100} alt="Pitanga logo"/> */}
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="mr-auto">
          {/* <Nav.Link as={Link} className="navbar-link" href="/Products/Products" >Produtos</Nav.Link> */}
          <Nav.Link as={Link} className="navbar-link" href="/Stores/Stores">Lojas</Nav.Link>
          <Nav.Link as={Link} className="navbar-link" href="/Contact/Contact">Contatos</Nav.Link>
         {/*  <NavDropdown title={username !== "" ? username:'Login' }>
            {username === "" &&
              <div className="show">
                <Login changeName={setUserName} changeToken={setToken}/>
              </div>
            }
            {username &&
            <>
              <NavDropdown.Item href="/">Sair</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/myOrders">Meus Pedidos</NavDropdown.Item>
            </>
            }
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default Header;
