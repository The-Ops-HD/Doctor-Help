import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(){
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate('/admin');
  }
  return (
    <div id="header-container">
      <div className="title">Doctor Help</div>
      <button className="button" onClick={handleAdmin}>Enable Admin Mode</button>
    </div>
  )
}

export default Header