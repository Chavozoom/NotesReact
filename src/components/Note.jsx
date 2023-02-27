import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import {Div, Button, P, H1} from './NoteStyled'

 const Note = ({key, title, text, id, deleteNote})=> {

  return (
    <Div className="note">
      <H1>{key}</H1>
        <H1 className='title'>
            {title}
        </H1>
        <P>
            {text}
        </P>
        <Button onClick={() => {deleteNote(id)}}><AiFillDelete /></Button>
    </Div>
  );
}

export default Note;