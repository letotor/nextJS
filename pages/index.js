

import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

// import {gitMemo} from "../content/gitMemo.md"
import react, { useState, useEffect } from "react";


function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

const Home = (props) => {

   const [mode, setMode] = useStickyState("day", "mode");

  return (
    <>
      <Head>
        <title>Tutorial NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Layout className="bg-blue-700 mx-auto text-blue-300" breadcrumb={true}>
        <section className="test  md:hidden text-blue-100 lg:block p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          necessitatibus ut maxime accusantium fuga! Perferendis architecto
          vitae facilis atque, eaque tempore vel ut ullam molestiae voluptas
          consequuntur iste placeat dolorem illo odio delectus optio. Quisquam
          quibusdam architecto voluptates quam doloribus, corrupti quaerat
          obcaecati deserunt dignissimos facilis omnis nam magnam tenetur!
        </section>

        <section className="bg-purple-100 text-center h-96">
          <h2 className="font-extrabold text-4xl">
            Acces au different tuto nextjS :
          </h2>
          <span>
            <Link href="/tuto-arbo"> ICI</Link>
            {/* <gitMemo></gitMemo> */}
          </span>
        </section>

        <section className="bg-gray-100 text-center h-96">
          <h2 className="font-extrabold text-4xl">Section </h2>
        </section>

        <section className="bg-blue-100 text-center h-96">
          <h2 className="font-extrabold text-4xl">Section </h2>
          <div className="container">
            <select onChange={(ev) => setMode(ev.target.value)} value={mode}>
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>

            <style jsx>{`
              .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
            `}</style>
          </div>
          <p>
            Facere nesciunt sed eligendi! Explicabo nemo sunt et ut sit iusto
            atque maxime soluta voluptate non! Impedit veritatis vero vel sunt
            placeat suscipit molestiae iusto voluptatibus possimus? Nam, placeat
            omnis, accusamus vel modi necessitatibus in quaerat dignissimos ea
            eaque distinctio.
          </p>
          <p>
            Ut, eius dolorum, sed consequuntur quasi quisquam tempore ratione
            debitis, nam alias explicabo esse enim? Velit, voluptates! Inventore
            quisquam obcaecati expedita pariatur in et ullam, corrupti dolor!
            Quam deleniti culpa et similique aliquid, magni aperiam sunt eius
            deserunt eum commodi?
          </p>
          <p>
            Enim quam dolorum sit unde eius similique ratione, consequatur, vel
            voluptatum architecto aut nam, hic ea ad aliquid itaque at odio
            quisquam exercitationem eos. Earum obcaecati omnis quo molestiae
            magni. Iure reiciendis iusto animi numquam quasi! Eos aut nam
            consequatur.
          </p>
        </section>
      </Layout>
    </>
  );
};

export default Home;



// // pages/index.js
// import { useUser } from '@auth0/nextjs-auth0';
// import Link from 'next/link';

// export default function Index() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div>
//         Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
//       </div>
//     );
//   }

//   return (
  
//       <Link href="/api/auth/login"><a>Link</a></Link>
 
//   );
// }