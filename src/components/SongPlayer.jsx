import SpotifyPlayer from 'react-spotify-web-playback';
import { useSpotifyStore } from '../stores/useSpotifyStore';

const SongPlayer = () => {
  const { accessToken } = useSpotifyStore();

  return (
    <SpotifyPlayer
      token={accessToken}
      name="Digital Music Friday"
      uris={['spotify:album:1Byg1v4uPz1XAJl3oSlsu3']}
    />
  );
};

export default SongPlayer;
