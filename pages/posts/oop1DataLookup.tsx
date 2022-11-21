import { useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link';
import Prism from 'prismjs';
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import { CodeBlock, HL } from '@/components';
import styles from '@/styles/Home.module.css';
import useWindowSize from '@/hooks/useWindowSize';
import { en } from '@/util/en';
import { es } from '@/util/es';

const singleGeneric = `
const dog = {
  fur: 'brown',
  eyes: 'brown',
  greet: () => 'woof'
}
`;

const propLookup = `
dog.fur
dog[someVariable]
`;

const propLog = `
console.log(dog.fur);
// "brown"
`;

const noExist = `
console.log(dog.height);
// undefined
`;

const orOp = `
const value = dog.height || 10;
console.log(value);
// 10
`;

const reassign = `
dog.eyes = "green";
`;

const trial = `
dog.weight = 150;
`;

const dogWithWeight = `
console.log(dog);
{
  fur: 'brown',
  eyes: 'green',
  greet: () => 'woof',
  weight: 150
}
`;

const bracketNotation = `
const scores = {
  chris: 1,
  paul: 1
}
function lookupScore(obj, name) {
  return obj[name];
}
console.log(lookupScore(scores, 'chris'));
`;

const bitcoin = `
const bitcoin = {
  date: 06012021,
  price: 36359
}
`;

const special = `
const bitcoin = {
  price-USD: 36359,
}
// this will give you an error!
// non-valid key name
`;

const special2 = `
const bitcoin = {
  'price-USD': 36359,
}
`;

const special3 = `
const currentPrice = bitcoin['price-USD'];
console.log(currentPrice);
// 36359
`;

const IntroToGenerics: NextPage = () => {
  const size = useWindowSize();
  const { locale } = useRouter(); 
  const myLang: any = locale === 'en-US' ? en : es;

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    }
    highlight();
  }, [size]);

  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>
        {myLang.oop1.title}
        <article style={{ maxWidth: '600px', lineHeight: '24px'}}>
          {myLang.oop1.sub1}
          {myLang.oop1[1]}
          {myLang.oop1[2]}
          <CodeBlock code={singleGeneric} />
          {myLang.oop1[3]}
          {myLang.oop1[4]}
          <CodeBlock code={propLookup} />
          {myLang.oop1[5]}
          <CodeBlock code={propLog} />
          {myLang.oop1[6]}
          <CodeBlock code={noExist} />
          {myLang.oop1[7]}
          <CodeBlock code={orOp} />
          {myLang.oop1[8]}
          {myLang.oop1[9]}
          <CodeBlock code={reassign} />
          {myLang.oop1[10]}
          <CodeBlock code={trial} />
          {myLang.oop1[11]}
          <CodeBlock code={dogWithWeight} />
        </article>
        <HL />

        <article style={{ maxWidth: '600px', lineHeight: '24px'}}>
          {myLang.oop1[12]}
          {myLang.oop1[13]}
          <CodeBlock code={bracketNotation} />
          {myLang.oop1[14]}
          {myLang.oop1[15]}
          {myLang.oop1[16]}
          <CodeBlock code={bitcoin} />
          {myLang.oop1[17]}
          <CodeBlock code={special} />
          {myLang.oop1[18]}
          <CodeBlock code={special2} />
          {myLang.oop1[19]}
          <CodeBlock code={special3} />
        </article>
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

export default IntroToGenerics
