// import logo from './logo.svg';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import CreateStudent from './component/create-student.component';
import EditStudent from './component/edit-student.component';
import StudentList from './component/student-list.component';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar bg="dark" variant="dark">
            <Container>
              <NavBar.Brand>
                <Link to={"/"} className="nav-link">
                  React MERN Stack CRUD
                </Link>
              </NavBar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">Create Student</Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"} className="nav-link">Student List</Link>
                </Nav>
              </Nav>
            </Container>
          </NavBar>

          <Container>
            <Row>
              <Col md="12">
                <div className='wrapper'>
                  <Routes>
                    <Route exact path='/' element={<CreateStudent />}/>
                    <Route path='/create-student' element={<CreateStudent/>} />
                    <Route path='/edit-student/:id' element={<EditStudent/>} />
                    <Route path='/student-list' element={<StudentList/>} />
                  </Routes>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
  );
}

export default App;
