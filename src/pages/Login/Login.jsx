import React from 'react';
import Header from "../../Components/Header/Header";
import { Outlet } from 'react-router-dom';

const Login = () => {
    return (
      <main>
          <Header />
          <Outlet />
      </main>
    )
  }
  
  export default Login ;