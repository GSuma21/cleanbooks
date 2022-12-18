<div>
//                 
//                 
//                
//                 
//
//               </div>
import Link from "next/link";
const grow_business= ({ text, href, active }) => {
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
                
          <div className="servicess"><p> <Link href="/components/iso_certification">ISO Certification </Link></p></div>
          <div className="servicess"><p><Link href="/components/gst_registration">GST Registration</Link></p></div>
          <div className="servicess"><p> <Link href="/components/msme_ssi_registration">MSME / SSI Registration</Link></p></div>
          <div className="servicess"><p> <Link href="/components/list_of_indian_companies">List of Indian Companies</Link></p></div>
          <div className="servicess"><p> <Link href="/components/list_of_indian_llps">List of Indian LLPs</Link></p></div>
          <div className="servicess"><p> <Link href="/components/list_of_indian_trademarks">List of Indian Trademarks</Link></p></div>


        </div>
               
      </div>

    </div>

  </>

  );
};

export default grow_business;