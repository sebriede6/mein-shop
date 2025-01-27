import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";



function Header() {
    return (
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <Logo />
        <Search />
        <Profile isLoggedIn />
      </header>
    );
  }
  
  export default Header;
  
