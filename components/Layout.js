import React from "react";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className, breadcrumb }) => {
  // const classNames = "bg-indigo-100";
  const classNameData = `${className}  min-h-screen`;
  return (
    <>
      <div className="breadcrumb">
        <Breadcrumb isVisible={breadcrumb}>
          Item pour affichage contextuel (mode debug ou autre)
        </Breadcrumb>
      </div>

      <Header className="__header" />
      <main className={classNameData}>{children}</main>
      <Footer className="__footer" />
    </>
  );
};

export default Layout;
