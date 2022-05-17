import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    // This one line will replace the rest below using the spread meothod by modifying
    //    with last entry. Note how [name] bracket is used instead for the object not be confused about what is key and what is not.
    // with the latest ES6
    setContact((preValue) => ({ ...preValue, [name]: value }));

    // setContact(prevValue => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prevValue.lName,
    //       email: prevValue.email
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: value,
    //       email: prevValue.email
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: value
    //     };
    //   }
    // });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
