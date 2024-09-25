import React from 'react';
import { motion } from 'framer-motion';

const ImageSegments = () => {
  const segments = [
    { image: '/photo1.jpg', title: 'T20 Match' },
    { image: '/photo2.jpg', title: 'T10 Match' },
    { image: '/photo3.jpg', title: 'ODI Match' },
    { image: '/photo4.jpg', title: 'Test Match' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center h-full gap-8 mt-16">
      {segments.map((segment, index) => (
        <motion.div
          key={index}
          className={`flex-1 cursor-pointer rounded-lg overflow-hidden shadow-lg w-full md:w-1/4`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => console.log(`Clicked on: ${segment.title}`)}
        >
          <div
            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center"
            style={{ backgroundImage: `url(${segment.image})` }}
          >
            <div className="flex items-center justify-center h-full text-xl font-bold text-white">
              {segment.title}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageSegments;
