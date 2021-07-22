import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children,className}) => {
    // const classNames = "bg-indigo-100";
     const classNameData= `${className}  min-h-screen`
    return (
      <div>
        <Header />
        <main className={classNameData}>{children}</main>
        <Footer />
      </div>
    );
}

export default Layout
