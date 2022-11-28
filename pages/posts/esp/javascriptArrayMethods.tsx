import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { useEffect } from 'react';
import Prism from 'prismjs';
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import styles from '@/styles/Home.module.css';
import { CodeBlock, HL } from '@/components';

const link = { color: 'darkSlateBlue' };

const array = `
const animales = ['gato', 'perro', 'murcielago'];
// índice           0        1          2
`;

const lookupIndex = `
console.log(animales[2]);
// 'murcielago'
`;

const lookupIndexUnknown = `
const misAmigos = ['Chris', 'Walter'];
console.log(misAmigos[2]);
`;

const loopIndex = `
const misMarcas = [50, 75, 90];
for (let i = 0; i < misMarcas.length; i++) {
  console.log(misMarcas[i]);
}
`;

const employeeList = `
const empleados = ['Javier', 'Barbara', 'Eli'];
`;

const usePush = `
empleados.push('Dave');
console.log(empleados);
// ['Javier', 'Barbara', 'Eli', 'Dave'];
`;

const usePushMultiple = `
empleados.push(newEmp1, newEmp2);
`;

const pushReturnVal = `
const empleados = ['Javier', 'Barbara', 'Eli'];
const val = empleados.push('Dave');
console.log(empleados);
// ['Javier', 'Barbara', 'Eli', 'Dave'];
console.log(val);
// 4
`;

const popReturnVal = `
const popped = empleados.pop();
console.log(empleados);
// ['Javier', 'Barbara', 'Eli'];
console.log(popped);
// 'Dave'
`;

const unshiftReturnVal = `
const unshifted = empleados.unshift('Sergio');
console.log(empleados);
// ['Sergio', 'Javier', 'Barbara', 'Eli'];
console.log(unshifted);
// 4
`;

const shiftReturnVal = `
const shifted = empleados.shift();
console.log(empleados);
// ['Javier', 'Barbara', 'Eli']
console.log(shifted);
// 'Sergio'
`;

const solucion = `
const array = [];
array.push(el1, el2);
array.pop();
array.push(nuEl2);
array.shift();
array.unshift(nuEl1);
array[1] = nuEl3;

console.log(array);
// [nuEl1, nuEl3];
`;

