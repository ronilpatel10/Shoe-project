import { Link } from "react-router-dom";
import React from "react";

function Links (){

return(    

    <div className="profile-container">
        
<Link to="/">Home🏠</Link>
<Link to="/NewShoeForm">ShopeScope🎯</Link>
<Link to="/about">About🧐</Link>
<Link to="/favorites"> Favorites⭐️ </Link>
</div>
)}

export default Links