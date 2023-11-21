import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

const NewGame = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard – Digital Music Friday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/new-game" className={styles.card}>
            <h3>Online</h3>
            <p>Invite people by sharing the room link..</p>
          </Link>
          <Link href="/search" className={styles.card}>
            <h3>Local (Offline)</h3>
            <p>Play on one device in your livingroom..</p>
          </Link>
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
    </div>
  );
};

export default NewGame;
