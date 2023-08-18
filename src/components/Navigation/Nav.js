import React, {useContext} from "react";

import { AiOutlineUserAdd } from "react-icons/ai";
import Links from "../Links";
import "./Nav.css";
import { UserContext } from "../../UserContext";
import logo from '../../142879091 3.jpg'; 



const Nav = ({ handleInputChange, query, favorites, onSignUpClick, signedUpUser }) => {
  
  return (
    <>
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes👟"
          />
      </div>
      <Links/>

      
   
        <a href="#" onClick={(e) => {
          e.preventDefault();  
          onSignUpClick();
        }}>
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        {/* {signedUpUser && <div>Welcome, {signedUpUser}!</div>} */}
    {/* <img src={logo} alt="ShoeScope Logo" className="logo" /> */}
    </nav>
          </>
  );
};

export default Nav;
