
import Link from "next/link";
const start_business = ({ text, href, active }) => {
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
                
          <div className="servicess"><p> <Link href="/components/PrivateLimitedCompany">Private Limited Company </Link></p></div>
          <div className="servicess"><p>  <Link href="/components/OnePersonCompany">One Person Company</Link></p></div>
          <div className="servicess"><p> <Link href="/components/limited_liability_partnership">Limited Liability Partnership </Link></p></div>
          <div className="servicess"><p> <Link href="/components/startup_registration">Startup Registration</Link></p></div>

        </div>
               
        <div className="hservices2" >
          <div className="servicess"><p>  <Link href="/components/company_name_search">Company Name Search</Link></p></div>
          <div className="servicess"><p>  <Link href="/components/startup_india_registration">Startup India Registration</Link></p></div>
          <div className="servicess"><p>  <Link href="/components/public_limited_company">Public Limited Company </Link></p></div>
          <div className="servicess"> <p><Link href="/components/ngo_section_8_company">NGO/ Section 8 Company</Link></p> </div>

        </div>
      </div>

    </div>

  </>

  );
};

export default start_business;