import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
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
      <div className="create-exam-container">
        <Button
          onClick={handleCreate}
          endIcon={<AddIcon />}
          sx={{
            textTransform: "none",
            backgroundColor: "#578188",
            ":hover":{
              bgcolor: "#3b5559"
            }
          }}
          variant="contained"
        >
          Add Exam
        </Button>
      </div>
      <ExamTable/>
    </div>
  )
}

export default AdminMode;