
const emailform = () => {
    return (
      <>
       <div className="container">
        <h1>contact Form</h1>
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
           <textarea name="message" className="input" cols="30" rows="5" placeholder="Enter message"></textarea>
        </div>
        <div className="btn_container">
            <button>send</button>
        </div>
       </div>
      </>
    )
  }
  
  export default emailform