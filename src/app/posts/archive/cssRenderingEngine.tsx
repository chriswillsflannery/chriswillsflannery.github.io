/*
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import cssParsing from "@/public/cssRenderingEngine/8-cssParsing.jpg";
import cssOM from "@/public/cssRenderingEngine/9-webkitCSSParser.jpg";
import orderOfParsing from "@/public/cssRenderingEngine/10-orderOfProcessing.jpg";
import renderTreeConstruction from "@/public/cssRenderingEngine/11-renderTreeConstruction.jpg";
import renderAndDomTrees from "@/public/cssRenderingEngine/12-renderAndDomTrees.jpg";

import styles from "@/styles/Home.module.css";

const CSSRenderingEngine: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>CSS Rendering Engine (1/2)</h1>
        <h3>
          ...continued from{" "}
          <span>
            <Link href="./htmlRenderingEngine">HTML Rendering Engine</Link>
          </span>
        </h3>

        <div>
          <p>
            CSS parsing is more strict ( but bear in mind CSS is not truly a
            &quot;language&quot;, it is simply a set of markup rules.)
          </p>
          <Image
            src={cssParsing}
            alt="CSS Parsing"
            priority
            className={styles.image}
          />
        </div>

        <div>
          <p>The CSS parse tree is converted into the CSSOM.</p>
          <Image src={cssOM} alt="CSSOM" className={styles.image} />
        </div>

        <div>
          <p>Speculative parsing happens in a separate thread.</p>
          <Image
            src={orderOfParsing}
            alt="Order of Parsing"
            className={styles.image}
          />
        </div>

        <div>
          <p>
            The DOM and the CSSOM are combined to form the Render Tree. (The
            Render Tree is constructed asynchronously).
          </p>
          <Image
            src={renderTreeConstruction}
            alt="Render Tree Construction"
            className={styles.image}
          />
        </div>

        <div>
          <p>Render Tree and DOM tree are similar, but not 1:1.</p>
          <Image
            src={renderAndDomTrees}
            alt="Render and DOM trees"
            className={styles.image}
          />
        </div>

        <p>
          Continued in{" "}
          <span>
            <Link href="./cssRenderingEngine2">CSS Rendering Engine. 2/2</Link>
          </span>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../../">Home</Link>
        </p>
      </footer>
    </div>
  );
};

export default CSSRenderingEngine;
*/
