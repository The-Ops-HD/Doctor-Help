import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(props){
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate('/admin');
  }
  const goHome = () =>{
    navigate('/');
  }

  return (
    <div id="header-container">
      <div className="title" onClick={goHome}>{props.header}</div>
      <button className="button" onClick={handleAdmin}>Enable Admin Mode</button>
    </div>
  )
}

export default Header;