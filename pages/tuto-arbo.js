import Head from 'next/head'
import Image from 'next/image'

import Link from "next/link";
import Layout from "../components/Layout";

export default function Tuto() {
  return (
    <Layout>
      <Head>
        <title>Tutorial NextJS</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>{" "}
      <h1 className=" md:text-2xl  lg:text-4xl">
        <ul>
          <li>
            <Link href="/">
              <a>Les pages NextJS</a>
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
    </Layout>
  );
}
