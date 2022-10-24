import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import generic from '@/public/crossword/generic.png';

import styles from '@/styles/Home.module.css';

const BilingueTvAndFilm: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>
        <h1>{`Bilingüe Crossword 2: TV and Film`}</h1>

        <div>
          <a href="https://mycrosswordmaker.com/1108794/Bilingue-TV-Film">
            <Image
              width={400}
              height={400}
              src={generic}
              alt="Crossword"
              priority
            />
            <h2>Click to play!</h2>
          </a>
        </div>

        <article>
          <p>In my spare time outside of coding, I like to make crossword puzzles.</p>
          <p>I hope you enjoy!</p>
          <p>-Chris</p>
        </article>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../../">
            Home
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default BilingueTvAndFilm
