import React, { useState, createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { FormGroup } from "../../components/app/FormGroup";
import { FormGroupBtn } from "../../components/app/FormGroupBtn";
import { Layout } from "../../components/app/Layout";
import { FormCheck } from "../../components/app/FormCheck";
import { editTask } from "../../redux/tasks/taskActions";

export const UpdateTask = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location.state;
  const refStatus = createRef();

  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.tasks.status);

  const [text, setText] = useState(state.text || "");

  const updateTaskHandler = () => {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("token", token);

    if (!refStatus.current.checked && state.text !== text) {
      formData.append("status", 1);
    } else if (refStatus.current.checked && state.text === text) {
      formData.append("status", 10);
    } else if (refStatus.current.checked && state.text !== text) {
      formData.append("status", 11);
    } else {
      formData.append("status", 0);
    }

    dispatch(editTask(formData, state.id));
  };

  useEffect(() => {
    if (status === "ok") {
      history.push("/");
    }
  }, [status]);

  useEffect(() => {
    if (state.status === 10 || state.status === 11) {
      return (refStatus.current.checked = true);
    } else {
      return (refStatus.current.checked = false);
    }
  }, []);

  return (
    <Layout section={"Tasks"} desc={"Update Task"}>
      <FormGroup
        label={"Text"}
        name={"text"}
        type={"text"}
        listener={(e) => setText(e.currentTarget.value)}
        value={text}
      />
      <FormCheck
        label={"Completed the task?"}
        reference={refStatus}
        name={"status"}
      />
      <FormGroupBtn label={"Update Task"} action={updateTaskHandler} />
    </Layout>
  );
};
