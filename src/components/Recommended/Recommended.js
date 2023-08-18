import React from "react";
import Button from "../Button";
import "./Recommended.css";

// Assuming the logo is directly inside the `src/` directory
import logo from '../../142879091 3.jpg'; // Adjust the path based on the logo's location

const Recommended = ({ handleClick }) => {
  return (
    <>
    {/* Display the logo */}
    {/* <img src={logo} alt="ShoeScope Logo" className="logo" /> */}
      <div><img src={logo} alt="ShoeScope Logo" className="logo" />
        <h2 className="recommended-title"></h2>
        

        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Jordan" title="Jordan" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
