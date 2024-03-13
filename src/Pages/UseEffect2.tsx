import { useContext, useEffect, useState } from "react";
import ExperimentProvider from "../Components/Context/ExperimentProvider";
import { ThemeContext } from "../Components/Context/ThemeProvider";

const UseEffect2 = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    console.log("render");
  }, [user]);
  /* Even if , i set the dependency as [user] , so whenever the value of user is changed, It should re render the whole component. But, even if the value isnt changed , clicking on input field and click outside on input field its re rendering. Because, array is a reference type element. so even if the value isnt changed but clicking on outside the input field make its array changed to a different location in memory thus it considered to another user. though the value isnt same */

  const object1 = { name: "monzur", email: "mnz@gmail.com" };
  const object2 = { name: "monzur", email: "mnz@gmail.com" };
  if (object1 === object2) {
    console.log("Both Object Are Same");
  } else {
    console.log("they are not");
  }

  /* consider the upper example -- Though object 1 and object 2 property value is same. but Object is reference type, so though the value is same but their reference is different. so it would be treated as two different element */

  return (
    <div>
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        className="border-2 border-red-500 m-3 p-2"
        type="text"
        name="name"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        className="border-2 border-red-500 m-3 p-2"
        type="text"
      />
    </div>
  );
};

export default UseEffect2;
