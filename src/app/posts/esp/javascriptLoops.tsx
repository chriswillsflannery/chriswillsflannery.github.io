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

import loop1 from "@/public/javascriptLoops/loop-1.jpg";
import loop2 from "@/public/javascriptLoops/loop-2.jpg";
import loop3 from "@/public/javascriptLoops/loop-3.jpg";
import loop4 from "@/public/javascriptLoops/loop-4.jpg";
import loop5 from "@/public/javascriptLoops/loop-5.jpg";

import styles from "@/styles/Home.module.css";
import { CodeBlock, HL } from "src/components";

const link = { color: "darkSlateBlue" };

const array = `
const misMarcas = [50, 75, 90];
// average: (50 + 75 + 90) / 3
`;

const sum = `
const misMarcas = [50, 75, 90];
let suma = 0;
`;

const basicLoop = `
for (let i = 0; i < 3; i++) {
  console.log(i);
}
`;

const definimosI = `
let i = 0;
`;

const definimosStopCondicion = `
i < 10;
`;

const definimosUnario = `
i++;
`;

const loop = `
const misMarcas = [50, 75, 90];
let suma = 0;

for (let i = 0; i < misMarcas.length; i++) {
  // qué es suma?
  // qué es i?
  suma = suma + misMarcas[i];
  // ahora qué es suma?
}

let media = suma / misMarcas.length;
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
        <h1>{`JavaScript: For Loops`}</h1>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>Aquí una tarea de JS a tener en cuenta:</h4>
          <p>
            Dado un <i>array</i> o lista de números, cómo utilizarías JavaScript
            para buscar la media de esos números? Y qué es una media?
          </p>
          <p>
            Una media o <i>average</i> es lo que consigues si se suman los
            números de un <i>array</i> y se los dividen por la longitud o{" "}
            <i>length</i> del array. El resultado es un número que representa el
            valor {`"central"`} o {`"típico"`} de este array. Pero ¿cómo
            calculamos esto usando JavaScript?
          </p>
          <CodeBlock code={array} lang="javascript" />
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>Almacenando la suma</h4>
          <p>
            Ya sabemos que necesitaremos una manera de sumar todos los números
            en el array... debemos crear una variable para almacenar la suma, o
            sea, una manera de llevar la cuenta de la suma{" "}
            <i>hasta este momento</i> mientras estamos continualmente añadiendo
            números a ella.
          </p>
          <CodeBlock code={sum} lang="javascript" />
          <p>
            Declaramos <b>misMarcas</b> con <i>const</i> y <b>suma</b> con{" "}
            <i>let.</i> ¿Por qué?{" "}
            <a style={link} href="./javascriptDatosAlmacenamiento">
              Lee sobre const y let si no estás seguro.
            </a>
          </p>
          <p>
            También necesitaremos una manera de hacer que el Intérprete de
            JavaScript mire cada elemento del array. Esto se logra con algo
            llamado un <i>loop</i> o bucle.
          </p>
          <p>Mira al código de abajo:</p>
          <CodeBlock code={basicLoop} lang="javascript" />
          <p>
            ¿Qué está pasando aquí? Básicamente hay 3 partes del{" "}
            <i>for loop.</i> Primero inicializamos una variable nueva llamada{" "}
            <b>i</b> y la damos el valor 0 para empezar. Esta variable <b>i</b>{" "}
            será llevar cuenta de cuántas vences se ha ejecutado nuestro loop.
          </p>
          <CodeBlock code={definimosI} lang="javascript" />
          <p>
            Entonces definimos una condición. Esta condición define cuántas
            veces queremos que el loop sigua ejecutando, o sea, se define la
            condición que debe cumplirse para que el loop pare. En este ejemplo,
            nuestro loop sigue ejecutando mientras <b>i</b> sea menor que 3.
          </p>
          <CodeBlock code={definimosStopCondicion} lang="javascript" />
          <p>
            Para la tercera parte del loop, definimos una operación para
            ejecutar después de se ha ejecutado el código en el bloque (los
            corchetes). En este caso, usamos un <i>operador unario</i> para
            decir que queremos que <b>i</b> se incremente por 1.
          </p>
          <CodeBlock code={definimosUnario} lang="javascript" />
        </article>

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>Así que aquí es la orden de operaciónes por nuestro loop:</h4>
          <ol>
            <li style={{ margin: "8px 0" }}>
              Crea <b>i</b> y establecer su valor como 0.
            </li>
            <li style={{ margin: "8px 0" }}>
              Comprueba si <b>i</b> todavía es menor que 3, si es así, sigue.
              (es 0)
            </li>
            <li style={{ margin: "8px 0" }}>
              Ejecuta el código dentro del bloque - 0 se imprime al{" "}
              <i>console.</i>
            </li>
            <li style={{ margin: "8px 0" }}>
              Incrementa <b>i</b> por 1 - ahora <b>i</b> es 1.
            </li>
            <li style={{ margin: "8px 0" }}>
              Comprueba si <b>i</b> todavía es menor que 3, si es así, sigue.
              (es 1)
            </li>
            <li style={{ margin: "8px 0" }}>
              Ejecuta el código dentro del bloque - 1 se imprime al{" "}
              <i>console.</i>
            </li>
            <li style={{ margin: "8px 0" }}>
              Incrementa <b>i</b> por 1 - ahora <b>i</b> es 2.
            </li>
            <li style={{ margin: "8px 0" }}>
              Comprueba si <b>i</b> todavía es menor que 3, si es así, sigue.
              (es 2)
            </li>
            <li style={{ margin: "8px 0" }}>
              Ejecuta el código dentro del bloque - 2 se imprime al{" "}
              <i>console.</i>
            </li>
            <li style={{ margin: "8px 0" }}>
              Incrementa <b>i</b> por 1 - ahora <b>i</b> es 3.
            </li>
            <li style={{ margin: "8px 0" }}>
              Comprueba si <b>i</b> todavía es menor que 3. Aquí <b>i</b> es 3,
              la condición se falla, y el loop sale.
            </li>
          </ol>
        </article>

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>
            Demos un paso atrás a ver otra vez al problema original - como
            conseguir la media de un <i>array</i> de números. Considera el
            siguiente ejemplo de código:
          </h4>
          <CodeBlock code={loop} lang="javascript" />
          <p>
            ¿Qué está pasando en el ejemplo de arriba? Primero declaramos 2
            variables, <b>misMarcas</b> y <b>suma.</b> Nota que hemos declarado{" "}
            <b>misMarcas</b> con <i>const</i> y <b>suma</b> con <i>let</i>. ¿Qué
            nos dice esto sobre cómo intentamos utilizar <b>suma</b>?
          </p>
          <p>
            Entonces tenemos un <i>for loop.</i> En base a lo que hemos
            aprendido sobre las 3 partes de los loops, ¿qué piensas es la
            función de este loop?
          </p>
          <p>
            Después estamos declarando una variable nueva, <b>media.</b> Esta
            almacenará el resultado de dividir <b>suma</b> entre{" "}
            <b>misMarcas.length.</b>
          </p>
          <p>Veamos a cómo el Intérprete de JavaScript manejará este código:</p>
          <Image
            src={loop1}
            alt="Diagramming execution of loop"
            width={550}
            height={300}
          />
          <p>
            Primero declaramos una variable <b>misMarcas</b> en la memoria
            global, y asignamos su valor como un array de números. Entonces
            declaramos una variable <b>suma</b> y asignamos su valor como 0.
            Entonces tenemos un for loop. Dentro del loop declaramos una
            variable <b>i</b> y asignamos su valor como 0. Entonces compruebamos
            si la condición <b>{`i < misMarcas.length`}</b> es <i>true</i>. Ya
            que así es, entramos el bloque del loop. Aquí tenemos una operación
            para hacer. Reasignamos el valor de <b>suma</b> (acuerdate que
            podemos cambiar el valor de suma porque la declaramos con <i>let</i>
            ) al <b>suma + misMarcas[0], o 50.</b> Así que suma ahora es 50.
            Entonces incrementamos <b>i</b> por 1. Ahora <b>i</b> es 1.
          </p>
          <Image
            src={loop2}
            alt="Diagramming execution of loop"
            width={550}
            height={300}
          />
          <p>
            Otra vez compruebamos si la condición del for loop es <i>true</i>.
            Ya que así todavía es, entramos el bloque del loop. Reasignamos el
            valor de <b>suma</b> al <b>suma + misMarcas[1], o 75.</b> Suma ahora
            es 125. Incrementamos <b>i</b> - ahora <b>i</b> es 2.
          </p>
          <Image
            src={loop3}
            alt="Diagramming execution of loop"
            width={550}
            height={300}
          />
          <p>
            Otra vez compruebamos si la condición del for loop es <i>true</i>.
            Ya que así todavía es, entramos el bloque del loop. Reasignamos el
            valor de <b>suma</b> al <b>suma + misMarcas[2], o 90.</b> Suma ahora
            es 215. Incrementamos <b>i</b> - ahora <b>i</b> es 3.
          </p>
          <Image
            src={loop4}
            alt="Diagramming execution of loop"
            width={550}
            height={300}
          />
          <p>
            Otra vez compruebamos si la condición del for loop es <i>true</i>.{" "}
            <b>{`i < misMarcas.length`}</b> - es <i>true</i>? No, no es. Los dos
            valores son iguales.
          </p>
          <Image
            src={loop5}
            alt="Diagramming execution of loop"
            width={550}
            height={300}
          />
          <p>
            Ya que ahora la condición en el loop es <i>false</i>, el loop se
            sale y el Intérprete sigue adelante. Declaramos una variable{" "}
            <b>media</b> en la memoria global y asignamos su valor a{" "}
            <b>sum / misMarcas.length.</b>
          </p>
          <p>
            Y eso es! Ahora deberías sentirte un poco más cómodo escribiendo for
            loops. Más adelante veremos los diferentes tipos de loops que
            encontrarás en JavaScript.
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
