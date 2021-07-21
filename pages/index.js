import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      {" "}
      <h1 className=" md:text-2xl  lg:text-4xl">
        <Link href="/posts/first-post">
          <a>Allez sur blog</a>
        </Link>
      </h1>
    </>
  );
}
