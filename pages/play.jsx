import { useState, useEffect } from 'react';
import SongPlayer from '../src/components/SongPlayer';
import Timeline from '../src/components/Timeline';

const Play = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simulating fetching a song when the component mounts
    const fetchSong = async () => {
      // Call Spotify API or some other source here
      const fetchedSong = 'Some fetched song';
      setCurrentSong(fetchedSong);
    };

    fetchSong();
  }, []);

  const handleAnswer = (answer) => {
    // Implement your quiz logic here
    if (answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <main>
        <SongPlayer />
        <Timeline />
        <button onClick={() => handleAnswer(true)}>
          This is a Correct Answer
        </button>
        <button onClick={() => handleAnswer(false)}>
          This is a Wrong Answer
        </button>
      </main>
      <footer>
        <div>Your Score: {score}</div>
      </footer>
    </div>
  );
};

export default Play;
