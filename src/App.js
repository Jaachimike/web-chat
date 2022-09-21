import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './containers/HomePage';
import { LoginPage } from './containers/LoginPage';
import { RegisterPage } from './containers/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* only logged in user can access this home page */}
          
          <Route path='/'  exact element={<HomePage/>} />
          
         


          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<RegisterPage/>} />
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
