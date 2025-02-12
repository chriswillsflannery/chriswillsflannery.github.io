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
import firstVariables from "@/public/javascriptDatos/firstvariables.jpg";
import threadOfEx from "@/public/javascriptDatos/threadOfEx.jpg";
import consoleEx from "@/public/javascriptDatos/consoleEx.png";

const link = { color: "darkSlateBlue" };

const constExamples = `
const name = "chris";
const info = {
  ojos: "verde"
}
const lista = [1, true, "3"];
`;

const ifStatements = `
const miEdad = 28;

if (miEdad <= 27) {
  console.log('mi edad es menos que 28');
} else if (miEdad >= 29) {
  console.log('mi edad es mas que 28');
} else {
  console.log('mi edad es 28');
}
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
        <h1>{`JavaScript: Almacenamiento de datos`}</h1>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>Cómo JavaScript almacena datos</h4>
          <p>
            Cuando queremos crear nuevos datos en JavaScript, los guardamos en
            algo llamado{" "}
            <a style={link} href="./javaScriptVariables">
              una variable.
            </a>{" "}
            Las variables se presentan de diferentes formas, pero las que nos
            enfocamos aquí son <i>const</i> y <i>let.</i> <b>Const</b> se
            utiliza para almacenar datos que no van a cambiar, y <b>let</b> se
            utiliza cuando ya sabemos que vamos a cambiar el dato adelante. Como
            ya hemos visto, las variables en JavaScript podrían venir de muchas
            formas, conocido como <i>types.</i>
          </p>
          <p>
            Vamos a crear unas variables utilizando la clave de declaración{" "}
            <b>const</b>:
          </p>
          <CodeBlock code={constExamples} />
          <p>
            ¿Cómo el navegador interpreta estas líneas del código? En cualquier{" "}
            <a style={link} href="./javascriptComoFunciona">
              <i>runtime environment</i>
            </a>{" "}
            hay una sección dedicada a almacenar datos, esta llamamos{" "}
            <i>memoria global.</i> Cuando creamos las variables y se lee nuestro
            código - empezando por arriba y bajando línea tras línea, el
            navegador almacena cualquieras variables que hemos declarado en{" "}
            <i>memoria global.</i>
          </p>
          <p>
            Observa la imagen de abajo - esta es una representación de 2
            componentes claves de nuestro <i>runtime</i> - el contexto de
            ejecucción global (donde nuestro código se lee desde arriba para
            abajo y se lo interpreta) y la memoria global - donde se almacena
            nuestras variables. En el ejemplo de código de arriba, declaramos 3
            variables - desde arriba: <i>chris,</i> <i>info,</i> y <i>lista.</i>{" "}
            Estas 3 se almacenan en memoria global en ese orden. Como el hilo de
            ejecucción pasa desde línea a línea, desde arriba para abajo, se lo
            &quot;lee&quot; cada línea de código y decide si algunas cosas se
            necesitan almacenar en memoria.
          </p>
          <Image
            src={firstVariables}
            alt="Variables in global memory"
            width={550}
            height={220}
          />
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>Vamos a echar un vistazo a otro ejemplo:</h4>
          <CodeBlock code={ifStatements} />
          <p>
            ¿Qué está pasando arriba? Primero, el hilo de ejecucción lee la
            línea superior y observa que estamos declarando una variable{" "}
            <b>miEdad.</b> El <i>Intérprete de JavaScript</i> almacena esta
            variable en memoria global con el valor 28. Entonces el hilo mueva a
            la siguiente línea.
          </p>
          <p>
            El hilo comprueba a ver si <b>miEdad</b> está menor o igual que 27.
            Ya que miEdad es 28, esta prueba falla, y el intérprete se salta los
            códigos dentro de los corchetes {`{}`}, y mueve a la siguiente
            prueba. Otra vez, comprueba si miEdad esta mejor o igual que 29.
            Esta prueba también falla. Entonces el intérprete mueve a la tercera
            prueba, nuestro bloque <i>else</i>. Esto actúa como una condición
            por defecto para cualquier condición que no se haya cumplido
            todavía. El intérprete lee y se ejecuta el código dentro de los
            corchetes del bloque <i>else</i> y imprimir <b>mi edad es 28</b> al{" "}
            <i>console.</i>
          </p>
          <Image
            src={threadOfEx}
            alt="Thread of execution"
            width={550}
            height={220}
          />
          <p>
            Intentalo tú mismo. Abre los <i>herramientos o devtools</i> del
            navegador por hacer <i>right-clic</i> en cualquiera parte de esta
            página y darle <i>clic</i> a <b>Inspect/Inspeccionar.</b> Los
            devtools del navegador van a abrir en una nueva pestaña. Haz clic en{" "}
            <i>console</i> y empieza a teclear dentro de la ventana que aparece.
            Intenta copiar el ejemplo de código de arriba, y se lo ejecuta por
            entrarlo. Si quieres {`'saltarse'`} una línea sin entrarla, mantenga
            pulsada la tecla <i>shift</i> y entrar. Deberías ver tu código
            ejecutado y el mensaje {`'mi edad es 28'`} imprimido al console. Si
            encuentras un error, comprueba tu sintaxis (puntuación), y inténtalo
            de nuevo.
          </p>
          <Image
            src={consoleEx}
            alt="View of browser console"
            width={550}
            height={250}
          />
        </article>
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
