# Next.js Spotify OAuth Example

This repository is a Next.js project that includes an example of Spotify OAuth implementation. This allows users to log in via Spotify, granting the application certain permissions to access Spotify data, such as reading the user's playlists.

## Table of Contents

- [Next.js Spotify OAuth Example](#nextjs-spotify-oauth-example)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Step-by-step Guide to Setup Spotify API Credentials](#step-by-step-guide-to-setup-spotify-api-credentials)
    - [Step 1: Register Your App with Spotify](#step-1-register-your-app-with-spotify)
    - [Step 2: Copy the Client ID and Client Secret](#step-2-copy-the-client-id-and-client-secret)
    - [Step 3: Create `.env.local` file](#step-3-create-envlocal-file)
    - [Step 4: Add Environment Variables](#step-4-add-environment-variables)
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

This project utilizes Spotify's API to create a musical experience. In order to get started, you'll need to register your app with Spotify to get the API Client ID and Secret.

## Step-by-step Guide to Setup Spotify API Credentials

### Step 1: Register Your App with Spotify

1. Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Log in to your Spotify account, or create a new one if you don't have one.
3. Click on the 'Create an App' button.
4. Fill in the name and description for your app, then click 'Create'.
5. After your app is created, you will be redirected to a dashboard where you can see your Client ID and Client Secret.

### Step 2: Copy the Client ID and Client Secret

1. In the Spotify Developer Dashboard, locate the Client ID and Client Secret.
2. Copy these credentials for the next step.

### Step 3: Create `.env.local` file

1. In your project root, create a new file named `.env.local`.
2. Open this file in a text editor.

### Step 4: Add Environment Variables

In your `.env.local` file, add the following lines, replacing `yourClientIDHere` and `yourClientSecretHere` with the credentials you copied earlier.

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
