import React from "react";
import Head from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({title, children}) => (
    <div className="layout">
    <Head>
        <meta charset="utf-8" />
        <meta name="description" content="Microsoft Consultancy that provide design, development and architecture resources."/>
        <meta name="keywords" content="Microsoft, MVC, C#, .NET, Responsive, architecture, consultancy, design, development"/>
        <meta name="author" content="Box-Concepts Limited"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link href='http://fonts.googleapis.com/css?family=Cabin:400,600|Open+Sans:300,600,400' rel='stylesheet'/>
        <title>{"Box Concepts - " + title}</title>
    </Head>
    <Header/>
    <div>
        {children}
    </div>
    <Footer/>
    </div>
);

export default Layout;