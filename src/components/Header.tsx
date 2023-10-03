import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <>
        <h4>מוסדות אהבת ישראל</h4>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/page1">About</Nav.Link>
                        <Nav.Link href="/Page2">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
