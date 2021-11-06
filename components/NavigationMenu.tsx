import next from "next";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { INavigationItem, INavigationMenuFields } from "../@types/generated/contentful";
import Image from "next/image";
import Link from "next/link";
//import chrysalislogo from '../public/chrysalislogo.png'


const NavigationMenu: React.FC<INavigationMenuFields> = ({ menuItems, logo }) => (
    <>
    <Navbar expand="lg" bg="white" >
    <Container>
    <Navbar.Brand>
       <Image 
        src={`https:${logo.fields.file.url}`} 
        //src= {chrysalislogo}
        alt="chrysalislogo"
       //layout="fill"
       objectFit="contain"
        width="110"
        height="110" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        </Nav>
    <Nav>
        {menuItems.map((item) => (
            <Link href={ item.fields.page?.fields.slug || item.fields.externalUrl || "/"} passHref>
                <Nav.Link key={item.sys.id}>
                    <span className="fw-bold p-3" style={{color: '#333' }}>
                        {item.fields.title}
                    </span>
                </Nav.Link>
            </Link>
         ))}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
);

export default NavigationMenu;
