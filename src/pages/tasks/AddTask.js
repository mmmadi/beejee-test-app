import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup } from "../../components/app/FormGroup";
import { FormGroupBtn } from "../../components/app/FormGroupBtn";
import { Layout } from "../../components/app/Layout";
import { addTask } from "../../redux/tasks/taskActions";
import { Loader } from "../../components/app/Loader";
import { Alert } from "../../components/app/Alert";

export const AddTask = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    email: "",
    text: "",
  });

  const status = useSelector((state) => state.tasks.status);
  const { loading, alert } = useSelector((state) => state.app);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.currentTarget.value });
  };

  const addTaskHandler = () => {
    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("text", form.text);

    dispatch(addTask(formData));
  };

  useEffect(() => {
    if (status === "ok") {
      history.push("/");
    }
  }, [status]);

  return (
    <Layout section={"Tasks"} desc={"Add Task"}>
      {alert && <Alert message={alert} type={"warning"} />}
      <FormGroup
        label={"Username"}
        name={"username"}
        type={"text"}
        listener={changeHandler}
        value={form.username}
      />
      <FormGroup
        label={"E-mail"}
        name={"email"}
        type={"email"}
        listener={changeHandler}
        value={form.email}
      />
      <FormGroup
        label={"Text"}
        name={"text"}
        type={"text"}
        listener={changeHandler}
        value={form.text}
      />
      <FormGroupBtn
        label={loading ? <Loader /> : "Add Task"}
        action={addTaskHandler}
      />
    </Layout>
  );
};
