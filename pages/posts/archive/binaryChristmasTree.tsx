import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import binaryChristmas from '@/public/binaryChristmas.jpeg';
import styles from '@/styles/Home.module.css';

const BinaryChristmasTree: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Binary Christmas Tree</h1>

        <div>
          <Image
            src={binaryChristmas}
            alt="Binary Christmas Tree"
            priority
            className={styles.image}
          />
          <p>ho, ho, ho and mistletoe and presents for pret-ty girls</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="/">
            Home
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default BinaryChristmasTree
