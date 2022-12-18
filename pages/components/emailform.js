import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button";


const Emailform = () => {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      let res = await fetch("/api/contact", {
        headers,
        method: "post",
        body: JSON.stringify({ contact, email, name }),
      });
      let resMsg = await res.json();
      alert(resMsg.message);
    } catch (err) {
      alert("Failed to send email");
    }
  };

  return (
    <div>
      <h3 className="container_contact_us">Contact Us</h3>
      <div className="container">
        <FormControl className="form-control">
          <div className="input_container">
            <Input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />

          </div>
          <div className="input_container">
            <Input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />

          </div>
          <div className="input_container">

            <Input
              type="text"
              name="phonenumber"
              className="input"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}

            />

          </div>
          <div className="btn_container">
            <Button className="btnsend" onClick={handleSubmit}> Contact</Button>

          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default Emailform;
