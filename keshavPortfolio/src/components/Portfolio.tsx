import './Portfolio.css'
import bg from '../Assets/images/photo.jpg';

import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

const Portfolio = () => {
  
  return (
    
    <>
  
  <body>
  
    <div className="cursor-1"></div>
    <div className="cursor-2"></div>

    <div id="menu-bars" className="fas fa-bars"></div>

   
   

   

    <section className="home" id="home">
      <div className="content">
        <span className="hi"> HOME PAGE </span>
        <h3>I AM <span style={{color:"greenyellow"}}> KESHAV KUMAR </span></h3>
        <p className="info">Web Developer</p>
        <a href="#about" className="btn">About me</a>
      </div>

      {/* <div className="image">
        <img src={bg} alt="" />
      </div> */}
    </section>

    

    <section className="about" id="About">
      <h1 className="heading"> About <span> ME </span></h1>

      <div className="row-1">
        <div className="image">
          <img src={bg} alt="" />
        </div>

        <div className="content">
          <h3>Name : KESHAV KUMAR</h3>
          <p>
          </p>
          <div className="box-container">
            <div className="box">
              <p><span> Gender : </span> Male</p>
              <p><span> Language : </span> Telugu, English, Hindi</p>
              <p><span> Work : </span> Web Developer</p>
            </div>
            <div className="box">
              <p><span> Freelance : </span> Available</p>
              <p><span> Phone : </span> +91 7013255820</p>
              <p><span> Email : </span> keshava.kumar@gmail.com</p>
              <p><span> Country : </span> INDIA</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="heading"><span> my </span> Skills</h1>

      <div className="row-2">
        <div className="skills">
          <div className="progress">
            <h3>Html <span> 50% </span></h3>
            <div className="bar"><span></span></div>
          </div>
          <div className="progress">
            <h3>CSS <span> 50% </span></h3>
            <div className="bar"><span></span></div>
          </div>
          <div className="progress">
            <h3>Javascript <span> 20% </span></h3>
            <div className="bar"><span></span></div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="service" id="service">
      <h1 className="heading">
        <span> My </span> Experience</h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-code"></i>
          <h3>Manual Testing</h3>
          <p>
            Worked as an Manual Tester
          </p>
        </div>

        <div className="box">
          <i className="fas fa-paint-brush"></i>
          <h3>People Soft</h3>
          <p>
            It is a Banking PayRoll Data maintance
          </p>
        </div>
      </div>
    </section>

   
    <section className="experience" id="experience">
      <h1 className="heading">
        <span> My </span> Qualification
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="content">
            <h3>KNOWN TECHNOLOGIES </h3>
            <span>C, HTML, CSS, JS, React </span>
            <p>
              
            </p>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3> QUALIFICATION </h3>
            <span>B.Tech</span>
            <p>
              Vidya Jyothi Institute of Technology
            </p>
          </div>
        </div>
      </div>
    </section>

   
    <section className="contact" id="contact">
      <h1 className="heading">Contact <span> Me </span></h1>

      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>My Email</h3>
          <p>keshava.kumar@gmail.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>My Contact Number</h3>
          {/* <p>+91 </p> */}
          <p>+91 7013255820</p>
        </div>

        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <h3>My Address</h3>
          <p>6-158/65, Sri Durga Nagar, Hyderabad </p>
        </div>
      </div>

      <div className="row">
        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />

          <textarea
            name=""
            placeholder="message"
            id=""
            cols={0}
            rows={10}
          ></textarea>

          <input type="submit" className="btn" value="send message" />
        </form>


       <h1 className='loc'>Location</h1>
       <iframe
      className="map"
      allowFullScreen
      loading="lazy"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0980694653917!2d76.3589764738793!3d10.008757772886323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080deef7394711%3A0x7dcdb3d704ebf9aa!2sVaisesika%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1697542253557!5m2!1sen!2sin"
      width={600}
      height={450}
      style={{ border: '0' }}
      // allowFullScreen
      // loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
      </div>
    </section>

   
    <footer className="footer">
       <span>  </span> | All Rights Reserved!
    </footer>


    <script src="js/script.js"></script>
  </body>
    </>
      

  )
}

export default Portfolio





