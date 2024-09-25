import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import AboutUs from './About'; // Import AboutUs component
import ContactUs from './Contact';
import SignInSignUp from '../Signup';

const FrontPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate


  const loginHandle = () => {
    navigate('/login'); // Navigate to /register route
  };

  const handleSignUpClick = () => {
    navigate('/register'); // Navigate to /register route
  };

  return (
    <div className="relative w-full overflow-y-auto" style={{ height: '100vh' }}>
      {/* Video Background */}
      <video className="absolute top-0 left-0 object-cover w-full h-full" autoPlay loop muted>
        <source src="front.mp4" type="video/mp4" />
        <p className="text-white">Your browser does not support the video tag.</p>
      </video>

      {/* Navigation Bar */}
      <header className="absolute top-0 right-0 w-full p-4">
        <nav className="flex items-center justify-end space-x-8">
          {/* Use a div instead of buttons for scrolling */}
          <div 
            className="text-white hover:cursor-zoom-in" 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            About
          </div>
          <div 
            className="text-white hover:cursor-zoom-in" 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Hi
          </div>
          <a href="./src/Frontpage.jsx" className="text-white hover:underline">Home</a>
          <a href="./src/About.jsx" className="text-white hover:underline">About Us</a>
          <a href="./src/Contact.jsx" className="text-white hover:underline">Contact</a>
          <button className="px-4 py-2 font-semibold text-black transition duration-300 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400">
            Login
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-8">
        <h1 className="mb-4 text-5xl font-bold text-white">Welcome to the XYZ Cricket Tournaments</h1>
        <p className="mb-6 text-lg text-white">
          Welcome to the ultimate destination for cricket lovers! XYZ Cricket Organization is proud to present exciting cricket tournaments where teams of all levels can come together to showcase their talent and passion for the game.
        </p>

    

        
        <a 
          onClick={handleSignUpClick} // Call handleSignUpClick on button click
          className="px-4 py-2 font-semibold text-black transition duration-300 rounded-lg shadow-md hover:bg-gray-200"
        >
          Sign Up
        </a>

    <button onClick={loginHandle}
    className="px-4 py-2 font-semibold text-black transition duration-300 bg-white rounded-lg shadow-md hover:bg-gray-200"
    new
    ></button>
        
      </div>

      {/* About Us Section */}
      <section id="about">
        <AboutUs /> {/* Include About Us directly here */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex items-center justify-center h-screen bg-gray-400">
        <ContactUs />
      </section>
    </div>
  );
};
export default FrontPage;