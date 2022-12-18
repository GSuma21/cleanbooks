
import Emailform from "./emailform"

const company_name_search = () => {
  return (
    <>

    <h1 id="headh1">CleanBooks Advisors </h1>
        <div className="hmain">
          <div className="hleft">
            <h1>Company Name Search</h1>
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

export default company_name_search