import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Zoom, Fab } from "@material-ui/core";
import {Form, Input, Text, Button} from './InputAreaStyled'

const InputArea = (props) => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: "",
      text: "",
    },
  });
  const [expand, setExpand] = useState(false);
  var count = 0;

  const handleToggle = () => {
    if (count === 0) {
      setExpand(() => true);
    }
    count++;
  };

  const onSubmit = (data) => {
    props.addNote(data)
    reset();
  };

  return (
    <div>
      <Form className="create-note" onSubmit={handleSubmit(onSubmit)}>
        {expand && <Input {...register("title")} placeholder="Title"/>}
        <Text
          onClick={handleToggle}
          placeholder="Take a note..."
          {...register("text", { required: true })}
        />

        <Zoom in={expand}>
          <Button
            type="submit"
          >
            +
          </Button>
        </Zoom>
      </Form>
    </div>
  );
};

export default InputArea;
