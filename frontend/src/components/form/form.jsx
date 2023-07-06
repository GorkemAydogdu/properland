import React from "react";

const Form = ({ children }) => {
  return (
    <form className="form">
      {children !== undefined && children}
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Phone" />
      <input type="text" placeholder="Message" />
      <button className="button button--dark">Submit</button>
    </form>
  );
};

export default Form;
