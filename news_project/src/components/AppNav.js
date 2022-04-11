import { Navbar, Nav, Container } from 'react-bootstrap';
import { logOut } from '../utils/utils.js';
function AppNav(props) {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand href="#">Home</Navbar.Brand>
                    <Nav.Link  href="#/sections/askstories">Ask</Nav.Link>
                    <Nav.Link  href="#/sections/showstories">Show</Nav.Link>
                    <Nav.Link  href="#/sections/jobstories">Jobs</Nav.Link>
                    <Nav.Link  href="#/signup">Sign Up</Nav.Link>
                    <Nav.Link  href="#/login">Log in</Nav.Link>
                    {/* { props.appState.user && <Nav.Link  href="#/preferences">Preferences</Nav.Link> } */}
                    { props.appState.user && <button onClick={()=>{logOut(props.setAppState)}}>Log Out</button> }
                </Nav>
            </Container>
        </Navbar>
    )
  }
  
  export default AppNav;