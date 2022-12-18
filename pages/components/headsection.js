import Link from "next/link";

const headsection = () => {
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
            <div className="servicess"><p> <Link href="/components/PrivateLimitedCompany">Company Registration</Link></p></div>
            <div className="servicess"><p> <Link href="/components/roc_return_filing_for_pvt_ltd"><a>ROC Filing </a></Link></p></div>
            <div className="servicess"><p> <Link href="/components/startup_registration"><a>GST Registration </a></Link></p></div>
            <div className="servicess"><p> <Link href="/components/msme_ssi_registration"><a>MSME Registration </a></Link></p></div>

          </div>
          <div className="hservices2" >
            <div className="servicess"><p> <Link href="/components/trademark_registration">Trademark Registration </Link></p></div>
            <div className="servicess"><p> <Link href="/components/startup_registration"><a>Startup India Registration </a></Link></p></div>
            <div className="servicess"><p> <Link href="/components/iso_certification"><a>ISO Certification </a></Link></p></div>
            <div className="servicess"> <p> <Link href="/components/startup_registration"><a>Startup Registration </a></Link></p> </div>





          </div>
        </div>

      </div>

    </>

  )
}

export default headsection