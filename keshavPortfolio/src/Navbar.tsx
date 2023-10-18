import React from 'react'
import {  useNavigate ,Outlet } from 'react-router-dom';
const Navbar = () => {

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/Contactform');
  };
 
  const handleBack = () => {
    navigate('/');
  };
 
  return (
    <>
    <div>
       <header>
      <a href="#" className="logo"> <span>PORT</span> FOLIO </a>

      <nav className="navbar">
        <a onClick={handleBack} href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Project</a>
        <a href="#experience">Experience</a>
        <a onClick={handleContactClick}>contact</a>
      </nav>

      <div className="follow">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
    </header>
    </div>
    <Outlet/>
    </>
  )
}
export default Navbar
