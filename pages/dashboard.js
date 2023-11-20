import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useSpotifyStore } from "../src/stores/useSpotifyStore";
import useStore from "../src/stores/useStore";

export default function Dashboard() {
  const router = useRouter();
  const { setUser, setAccessToken } = useSpotifyStore()
  const user = useStore(useSpotifyStore, (state) => state.user)
  const accessToken = useStore(useSpotifyStore, (state) => state.accessToken)

  useEffect(() => {
    if (router.query["access_token"]) {
      const token = router.query["access_token"];
      setAccessToken(token);

      // Fetch user profile data
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(profile => {
        setUser(profile);
      })
      .finally(() => {
        // Clear token out of URL after saving
        const { access_token, ...queryWithoutToken } = router.query;
        router.replace({
          pathname: router.pathname,
          query: queryWithoutToken,
        });
      });
    }
  }, [router.query["access_token"]]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard – Digital Music Friday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{ animation: "tilt 2s infinite linear" }}>Welcome, {user.display_name}</h1>

        {user.images[0] && (
          <Image
            src={user.images[0].url}
            alt={`${user.display_name}'s profile picture`}
            width={64}
            height={64}
          />
        )}

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
        @keyframes tilt {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
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
