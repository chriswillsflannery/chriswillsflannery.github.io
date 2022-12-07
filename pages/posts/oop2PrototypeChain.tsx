import { useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Prism from 'prismjs';
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import { CodeBlock, HL } from '@/components';
import styles from '@/styles/Home.module.css';
import useWindowSize from '@/hooks/useWindowSize';
import { en } from '@/util/en';
import { es } from '@/util/es';
import dunderProto from '@/public/oop/dunderproto.jpg';
import ObjectArray from '@/public/oop/ObjectArray.jpg';
import objectLiteral from '@/public/oop/objectliteral.jpg';
import myObjPrototype from '@/public/oop/myObjPrototype.jpg';
import undefined from '@/public/oop/undefined.jpg';
import propertiesofObject from '@/public/oop/propertiesofObject.jpg';
import newArray from '@/public/oop/newArray.jpg';
import chris from '@/public/oop/chris.jpg';
import chris2 from '@/public/oop/chris2.jpg';

const myPerson = `
const myPerson = {
  eyes: 'green',
  greet: () => 'hello',
}
`;

const objectCreate = `
const chris = Object.create(null);
`;

const passIn = `
const myPerson = {
  eyes: 'green',
  greet: () => 'hello',
}

const chris = Object.create(myPerson);
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
        {myLang.oop2.title}
        <article style={{ maxWidth: '600px', lineHeight: '24px'}}>
          {myLang.oop2.sub1}
          {myLang.oop2[1]}
          <Image
            src={dunderProto}
            alt="Prototype Property on object"
            width={600}
            height={300}
          />
          {myLang.oop2[2]}
          {myLang.oop2[3]}
          <Image
            src={undefined}
            alt="Prototype of my object"
            width={600}
            height={300}
          />
          {myLang.oop2[4]}
          <Image
            src={myObjPrototype}
            alt="Prototype of my object"
            width={600}
            height={350}
          />
          {myLang.oop2[5]}
          {myLang.oop2[6]}
          <Image
            src={propertiesofObject}
            alt="Properties of Object"
            width={600}
            height={450}
          />
          {myLang.oop2[7]}
          {myLang.oop2[8]}
          <Image
            src={ObjectArray}
            alt="Object Array inheritance"
            width={600}
            height={300}
          />
          {myLang.oop2[9]}
          <Image
            src={newArray}
            alt="array prototype"
            width={600}
            height={300}
          />
          {myLang.oop2[10]}
          <CodeBlock code={myPerson} />
          {myLang.oop2[11]}
          <CodeBlock code={objectCreate} />
          {myLang.oop2[12]}
          <Image
            src={objectLiteral}
            alt="Object Array inheritance"
            width={600}
            height={300}
          />
          {myLang.oop2[13]}
          <CodeBlock code={passIn} />
          {myLang.oop2[14]}
          <Image
            src={chris}
            alt="chris object"
            width={600}
            height={350}
          />
          {myLang.oop2[15]}
          <Image
            src={chris2}
            alt="chris object"
            width={600}
            height={350}
          />
          {myLang.oop2[16]}
          {myLang.oop2[17]}
          {myLang.oop2[18]}
        </article>
        <HL />
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
