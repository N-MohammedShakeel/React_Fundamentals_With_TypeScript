import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  type typeForm = {
    name: string;
    age: string;
    email: string;
    password: string;
  };

  const [data, setData] = useState<typeForm>({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameVal = name.current!.value;
    const ageVal = age.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;

    setData({
      name: nameVal,
      age: ageVal,
      email: emailVal,
      password: passwordVal,
    });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="Enter your name"></input>
        <input type="text" ref={age} placeholder="Enter your age"></input>
        <input type="text" ref={email} placeholder="Enter your email"></input>
        <input
          type="password"
          ref={password}
          placeholder="Enter your password"
        ></input>
        <button type="submit">Submit</button>
      </form>

      <h1>Data</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
    </div>
  );
};

export default Form;
