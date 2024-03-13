import React, { useContext, useState } from "react";
import { ThemeContext } from "../Components/Context/ThemeProvider";

const Forms = () => {
  const { dark, setDark } = useContext(ThemeContext);
  console.log("Dark mode in Forms Component =>", dark);

  //   To Provide multiple state, we can use an object as a state
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("e", e.target.name);
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    // setUser({ ...user, [inputName]: value });
    // setUser({ ...user, [inputName]: value });
    // console.log({ inputName: value });
    // console.log(name, value);
    setUser({ ...user, [name]: value });
    // setUser({ ...user, [name]: value });
  };

  // console.log({ inputName: value });
  // if i use like this , then both input value of email and password will be stored as inputName, as inputName is treated as new property and it doesn't update the email and password value

  // setUser({ ...user, name: value }); --> this will set all input value in name, both email password will be stored in name value

  //    console.log(inputName: value); will lead to syntax error

  //    setUser({ ...user, [name]: value }); will use the value of name dynamically

  // Make Sure the name value used in input EventTarget, must be similar with the properties declared in object state , otherwise value wont be stored in original state

  //Using [] will make the property dynamic, thats why we used [name]

  return (
    <div>
      {/* Form  */}
      <h1 className="text-2xl m-5">Forms</h1>
      <button onClick={() => setDark(!dark)} className="btn btn-primary m-5">
        Toggle In Form Component
      </button>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="border border-cyan-400 mr-5 p-2"
          type="name"
          name="name"
        />
        <input
          onChange={handleChange}
          className="border border-cyan-400 mr-5 p-2"
          type="name"
          name="email"
        />
        {/* without spread operator the last input value will replace the previous
        one as object is a primitive type */}
        <input
          className="border border-cyan-400 mr-5 p-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Forms;
