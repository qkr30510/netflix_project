import App, { Container } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import "../styles/reset.scss";

export default class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
    <Layout>
        <Component {...pageProps} />        
      </Layout>
    );
  }
}
