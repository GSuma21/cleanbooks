import Emailform from "./emailform"

const list_of_indian_companies = () => {
  return (

    <>
    <h1 id="headh1">CleanBooks Advisors </h1>
    <div className="hmain">
      <div className="hleft">
        <h1> List of Indian Companies</h1>
        <p id="header-info">
          We handle your legalities and documentation, <br />
          so that you worry less and focus more on your dream business.
        </p>
        <br />
        <br />
      </div>

      <div className="hright">
        <Emailform />
      </div>
    </div>
  </>
  
   
  )
}

export default list_of_indian_companies