import React, { useState } from 'react';
import './Navbar.scss'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="logo-btn navbar-toggle" onClick={toggleNavbar}>
       <i className='fa-solid fa-bars'></i>
      </button>
  
      <div className="navbar-logo">
        <img src="https://deltee.com/cdn/shop/files/Logo_Deltee_180x.png" alt="Logo" />
      </div>

      <div className="navbar-cart">
        <a href="/cart">
          <img className='shopping-bag' src="src\assets\sac-de-courses.png" alt="Shopping Bag" />
        </a>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <div className='list-and-close'>
          <button className='logo-btn close-navbar' onClick={toggleNavbar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className='links-list'>
            <li><a href="/">Accueil</a></li>
            <li><a href="/products">Nos produits</a></li>
            <li><a href="/cart">Suivre ma commande</a></li>
            <li><a href="/account">Les remises de dons</a></li>
            <li><a href="/account">Qui sommes-nous</a></li>
            <li><a href="/account">Notre blog</a></li>
            <li><a href="/account">Nous contacter</a></li>
          </ul>
        </div>
        
        <div className='navbar-social'>
          <button className='logo-btn'>
            <i className="fa-solid fa-brands fa-facebook-f"></i>
          </button>
          <button className='logo-btn'>
            <i className="fa-solid fa-brands fa-instagram"></i>
          </button>

        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;