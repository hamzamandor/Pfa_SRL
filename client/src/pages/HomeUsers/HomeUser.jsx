import React from 'react';

import { Outlet } from 'react-router-dom';
import Hin from '../../Components/Users/HeaderUser/h';



const HomeUser = () => {
  return (
    <main>
       <Hin />
        <Outlet />
    </main>
  );
}

export default HomeUser;
