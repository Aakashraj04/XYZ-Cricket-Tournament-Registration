import React, { useState, useEffect } from 'react';

const ResponsiveSegmentedPhotos = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', team: '' });
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({ playerName: '', playerPosition: '' });
  const [showPlayerForm, setShowPlayerForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');

  const videoSources = ['test.mp4', 'odi.mp4', 't20.mp4', 't10.mp4'];

  const handleClick = (index) => {
    setActiveIndex(index);
    setTimeout(() => setPhotoVisible(false), -100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlayerInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const addPlayerForm = () => {
    if (currentPlayer.playerName && currentPlayer.playerPosition) {
      const duplicatePlayer = players.some(player =>
        player.playerName === currentPlayer.playerName || player.playerPosition === currentPlayer.playerPosition
      );

      if (duplicatePlayer) {
        setErrorMessage('Duplicate player name or position. Please enter unique values.');
        return;
      }

      if (players.length < 11) {
        setPlayers((prevPlayers) => [...prevPlayers, currentPlayer]);
        setCurrentPlayer({ playerName: '', playerPosition: '' });
        setErrorMessage('');
      } else {
        setErrorMessage('You can only add up to 11 players.');
      }
    } else {
      alert('Please fill in all player details');
    }
  };

  const handlePositionInput = (e) => {
    const value = e.target.value;
    if (value > 11) {
      e.target.value = 11;
    } else {
      handlePlayerInputChange(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (players.length !== 11) {
      setFormError('You must register exactly 11 players.');
      return;
    }
  
    if (!formData.name || !formData.email || !formData.team) {
      setFormError('Please fill in all team details.');
      return;
    } else {
      setFormError('');
    }
  
    // Simulate form submission without an API call
    setRegistrationMessage('Registration Completed');
    setShowPlayerList(false);
    
    // Clear the form after a delay
    setTimeout(() => {
      setPlayers([]);
      setCurrentPlayer({ playerName: '', playerPosition: '' });
      setShowPlayerForm(false);
      setFormData({ name: '', email: '', team: '' });
      setFormSubmitted(false);
      setRegistrationMessage('');
    }, 3000);
  };
  

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeIndex]);

  const remainingPositions = Array.from({ length: 11 }, (_, i) => i + 1).filter(
    (pos) => !players.some((player) => player.playerPosition == pos)
  );
  
  return (
    
    <div className="overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        // className='absolute inset-0 object-cover w-full h-full relative w-full h-[60vh] lg:h-auto'
        autoPlay
        loop
        playsInline
        src={activeIndex === null ? '1bg.mp4' : videoSources[activeIndex]}
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      {activeIndex === null ? (
        
        <div className="flex flex-col items-center justify-center w-full h-full gap-14 mt-3 overflow-auto sm:flex-row">
  {[
    
    { image: '/photo1.png', title: 'Test Match'},
    { image: '/photo2.png', title: 'ODI Match' },
    { image: '/photo3.png', title: 'T20 Match' },
    { image: '/photo4.png', title: 'T10 Match' },
  ].map((segment, index) => (
    <div
      key={index}
      className={`shrink-0 w-full sm:w-1/2 lg:w-1/5 transition-transform transform hover:scale-105 duration-300 ease-in-out rounded-full shadow-full cursor-pointer`}
      onClick={() => handleClick(index)}
    >
      <div
        className="bg-center bg-cover rounded-lg h-48 sm:h-56 md:h-64 lg:h-[35rem]"
        style={{ backgroundImage: `url(${segment.image})` }}
      />
      <div className="mt-2 mb-5 text-lg font-bold text-center text-black">
        {segment.title}
      </div>
    </div>
  ))}
</div>

      
  
      
      ) : (
        <div className="flex w-full h-full transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center w-1/2 mt-16">
            {photoVisible && (
              <div
                className="relative h-[40rem] w-full bg-cover bg-center transition-opacity duration-500 ease-in-out rounded-lg"
                style={{  backgroundImage: `url(/photo${activeIndex + 1}.jpg)`, opacity: photoVisible ? 1 : 0 }}
              />
            )}
          </div>

          <div className="absolute right-0 flex flex-col items-center justify-center w-1/2 mt-16 top-16">
            <div className="relative flex flex-col items-center justify-center w-2/5 p-8 transition-opacity duration-500 ease-in-out bg-white rounded-lg bg-opacity-90">
              <div className="flex-grow">
                {!showPlayerForm ? (
                  <>
                   <h2 className="max-w-full mb-4 text-xl font-bold text-center text-black break-words">
  {['Test Registration', 'ODI Registration', 'T20 Registration', 'T10 Registration'][activeIndex]}
</h2>


                    <form
                      className="flex flex-col w-full gap-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!formData.name || !formData.email || !formData.team) {
                          setErrorMessage('Please fill in all team details.');
                          return;
                        }
                        setErrorMessage('');
                        setShowPlayerForm(true);
                      }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="team"
                        placeholder="Team Name"
                        className="p-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                      <button
                        type="submit"
                        className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out bg-orange-500 rounded hover:bg-green-600"
                      >
                        Register Team
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    {!formSubmitted ? (
                      <form className="flex flex-col w-full gap-4 mt-2 mb-0" onSubmit={handleSubmit}>
                        <div>
                          <h3 className="mt-0 mb-1 text-lg font-semibold ">Player Details</h3>
                          <input
                            type="text"
                            name="playerName"
                            placeholder="Player Name"
                            value={currentPlayer.playerName}
                            className="p-2 border border-gray-300 rounded"
                            onChange={handlePlayerInputChange}
                          />
                          <input
                            type="number"
                            name="playerPosition"
                            placeholder="Position"
                            value={currentPlayer.playerPosition}
                            min="1"
                            max="11"
                            className="p-2 mt-3 border border-gray-300 rounded"
                            onInput={handlePositionInput}
                          />
                          <p className="mt-2 text-gray-700">
                            Remaining Positions: {remainingPositions.join(', ')}
                          </p>
                        </div>
                        
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        <p className="mt-2 text-gray-700">
                          Remaining Players: {11 - players.length}
                        </p>
                        <button
                          type="button"
                          className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
                          onClick={addPlayerForm}
                          disabled={players.length >= 11}
                        >
                          Add Another Player
                        </button>

                        <button
                          type="button"
                          className="px-4 py-2 mt-1 text-white transition duration-300 ease-in-out bg-gray-500 rounded hover:bg-gray-600"
                          onClick={() => setShowPlayerList(prev => !prev)}
                        >
                          {showPlayerList ? 'Hide Players' : 'Show Players'}
                        </button>

                        {showPlayerList && players.length > 0 && (
                          <div className="relative w-full p-4 mt-4 overflow-auto bg-white rounded-lg shadow-lg max-h-40">
                            <h3 className="mb-2 text-lg font-semibold">Added Players</h3>
                            <ul className="pl-5 list-disc">
                              {players.map((player, index) => (
                                <li key={index} className="text-black">
                                  {player.playerName} (Position: {player.playerPosition})
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <button
                          type="submit"
                          onClick={()=>{alert("Registration Success");window.location.href="/"}}
                          className={`px-4 py-2 mt-2 text-white transition duration-500 ease-in-out rounded 
                            ${players.length === 11 
                              ? 'bg-green-500 hover:bg-green-600' 
                              : 'bg-gray-400 cursor-not-allowed'}`}
                          disabled={players.length !== 11}
                        >
                          Register Players
                        </button>
                      </form>
                    ) : (
                      <div className="mt-4 text-xl font-bold text-green-600">
                        {registrationMessage}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <button
            className="absolute z-50 px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-500 rounded-full top-4 left-4 hover:bg-gray-600"
            onClick={() => {
              setActiveIndex(null);
              setPhotoVisible(true);
              setFormData({ name: '', email: '', team: '' });
              setPlayers([]);
              setCurrentPlayer({ playerName: '', playerPosition: '' });
              setShowPlayerForm(false);
              setFormSubmitted(false);
              setErrorMessage('');
              setShowPlayerList(false);
              setRegistrationMessage('');
            }}
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ResponsiveSegmentedPhotos;