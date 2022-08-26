import {Container, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

const  Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed-top>
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Project</Nav.Link>
                        <Nav.Link href="#pricing">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navigation