import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route, BrowserRouter, }from'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />
          <div className='container'>
            <Routes> 
              <Route path = "/" element = {ListEmployeeComponent}></Route>
              <Route path = "/employees" element = {ListEmployeeComponent}></Route>
              <ListEmployeeComponent />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
    </BrowserRouter>
  
);
}

export default App;
