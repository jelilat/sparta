import { useState, useEffect } from 'react';

const Hero = () => {
  const backgrounds = [
    'url(./hero1.jpeg)',
    'url(./hero2.jpeg)',
    'url(./hero3.jpeg)',
  ];
  const phrases = [
    'Create immersive art experiences', 
    'Showcase, Engage, Sell', 
    'Explore, Discover, Own'
  ];
  const descriptions = [
    'With Sparta, creativity knows no bounds. Design stunning 3D art galleries that breathe life into your NFTs, providing an unparalleled visual experience.',
    'Transform your NFTs into immersive 3D galleries with Sparta. Connect with visitors in a unique virtual space, and turn admirers into buyers effortlessly.',
    'Step into Sparta, where art meets innovation. Wander through virtual 3D galleries, learn the stories behind the NFTs, and acquire pieces that resonate with you.'
  ]

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
    className="bg-cover bg-center h-[50vh]"
    style={{ backgroundImage: backgrounds[current] }}
    >
      <div className="bg-black bg-opacity-70 h-full flex items-center">
        <div className="w-1/3 mx-24">
          <h2 className="text-4xl text-white font-bold">
            {phrases[current]}
          </h2>
          <p className="text-white text-lg mt-4">
            {descriptions[current]}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Hero;
