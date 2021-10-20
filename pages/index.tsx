import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation/index";
import styles from "../styles/Home.module.css";

const Homepage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fucking <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Homepage;
