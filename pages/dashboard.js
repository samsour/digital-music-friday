import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  async function fetchSpotifyProfile(accessToken) {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  }

  useEffect(() => {
    if (router.query["access_token"]) {
      const accessToken = router.query["access_token"];

      // Fetch user profile data
      fetchSpotifyProfile(accessToken).then((profile) => {
        console.log(profile);
        setProfile(profile);
      });
    }
  }, [router.query["access_token"]]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard – Digital Music Friday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome, {profile.display_name}</h1>

        <Image
          src={profile.images[0].url}
          alt={`${profile.display_name}'s profile picture`}
          width={64}
          height={64}
        />

        <div className={styles.grid}>
          <Link href="/play" className={styles.card}>
            <h3>Play Now &rarr;</h3>
            <p>Click here to start playing Hitster Digital!</p>
          </Link>
          <Link href="/rules" className={styles.card}>
            <h3>Rules &rarr;</h3>
            <p>Not sure how to play? Click here to read the rules.</p>
          </Link>
          <Link href="/leaderboard" className={styles.card}>
            <h3>Leaderboard &rarr;</h3>
            <p>Check out the top scores from players around the world.</p>
          </Link>
          <Link href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Have questions or feedback? We'd love to hear from you.</p>
          </Link>
        </div>

        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src="/images/example.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Your Name"
          />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Pinching
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
