import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import React from "react";

const Todolist = (props) => {
  return (
    <li>
      {props.text}
      <Button onClick={() => props.onDelete(props.index)}><DeleteIcon /></Button>
    </li>
  );
};

export default Todolist;
