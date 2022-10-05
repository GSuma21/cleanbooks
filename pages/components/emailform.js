
const emailform = () => {
    return (
      <>
       <div className="container">
        <h3 className="container_contact_us">Contact Us</h3>
        <div className="input_container">
            <input type="text" name="name" className="input" placeholder="Enter your name"/>
        </div>
        <div className="input_container">       
            <input type="email" name="email" className="input" placeholder="Enter your email"/>
        </div>
        <div className="input_container">
            <input type="text" name="phonenumber" className="input" placeholder="Enter your phone number"/>        
        </div>
        <div className="input_container">
            <input type="text" name="phonenumber" className="input" placeholder="Looking For"/>        
        </div>
        {/* <div className="input_container">
           <textarea name="message" className="input" cols="30" rows="5" placeholder="Enter message"></textarea>
        </div> */}
        <div className="btn_container">
            <button className="btnsend" >send</button>
        </div>
       </div>
      </>
    )
  }
  
  export default emailform