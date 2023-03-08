import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../component-css/Header.css"

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
      <Button
        className="admin-mode-button"
        onClick={handleAdmin}
        sx={{ 
          textTransform: "none",
          backgroundColor: '#578188',
          marginRight: '10rem',
          ':hover': { 
            bgcolor: '#3b5559',
            color: 'white'
          }
        }}
        variant="contained"
      >
        Admin Mode
      </Button>
    </div>
  )
}

export default Header;