//Header component: Links to all the pages and styled reasonably

//Importing the needed components from React and Next
import React from "react";
import Link from 'next/link';

const Header = ({ pageTitle }) => (
  <div>
    <Link href="/">
      <p className='link'>Home</p>
    </Link>
    <Link href="/about">
      <p className='link'>About</p>
    </Link>
    <Link href="/contact">
      <p className='link'>Contact</p>
    </Link>
    <Link href="/projects">
      <p className='link'>Projects</p>
    </Link>
    <h1 className="page-title">{pageTitle}</h1>
    <style jsx>{`
          div{
            display: flex;
            justify content: center;
          }

          .link{
            margin-top: 0px;
            font-size: 8px;
            font-family: arial, sans serif;
            margin-right: 30px
            colour: black
          }
        `}</style>
  </div>
);

export default Header
