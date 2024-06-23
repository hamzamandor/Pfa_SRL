import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Découvrez le livre de votre choix</h2><br />
                <p className='header-text fs-18 fw-3'>Plongez dans notre collection diversifiée et trouvez le livre qui saura captiver votre imagination et répondre à vos intérêts uniques. Que vous recherchiez un roman captivant, un guide pratique, ou un livre d'apprentissage, vous êtes sûr de trouver votre bonheur parmi notre sélection soigneusement choisie. Laissez-vous emporter par des aventures passionnantes, des connaissances enrichissantes et des histoires captivantes. Explorez dès maintenant et découvrez le livre qui vous inspirera.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header