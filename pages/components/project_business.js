
import Link from "next/link";
const project_business = ({ text, href, active }) => {
  return (
    <>

    <h1 id="headh1" >CleanBooks Advisors </h1>
    <div className="hmain">
      <div className="hleft">
        <h1>Your Trusted Partner <br /> for Startup Legalities</h1>
        <p id="header-info">We handle your messy legalities and documentation, <br />
          so that you worry less and focus more on your dream business.</p>
        <br />
        <br />


      </div>

      <div className="hright_headsection">

        <div className="hservices1">
                
          <div className="servicess"><p> <Link href="/components/trademark_registration">Trademark Registration</Link></p></div>
          <div className="servicess"><p> <Link href="/components/reply_to_trademark_objection"><a>Reply to Trademark Objection </a></Link></p></div>
          <div className="servicess"><p>  <Link href="/components/renew_your_trademark"><a>Renew your Trademark </a></Link></p></div>
          <div className="servicess"><p><Link href="/components/license_your_trademark"><a>License your Trademark</a></Link></p></div>

        </div>
               
        <div className="hservices2" >
          <div className="servicess"><p>  <Link href="/components/trademark_search"><a>Trademark Search</a></Link></p></div>
          <div className="servicess"><p>  <Link href="/components/sell_your_trademark"><a>Sell your Trademark</a></Link></p></div>
          <div className="servicess"><p>  <Link href="/components/copyright_registration"><a>Copyright Registration</a></Link></p></div>
          <div className="servicess"> <p><Link href="/components/reply_to_copyright_objection"><a>Reply to Copyright Objection</a></Link></p> </div>

        </div>
      </div>

    </div>

  </>

  );
};

export default project_business;