import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import styleComputation from '@/public/cssRenderingEngine2/13-styleComputation.jpg';
import styleRuleTree from '@/public/cssRenderingEngine2/14-styleRuleTree.jpg';
import applyRulesCascade from '@/public/cssRenderingEngine2/15-applyRulesCascade.jpg';
import layout from '@/public/cssRenderingEngine2/16-layout.jpg';
import layoutProcess from '@/public/cssRenderingEngine2/17-layoutProcess.jpg';
import cssVisualModel from '@/public/cssRenderingEngine2/18-cssVisualModel.jpg';
import cssBlockTypes from '@/public/cssRenderingEngine2/19-cssBlockTypes.jpg';
import cssPositioning from '@/public/cssRenderingEngine2/20-cssPositioning.jpg';

import styles from '@/styles/Home.module.css';

const CSSRenderingEngine: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>CSS Rendering Engine (2/2)</h1>
        <h3>...continued from{' '}
          <span>
            <Link href="./cssRenderingEngine">
              CSS Rendering Engine (1/2)
            </Link>
          </span>
        </h3>

        <div>
          <p>Computing styles to match up with render tree nodes.</p>
          <Image
            src={styleComputation}
            alt="Style Computation"
            priority
          />
        </div>

        <div>
          <p>CSS Style rule tree is yet another tree created to help match styles with Render Tree nodes.</p>
          <Image
            src={styleRuleTree}
            alt="Style Rule Tree"
          />
        </div>

        <div>
          <p>CSS Cascade rules determine how render tree nodes are lined up on the page.</p>
          <Image
            src={applyRulesCascade}
            alt="CSS Cascade Rules"
          />
        </div>

        <div>
          <p>The render tree nodes are laid out on the page (and potentially updated). If a user makes an incremental change to a render tree node, that node is marked as &lsquo;dirty&lsquo; and it will be re-layed out along with its children (similar to how the React Trees diff to only update altered components and their children!)</p>
          <Image
            src={layout}
            alt="Render Tree layout"
          />
        </div>

        <div>
          <p>Elements are laid out, then their positions are fine-tuned, then painted.</p>
          <Image
            src={layoutProcess}
            alt="Layout Process"
          />
        </div>

        <div>
          <p>How CSS affects HTML element positioning.</p>
          <Image
            src={cssVisualModel}
            alt="CSS Visual Model"
          />
        </div>

        <div>
          <p>CSS Box types:</p>
          <Image
            src={cssBlockTypes}
            alt="CSS Block types"
          />
        </div>

        <div>
          <p>CSS element positioning - x, y, and z space</p>
          <Image
            src={cssPositioning}
            alt="CSS Positioning"
          />
        </div>
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

export default CSSRenderingEngine
