import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import crossword1 from '../../public/crossword/crossword1.png';

import styles from '../../styles/Home.module.css';

const Crossword1: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>
        <h1>{`Bilingüe Crossword 1: Tema Perú`}</h1>

        <div>
          <a href="https://mycrosswordmaker.com/1107303/Bilingue-CW-Tema-Peru">
            <Image
              width={400}
              height={400}
              src={crossword1}
              alt="Crossword"
              priority
            />
            <h2>Click to play!</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../">
            Home
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Crossword1
