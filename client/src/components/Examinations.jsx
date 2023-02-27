import React, { useEffect } from "react";
import ExamTable from "./ExamTable";

const Examinations = (props) => {
  useEffect(() => {
    props.setHeader("Doctor Help")
    props.setVariable(5);
  }, [])

  return (
    <ExamTable/>
  )
}

export default Examinations;