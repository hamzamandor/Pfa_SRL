import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <Link to="/" className="button home-button">← Home</Link>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About GOLDENBOOK</h2>
            <p className='fs-17'>Bienvenue sur GoldenBook, votre destination ultime pour trouver n'importe quel livre que vous désirez. Que vous soyez à la recherche de classiques intemporels, de nouveautés populaires ou de trésors rares, GoldenBook est là pour répondre à toutes vos envies littéraires.</p>
            <p className='fs-17'>Bienvenue sur GoldenBook, votre destination ultime pour trouver n'importe quel livre que vous désirez. Que vous soyez à la recherche de classiques intemporels, de nouveautés populaires ou de trésors rares, GoldenBook est là pour répondre à toutes vos envies littéraires.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
