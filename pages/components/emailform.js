import { useState } from "react";

const emailform = () => {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
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
      <div className="container">
        <h3 className="container_contact_us">Contact Us</h3>
        <div className="input_container">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input_container">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input_container">
          <input
            type="text"
            name="phonenumber"
            className="input"
            placeholder="Enter your phone number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        {/* <div className="input_container">
           <textarea name="message" className="input" cols="30" rows="5" placeholder="Enter message"></textarea>
        </div> */}
        {/* <div className="btn_container">
            <button className="btnsend" >send</button>
        </div> */}
      </div>

      <button onClick={handleSubmit}>Contact</button>
    </div>
  );
};

export default emailform;
