import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function handelClick(envent) {
        props.delete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <Button onClick={handelClick} variant="outlined" startIcon={<DeleteIcon />}>

            </Button>
        </div>
    );
}

export default Note;