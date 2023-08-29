// pages/api/spotify-login.js
export default (req, res) => {
  const scopes = "user-read-private user-read-email"; // Add scopes as needed
  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${
      process.env.SPOTIFY_CLIENT_ID
    }&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(
      process.env.SPOTIFY_REDIRECT_URI
    )}`
  );
};
