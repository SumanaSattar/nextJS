import React from "react";
import Home from ".";
import type {  NextPage } from "next";
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'

const HomePage:NextPage<{Component:any,pageProps:any}>=({ Component, pageProps })=> {
  return <Component {...pageProps} />;
}


export default HomePage;
