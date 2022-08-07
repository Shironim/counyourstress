import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar fixed='top' expand="lg" variant="light" bg="light">
        <Container className='px-5'>
          <Navbar.Brand href="#">About Couns</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='pt-5'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Test />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
