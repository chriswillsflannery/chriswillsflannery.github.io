/*
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import styles from "@/styles/Home.module.css";
import { CodeBlock, HL } from "src/components";
import reduce1 from "@/public/javascriptReduce/reduce1.jpg";
import reduce2 from "@/public/javascriptReduce/reduce2.jpg";
import reduce3 from "@/public/javascriptReduce/reduce3.jpg";
import reduce4 from "@/public/javascriptReduce/reduce4.jpg";
import reduce5 from "@/public/javascriptReduce/reduce5.jpg";
import reduce6 from "@/public/javascriptReduce/reduce6.jpg";
import reduce7 from "@/public/javascriptReduce/reduce7.jpg";
import reduce8 from "@/public/javascriptReduce/reduce8.jpg";

const link = { color: "seagreen" };

const array = `
const nums = [10, 20, 35];
const suma = nums.reduce((acu, el) => {
  acu = acu + el;
  return acu;
}, 0);

console.log(suma);
// 65
`;

const JavaScriptQueEs: NextPage = () => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>
        <h1>{`JavaScript: reduce()`}</h1>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>JavaScript array método: reduce</h4>
          <p>
            Vamos a tomar lo que ya sabemos de{" "}
            <a style={link} href="./javascriptForEach">
              <b>forEach()</b>
            </a>{" "}
            y de{" "}
            <a style={link} href="./javascriptMap">
              <b>map()</b>
            </a>{" "}
            y aprendemos un nuevo método de array: <b>reduce.</b>
          </p>
          <p>
            El método <b>reduce</b> es una herramienta muy útil para cuando
            queremos combinar los elementos de una lista, de alguna forma. Para
            ser más preciso, <b>reduce</b> tomará como entrada o <i>input</i> un
            array de elementos, devolverá{" "}
            <b>
              <i>una sola cosa.</i>
            </b>
          </p>
          <p>
            Esta cosa devuelta podría ser cualquiera de los{" "}
            <a style={link} href="./javascriptVariables">
              <i>types</i>
            </a>{" "}
            de que hemos hablado antes. Podría ser un <i>string,</i> or un{" "}
            <i>number</i>. Incluso podría ser un <i>array,</i> o <i>object</i>!
          </p>
          <p>Veamos un ejemplo:</p>
          <CodeBlock code={array} lang="javascript" />
          <p>
            ¿Qué está pasando aquí? Primero, declaramos un array de números.
            Entonces con <b>reduce</b>, combinamos esos números en una sola
            suma. Vamos a ver como JavaScript lo interprete, bajo del capó:
          </p>
          <Image
            src={reduce1}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>
            Primero declaramos una variable <b>nums</b> en la memoria global y
            asignamos como su valor un array de números. Entonces declaramos una
            variable <b>suma</b> en la memoria global y asignamos como su
            valor... ¿qué? No lo sabemos hasta que ejecutamos el <b>reduce.</b>
          </p>
          <Image
            src={reduce2}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>
            <b>reduce,</b> justo como <i>forEach</i> y <i>map</i>, es un loop -
            es un loop que itera sobre los elementos del array (nums). Por cada
            elemento del array, <b>reduce</b> ejecuta una{" "}
            <i>función callback.</i> Sin embargo, la función callback de{" "}
            <b>reduce</b> es bastante diferente que la de <b>map:</b>
          </p>
          <p>
            En la función callback de <b>reduce,</b> por defecto hay 2
            parámetros que tenemos que definir:{" "}
            <b>
              {`array.reduce((`}
              <i>{`acumulador, elemento`}</i>
              {`) => {})`}
            </b>
            .
          </p>
          <p>
            <b>acumulador</b> es el [cosa singular] que <b>reduce</b> va a
            devolver. Tenemos 2 opciónes: Podemos elegir que el acumulador
            empieza como un dato personalizado (aquí hemos hecho esto - por
            declarar el segundo argumento de <b>reduce</b> como el valor 0.
          </p>
          <p>
            La segunda opción es que si no declaramos el segundo argumento de{" "}
            <b>reduce,</b> el acumulador va a empezar como el primer elemento en
            el array, y el loop va a empezar con el segundo elemento en el
            array.
          </p>
          <p>
            En el caso de nuestro código de arriba, el acumulador empieza como 0
            y el loop empieza con el primer elemento en el array, 10. Los dos
            están declarado como variables en la memoria local del loop.
          </p>
          <Image
            src={reduce3}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>
            Dentro del bloque del loop, en la memoria local, reasignamos el
            valor de <i>acu</i> a la operación <b>acu (0) + el (10).</b>
          </p>
          <Image
            src={reduce4}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>
            Y, un paso muy importante para que <b>reduce</b> pueda funcionar
            como se espera, tenemos que devolver el valor de <b>acu</b>, a la
            siguiente iteración del loop.
          </p>
          <Image
            src={reduce5}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>
            Segundo paso del loop: reasignamos el valor de <i>acu</i>...
          </p>
          <Image
            src={reduce6}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>...y acu se devuelve...</p>
          <Image
            src={reduce7}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>Tercer paso...</p>
          <Image
            src={reduce8}
            alt="Diagramming execution of reduce method"
            width={550}
            height={300}
          />
          <p>
            ...y <i>acu</i> se devuelve por la última vez.
          </p>
          <p>
            Ahora no hay más elementos para iterar. El loop devuelve el final
            valor de <i>acu</i> y este valor asignamos a la variable <b>suma</b>{" "}
            en la memoria global.
          </p>
        </article>
        <HL />
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../../">Home</Link>
        </p>
      </footer>
    </div>
  );
};

export default JavaScriptQueEs;
*/
