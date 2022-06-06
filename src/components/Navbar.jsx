import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';


function NavBar() {
    
    return (
        <>
        
            <Navbar bg="primary" variant="dark">
                <Container>
                <img alt="Logo" src={logo} width="40" height="auto" className='logo' />
                <Navbar.Brand href="#home">CryptoDash</Navbar.Brand>
                <Nav className="me-auto ">
                </Nav>
                </Container>
            </Navbar>
        </>
        );
    }

export default NavBar;