import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_white.png';

export default function Navigation() {
  const token = useSelector(state => state.user.token);
  const username = useSelector(state => state.user.username);

  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/"><img className="logo" src={logo} alt="Item shop ecoway"  /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
        {
        token === undefined || token === 'undefined' || token === null ? (
    <>
    <Link className="nav-link white" to="/login">Увійти</Link>
    <Link className="nav-link" to="/register">
      <span className="btn-menu">Зареєструватись</span>
    </Link>              
  </>
  ) : (
    <>
      {username === 'admin' ? (
       <>
       <Link className="nav-link white" to="/items">Автомобілі</Link>
       <Link className="nav-link white" to="/add_item">Додати автомобіль</Link>
       <Link className="nav-link white" to="/logout">
         Вихід
       </Link>
     </>
      ) : (
        <>
          <Link className="nav-link white" to="/items">Автомобілі</Link>
          <Link className="nav-link white" to="/favourites">Вподобані</Link>
          <Link className="nav-link white" to="/logout">Вихід</Link>
        </>
      )}
    </>
  )}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
