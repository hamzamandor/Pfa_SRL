import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BookDetails";
import Login from "./Components/Login-Register/login";
import HomeUser from './Components/HomeUser';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="HomeUser" element={<HomeUser />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
