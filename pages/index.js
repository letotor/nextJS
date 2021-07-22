import styles from "../styles/Home.module.css";

import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const home = (props) => {
  return (
    <>
      <Head>
        <title>Tutorial NextJS</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>{" "}
      <Layout className="bg-blue-700 mx-auto text-blue-300">
        <div className="test  md:hidden text-blue-100 lg:block p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          necessitatibus ut maxime accusantium fuga! Perferendis architecto
          vitae facilis atque, eaque tempore vel ut ullam molestiae voluptas
          consequuntur iste placeat dolorem illo odio delectus optio. Quisquam
          quibusdam architecto voluptates quam doloribus, corrupti quaerat
          obcaecati deserunt dignissimos facilis omnis nam magnam tenetur!
        </div>
        <div className="bg-red-100 text-center h-96">
          <h2 className="font-extrabold text-4xl">
            Acces au different tuto nextjS :
          </h2>
          <span>
            <Link href="/tuto-arbo"> ICI</Link>
          </span>
        </div>

        <div className="bg-gray-100 text-center h-96">
          <h2 className="font-extrabold text-4xl">Section </h2>
        </div>

        <div className="bg-blue-100 text-center h-96">
          <h2 className="font-extrabold text-4xl">Section </h2>
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
        </div>
      </Layout>
    </>
  );
};

export default home;
