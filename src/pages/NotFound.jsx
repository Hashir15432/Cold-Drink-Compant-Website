import React from "react";
import img from "../assets/all-images/img/not-found.png";
import "../styles/notfound.css";
const NotFound = () => {

    return <div>
    
          <h1 class="h1-found">Not Found</h1>
           <div class="image-notfound">
          <img src={img} alt="Not Found" class="image-1" className="w-50 h-50"/>
          </div>      
  </div>;
};

export default NotFound;