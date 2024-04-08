import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userDetails = useSelector((state) => state.signinSlice);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://ashabb.netlify.app/">
        <img
          src="/logo.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TODO App
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar>
          <Link to={"home"}>Home</Link>
        </Navbar>
        <Navbar>
          <Link to={"profile"}>Profile</Link>
        </Navbar>
        <Navbar>
          <Link to={"contactus"}>Contact Us</Link>
        </Navbar>
        {!userDetails.isAuthenticated ? (
          <>
            <Navbar>
              <Link to={"signin"}>Signin</Link>
            </Navbar>
            <Navbar>
              <Link to={"signup"}>Signup</Link>
            </Navbar>
          </>
        ) : (
          <>
            <Navbar>
              <Link to={"logout"}>Logout</Link>
            </Navbar>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
