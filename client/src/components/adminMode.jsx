import React from "react";
import ExamTable from "./ExamTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";





const AdminMode = (props) =>{
	const navigate= useNavigate();
  const handleCreate = () => {
    navigate('/create')
  }
  useEffect(() => {
    props.setHeader("Admin")
    props.setVariable(5);
  }, [])
  return(
    <div>
      <h1>
        ADMIN MODE
      </h1>
      <button onClick={handleCreate}>
        <h1>Add Exam</h1>
      </button>
      <ExamTable/>
    </div>
  )
}

export default AdminMode;