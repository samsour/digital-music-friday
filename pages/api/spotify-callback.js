// pages/api/spotify-callback.js
import axios from "axios";

export default async (req, res) => {
  const code = req.query.code || null;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "post",
    params: {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
  };

  try {
    const response = await axios(authOptions);
    const accessToken = response.data.access_token;
    // Save the access token - either in a cookie, or in your database
    res.redirect(`/dashboard?access_token=${accessToken}`);
  } catch (error) {
    res.redirect(`/error?message=${error}`);
  }
};
