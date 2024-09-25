import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="py-20 bg-gray-300">
      {/* Zig-zag layout */}
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* First row */}
        <div className="flex flex-col items-center mb-16 md:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <img 
              src="src/aboutusimg1.png" // Replace with your image URL
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="mb-6 text-gray-700">
              At XYZ Sports Organization, our mission is to promote the sport of cricket and provide a platform for players of all levels to showcase their talent and passion for the game. We believe that cricket is not just a sport, but a way of life that brings people together and fosters a sense of community.
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col items-center mb-16 md:flex-row-reverse">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <img 
              src="src/aboutusimg2.png" // Replace with your image URL
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* paragraph */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
            <p className="mb-6 text-gray-700">
              Our vision is to create a world where cricket is celebrated and enjoyed by people of all ages and backgrounds. We aim to inspire the next generation of cricketers and provide them with the resources and support they need to achieve their dreams. Through our tournaments and events, we strive to foster a sense of unity and camaraderie among players and fans alike.
            </p>
          </div>
        </div>


        {/* third row */}
        <div className="flex flex-col items-center mb-16 md:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <img 
              src="src/aboutusimg2.png" // Replace with your image URL
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="mb-6 text-gray-700">
              At XYZ Sports Organization, our mission is to promote the sport of cricket and provide a platform for players of all levels to showcase their talent and passion for the game. We believe that cricket is not just a sport, but a way of life that brings people together and fosters a sense of community.
            </p>
          </div>
        </div>
      
        
      </div>
    </div>
  );
};
export default AboutUs;