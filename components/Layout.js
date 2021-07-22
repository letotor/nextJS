import React from "react";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className, breadcrumb }) => {
  // const classNames = "bg-indigo-100";
  const classNameData = `${className}  min-h-screen`;
  return (
    <div>
      <div className="breadcrumb">
        <Breadcrumb isVisible={breadcrumb}>
          Ceci est un message promotionnel
        </Breadcrumb>
      </div>

      <Header />
      <main className={classNameData}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
