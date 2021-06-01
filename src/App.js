
import './App.css';
import ContactsForm from './components/ContactsForm';
import {Container, Navbar} from 'react-bootstrap';

function App() {
  return (
    <Container>
    <Navbar expand="lg" variant="light" bg="light" className ="my-5">
    <Container>
      <Navbar.Brand href="#home">Kontaktu forma</Navbar.Brand>
      </Container>
    </Navbar>
    <ContactsForm/>
  </Container>
  );
}

export default App;
