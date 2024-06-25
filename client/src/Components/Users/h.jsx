import React from 'react';

import "./h";
import NavbarUser from './NavbarUser/NavbarUser';
import SearchFrmUser from './SearchFrmUser/SearchFrmUser';

const Hin = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <NavbarUser />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Découvrez le livre de votre choix</h2><br />
                <SearchFrmUser/>
            </div>
        </header>
    </div>
  )
}

export default Hin