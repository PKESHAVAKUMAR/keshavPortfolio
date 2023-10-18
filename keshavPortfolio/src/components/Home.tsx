import React from 'react';
import './styles/styles.css';
import './styles/Styles.module.css';

const Home = () => (
  <div className="home">
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
          <a href="#home" className="nav-item nav-link active">Home</a>
          <a href="#about" className="nav-item nav-link">About</a>
          <a href="#qualification" className="nav-item nav-link">Qualification</a>
          <a href="#skill" className="nav-item nav-link">Skill</a>
          <a href="#project" className="nav-item nav-link">Project</a>
          <a href="#contact" className="nav-item nav-link">Contact</a>
        </div>
        <a href="/" className="btn btn-menu d-none d-lg-block" style={{ backgroundColor: '#457efa', color: '#ffffff' }}>Hire Me</a>
      </div>
    </nav>

    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">Hello, my name</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '4px #ffffff' }}>Pasupuleti Keshava Kumar</h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
            <div className="typed-text d-none">MANUAL TESTER</div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href="img/Ganesh_Dabade_Resume.pdf" className="btn btn-white mr-4">View CV</a>
            </div>
          </div>
          <div className="col-lg-6 px-8 pl-lg-0 pb-5 pb-lg-4 about-img">
            {/* <img className="img-fluid w-100 rounded-circle shadow-sm" src="./image6.jpg" alt="Profile Image" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
