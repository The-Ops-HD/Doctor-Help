import {React, useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";


function Button(props){
    const navigate= useNavigate()
    function expandButton(e){
        navigate(`/details/${props.id}`);
    }
    return(
    <button onClick={expandButton}>Expand</button>
    )
}

export default Button;