import React from 'react';

import { Outlet } from 'react-router-dom';

import SaveList from '../Components/Users/SaveListUser/SaveList';



const Save = () => {
  return (
    <main>
       <SaveList />
        <Outlet />
    </main>
  );
}

export default Save;
