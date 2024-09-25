import React, { useEffect } from "react";
import './Home.css';

function Home() {

  useEffect(() => {
    const handleNavbarColor = () => {
      const homeSection = document.querySelector('#home');
      const aboutUsSection = document.querySelector('#about-us');
      const navbar = document.querySelector('nav');
      const navLinks = document.querySelectorAll('nav ul li a');

      const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
      const aboutUsBottom = aboutUsSection.offsetTop + aboutUsSection.offsetHeight;

      if (window.scrollY >= homeBottom && window.scrollY < aboutUsBottom) {
        navbar.style.color = 'black';
        navLinks.forEach(link => link.style.color = 'black');
      } else if (window.scrollY >= aboutUsBottom) {
        navbar.style.color = 'white';
        navLinks.forEach(link => link.style.color = 'white');
      } else {
        navbar.style.color = 'white';
        navLinks.forEach(link => link.style.color = 'white');
      }
    };

    window.addEventListener('scroll', handleNavbarColor);

    return () => {
      window.removeEventListener('scroll', handleNavbarColor);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>XYZ Organization</h1>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/login" className="login">Log In</a>
      </nav>

      {/* Home Section */}
      <div className="container" id="home">
        <video autoPlay muted loop playsInline>
          <source src="/videos/demohomev.mp4" type="video/mp4" />
        </video>
        <div className="text-section">
          <div className="hashtag">#crickettournaments</div>
          <div className="welcome">
            <h1>Welcome to the XYZ Cricket Tournaments</h1>
          </div>
          <p>
              Welcome to the ultimate destination for cricket lovers! XYZ Cricket Organization is proud to present exciting cricket tournaments where teams of all levels can come together to showcase their talent and passion for the game. Whether you're an amateur player or a seasoned pro, our tournaments are designed to bring out the best in you!
          </p>
          <a href="/photos" className="btn">
            Register For Tournament
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="about-us">
        <h2 className="aboutustitle">ABOUT US</h2>
        <div className="about-content zigzag-container">
          <div className="about-text left">
            <p className="para1">
               Welcome to XYZ Sports Organization, where we are passionate about promoting the spirit of cricket through engaging tournaments that bring together players, fans, and communities. Established with a vision to enhance the experience of cricket enthusiasts, our organization focuses on creating competitive platforms for both amateur and professional players.
            </p>
          </div>
          <div className="about-image-container right">
            <img src="aboutusimg1.png" alt="Cricket Players" className="about-image image1" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p><strong>Address:</strong> 123 Skyline Tower, US</p>
            <p><strong>Phone:</strong> +1 800 123 4567</p>
            <p><strong>Email:</strong> contact@example.com</p>
            <div className="social-media">
              <button className="button button1" onClick={() => window.location.href = 'https://facebook.com/xyzsportsorganization'}>Facebook</button>
              <button className="button button2" onClick={() => window.location.href = 'https://instagram.com/xyzsportsorganization'}>Instagram</button>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a message</h2>
            <form id="contact-form">
              <div className="input-group">
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="input-group">
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="input-group">
                <textarea id="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
