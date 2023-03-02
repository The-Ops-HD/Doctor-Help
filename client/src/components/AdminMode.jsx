import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExamTable from "./ExamTable";
import "../component-css/AdminMode.css"

const AdminMode = (props) =>{
	const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/create')
  }

  useEffect(() => {
    props.setVariable(5);
  }, [])
  
  return (
    <div>
      <div className="create-exam-button">
        <button onClick={handleCreate}>
          Add Exam
        </button>
      </div>
      <ExamTable/>
    </div>
  )
}

export default AdminMode;