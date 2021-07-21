import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      {" "}
      <h1 className=" md:text-2xl  lg:text-4xl">
        <ul>
          <li>
            <Link href="/">
              <a>Home Page : Tutorials Next</a>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/posts/first-post">
              <a>Les Links coté client</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/posts/image-next">
              <a>Les images optimisée Next</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/posts/tailwind">
              <a>Un exemple de test avec tailwind</a>
            </Link>
          </li>
        </ul>

      </h1>
    </>
  );
}
