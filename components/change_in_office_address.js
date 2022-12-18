import Emailform from "./emailform"

const change_in_office_address = () => {
  return (
    <>
    <h1 id="headh1">CleanBooks Advisors </h1>
    <div className="hmain">
      <div className="hleft">
        <h1> Change in Office Address</h1>
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

export default change_in_office_address