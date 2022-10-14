import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";


import "./style/styles.css";


import PageRouter from "./components/router.jsx";




export default function Home() {
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">

          <PageRouter />
          
        </div>
      </main>

      <footer className="footer">
        <div className="links">
          <Link href="/">F1</Link>
          <span className="divider">|</span>
          <Link href="/about">Marvel</Link>
        </div>
        
        <a
          className="btn--remix"
          target="_top"
          
        >
          
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          From Saniya
        </a>
      </footer>
    </Router>
  );
}
