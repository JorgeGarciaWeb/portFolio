import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const  Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as="span">Home</Nav.Link>
                    <Nav.Link href="/about"> About</Nav.Link>
                    <Nav.Link href="/project">Project</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navigation