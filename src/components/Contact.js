import React, { useState } from "react";
const Contact = () => {
  const [firstName, setFirstName] = useState("Reggie");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("mike 44");
  };
  return (
    <div className="contact">
      <p>{firstName}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contact;
