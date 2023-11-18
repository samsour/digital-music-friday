// pages/play.js
import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import {useSpotifyStore} from "../src/stores/useSpotifyStore";

const SongPlayer = () => {
  const { accessToken } = useSpotifyStore();

  return (
    <SpotifyPlayer
      token={accessToken}
      name="Digital Music Friday"
      uris={["spotify:album:1Byg1v4uPz1XAJl3oSlsu3"]}
    />
  );
};

const Timeline = () => {
  // Simulated component
  return <div>Here will be the Timeline</div>;
};

const QuizOptions = () => {
  // Simulated component
  return <div>Here will be the Quiz Options</div>;
};

const Play = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simulating fetching a song when the component mounts
    const fetchSong = async () => {
      // Call Spotify API or some other source here
      const fetchedSong = "Some fetched song";
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
        {/* <Timeline /> */}
        <QuizOptions />
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
