# Next.js Spotify OAuth Example

This repository is a Next.js project that includes an example of Spotify OAuth implementation. This allows users to log in via Spotify, granting the application certain permissions to access Spotify data, such as reading the user's playlists.

## Table of Contents

- [Next.js Spotify OAuth Example](#nextjs-spotify-oauth-example)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure)
  - [API Routes](#api-routes)
  - [Contributing](#contributing)

## Installation

To run this project, you will need to have Node.js and npm installed. If you don't have these installed, you can find instructions [here](https://nodejs.org/).

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-project-name
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Getting Started

To start the development server, run the following command:

```bash
npm run dev
```

Then, navigate to http://localhost:3000 in your browser.

## Environment Variables

Create an .env.local file at the root of your project and insert your environment variables:

```env
SPOTIFY_CLIENT_ID=yourClientIDHere
SPOTIFY_CLIENT_SECRET=yourClientSecretHere
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify-callback
```

Important: Never commit .env.local to version control. It is in the .gitignore for security.

## Project Structure

The main folders and files in this project are as follows:

- `pages/`: Contains all the Next.js pages (React components).
- `pages/api/`: Contains Next.js API routes.
- `components/`: Contains reusable React components.

## API Routes

- `GET /api/spotify-login`: Redirects the user to Spotify's OAuth authorization page.
- `GET /api/spotify-callback`: Handles the callback from Spotify and exchanges the authorization code for an access token.

## Contributing

If you would like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
