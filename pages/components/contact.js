import Emailform from "./emailform";

const contact = () => {
  return (
    <>
    <br></br>
    <h1 id="headh1">CleanBooks Advisors </h1>
    <div className="hmain">
      <div className="hleft">
      <h3>Conatct Us</h3>
          <div id="contact_address">
            <p> Address</p>
            <p>
              2nd floor Shree Veerabhadreshwara Nilaya<br></br>Kallur
              Layout, Near New Court Complex<br></br>Gokul Road, Hubballi 580030
            </p>

            <p id="contact_gmail">askcleanbooks@gmail.com</p>
            <p id="contact_conatctno"> +919449203522/+919900977327</p>
          </div>
      </div>

      <div className="hright">
        <Emailform />
      </div>
    </div>
      {/* <div className="contact_container">
        <div id="contact_contactdiv">
          <h3>Conatct Us</h3>
          <div id="contact_address">
            <p> Address</p>
            <p>
              2nd floor Shree Veerabhadreshwara Nilaya<br></br>Kallur
              Layout, Near New Court Complex<br></br>Gokul Road, Hubballi 580030
            </p>

            <p id="contact_gmail">askcleanbooks@gmail.com</p>
            <p id="contact_conatctno"> +919449203522/+919900977327</p>
          </div>
        </div>
        <div className="contact_emailformdiv">
        <Emailform/>
        </div>
       
      </div> */}
      
    </>
  );
};

export default contact;
