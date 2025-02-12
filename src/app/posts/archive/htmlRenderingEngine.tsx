/*
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import browserStructure from "@/public/htmlRenderingEngine/1-browserStructure.jpg";
import overview from "@/public/htmlRenderingEngine/1-overview.jpg";
import parsingFlow from "@/public/htmlRenderingEngine/4-parsingFlow.jpg";
import errorTolerance from "@/public/htmlRenderingEngine/6-errorTolerance.jpg";
import parser from "@/public/htmlRenderingEngine/2-parser.jpg";
import parseTree from "@/public/htmlRenderingEngine/5-parseTree.jpg";

import styles from "@/styles/Home.module.css";

const HtmlRenderingEngine: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>HTML Rendering Engine</h1>

        <div>
          <p>
            The browser has various layers which speak to each other. Here we
            are mainly concerned with the rendering engine layer.
          </p>
          <Image
            src={browserStructure}
            alt="Browser Structure"
            priority
            className={styles.image}
          />
        </div>

        <div>
          <p>
            Displaying content in the browser window is a multi-step process.
          </p>
          <Image src={overview} alt="Overview" className={styles.image} />
        </div>

        <div>
          <p>
            To retrieve an HTML document, the browser fetches the asset. It is
            received in bytes, similar to machine code. These bytes are
            transformed into tokens which are parsed to create the DOM.
          </p>
          <Image
            src={errorTolerance}
            alt="Error Tolerance"
            className={styles.image}
          />
        </div>

        <div>
          <p>
            Before html we had xhtml strict. With xhtml strict, if a dev made a
            mistake, the end user would see a big nasty error in the browser
            window.
          </p>
          <Image
            src={parsingFlow}
            alt="Parsing Flow"
            className={styles.image}
          />
        </div>

        <div>
          <p>
            Tokens are converted into nodes which are attached to the parse
            tree.
          </p>
          <Image src={parser} alt="Parser" className={styles.image} />
        </div>

        <div>
          <p>The parse tree is later converted into the DOM tree.</p>
          <Image src={parseTree} alt="Parse Tree" className={styles.image} />
        </div>

        <p>
          Continued in{" "}
          <span>
            <Link href="./cssRenderingEngine">CSS Rendering Engine.</Link>
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

export default HtmlRenderingEngine;
*/
