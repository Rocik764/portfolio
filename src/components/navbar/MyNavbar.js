import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

const MyNavbar = () => {
    return (
        <Navbar className="sticky-top py-4" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link className="scroll-link" to={null} onClick={() => scroll.scrollToTop()} smooth={true} duration={1000}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="scroll-link" to="about-me" smooth={true} duration={1000}>About me</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="scroll-link" to="technologies" smooth={true} duration={1000}>Technologies</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="scroll-link" to="projects" smooth={true} duration={1000}>Projects</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="scroll-link" to="contact" smooth={true} duration={1000}>Contact</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
