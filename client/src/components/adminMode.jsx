import React from "react";
import ExamTable from "./ExamTable";
import { useNavigate } from "react-router-dom";




const AdminMode = () =>{
	const navigate= useNavigate();
  const handleCreate = () => {
    navigate('/create')
  }
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