const JavaScriptQueEs: NextPage = () => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    }
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
        <h1>{`JavaScript: Métodos de Array`}</h1>
        <HL />

        <article style={{ maxWidth: '600px', lineHeight: '24px'}}>
          <h4>Búsqueda de elementos</h4>
          <p>En JavaScript a veces es útil contener una lista de datos en una estructura de datos llamado un <i>array.</i> Un array es una lista ordenada de elementos donde a cada elemento se le asigna un índice. Este índice representa la posición del elemento en el array. Observa:</p>
          <CodeBlock code={array} lang="javascript" />
          <p>Los índices del array comienzan con 0. Esta significa que el índice atribuido a <i>gato</i> es 0, <i>perro</i> es 1, etc. Si definimos un array de elementos y queremos <i>buscar</i> buscar un elemento por su índice, por ejemplo, en índice 2, podríamos hacer algo así:</p>
          <CodeBlock code={lookupIndex} lang="javascript" />
          <p>Qué pasaría si hagamos algo así?</p>
          <CodeBlock code={lookupIndexUnknown} lang="javascript" />
          <p>Qué se imprime al <i>console</i>? Bueno ya que este array no tiene elemento definido en índice 2, veremos <b>undefined</b> imprimido al console.</p>
          <p>Este modelo de buscar elementos por su índice puede ser muy útil, especialmente cuando <a style={link} href="./javascriptLoops">se introducen los loops.</a> Considera el siguiente ejemplo - que se imprime al console aquí?</p>
          <CodeBlock code={loopIndex} lang="javascript" />
        </article>
        <HL />

        <article style={{ maxWidth: '600px', lineHeight: '24px'}}>
          <h4>.push() & .pop()</h4>
          <p>Con los arrays en JavaScript, automaticamente conseguimos unas operaciones llamado <i>métodos</i> que podemos realizar en los datos dentro del array. Digamos que somos una empresa con una lista de empleados:</p>
          <CodeBlock code={employeeList} lang="javascript" />
          <p>Un empleado nuevo, Dave, empieza en la empresa. Tenemos que añadir su nombre a la lista de empleados. Cómo podemos hacerlo? Vamos usar <b>push</b>. Echa un vistazo:</p>
          <CodeBlock code={usePush} lang="javascript" />
          <p>Fácil! Algunas cosas interesantes a tener en cuenta: Podemos <i>push</i> múltiples elementos a la vez, por ejemplo, si 2 empleados nuevos empiezan, en vez de hacer múltiples declaraciónes de <i>push</i>, simplemente podemos hacer:</p>
          <CodeBlock code={usePushMultiple} lang="javascript" />
          <p>Algo más para tener en cuenta: el <b>return</b> valor de <b>push</b> es el nuevo <b>length</b> del array. Considera:</p>
          <CodeBlock code={pushReturnVal} lang="javascript" />
          <p>De la nada tu jefe aparece y te dice, <i>oye, cambio de planes, Dave fue despedido en su primer dia (lo siento Dave) necesitamos eliminarlo de la lista de empleados.</i> Podemos eliminar un elemento desde el final del array con <b>pop:</b></p>
          <CodeBlock code={popReturnVal} lang="javascript" />
          <p>El tipo del <b>return</b> de <b>pop</b> es un poco diferente. Mientras que <b>push</b> devuelve el nuevo <b>length</b> del array, <b>pop</b> devuelve el elemento que ha sido eliminado del array.</p>
        </article>
        <HL />

        <article style={{ maxWidth: '600px', lineHeight: '24px'}}>
          <h4>.shift() & .unshift()</h4>
          <p>Consideremos otro escenario. Trabajas por una empresa y tienes una lista de empleados, en el orden que fueron contratados. Javier fue contratado primero, entonces Barbara, entonces Eli.</p>
          <CodeBlock code={employeeList} lang="javascript" />
          <p>De la nada tu jefe aparace y te dice, <i>oye, de verdad se me olvido alguien. Sergio fue contratado primero, él debe ser primero en la lista.</i></p>
          <p>Cómo hacemos esto? JavaScript nos provee un método llamado <b>unshift</b> para añadir elementos al frente del array. Observa:</p>
          <CodeBlock code={unshiftReturnVal} lang="javascript" />
          <p>Muy similar con lo que hemos visto con <b>push</b>, el valor <b>return</b> de <b>unshift</b> es el nuevo <b>length</b> del array.</p>
          <p>De forma similar a cómo <b>pop</b> elimina un elemento del final del array, podemos eliminar un elemento del frente con <b>shift</b>:</p>
          <CodeBlock code={shiftReturnVal} lang="javascript" />
          <p>Ya tenemos todos los herramientos que necesitamos para añadir o elimnar un elemento desde el frente o desde el final del array. Prueba esto tú mismo antes de ver la solución de abajo!</p>
          <ol>
            <li style={{ margin: '8px 0' }}>Crea nuevo array</li>
            <li style={{ margin: '8px 0' }}>Añade 2 elementos al array</li>
            <li style={{ margin: '8px 0' }}>Elimina el segundo elemento</li>
            <li style={{ margin: '8px 0' }}>Añade nuevo (diferente) segundo elemento</li>
            <li style={{ margin: '8px 0' }}>Elimina el primer elemento</li>
            <li style={{ margin: '8px 0' }}>Añade nuevo (diferente) primer elemento</li>
            <li style={{ margin: '8px 0' }}>Reemplaza el segundo elemento con diferente elemento</li>
          </ol>
          <CodeBlock code={solucion} lang="javascript" />
        </article>
        <HL />
        
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

export default JavaScriptQueEs