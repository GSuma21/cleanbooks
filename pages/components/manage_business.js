
import Link from "next/link";
const manage_business= ({ text, href, active }) => {
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
                
          <div className="servicess"><p> <Link href="/components/pvt_ltd_roc_compliance_amc">Pvt. Ltd. ROC Compliance AMC</Link></p></div>
          <div className="servicess"><p><Link href="/components/opc_roc_compliance_amc">OPC ROC Compliance AMC</Link></p></div>
          <div className="servicess"><p> <Link href="/components/dir3_din_kyc_filing">DIR3 DIN KYC Filing </Link></p></div>
          <div className="servicess"><p><Link href="/components/roc_return_filing_for_pvt_ltd">ROC Return Filing for Pvt. Ltd.</Link></p></div>
          <div className="servicess"><p> <Link href="/components/roc_return_filing_for_opc">ROC Return Filing for OPC</Link></p></div>
          <div className="servicess"><p><Link href="/components/roc_return_filing_for_llp">ROC Return Filing for LLP</Link></p></div>
          <div className="servicess"><p><Link href="/components/appointment_of_director">Appointment of Director</Link></p></div>

        </div>
               
        <div className="hservices2" >
          <div className="servicess"><p>  <Link href="/components/resignation_of_director">Resignation of Director</Link></p></div>
          <div className="servicess"><p> <Link href="/components/transfer_of_shares">Transfer of Shares</Link></p></div>
          <div className="servicess"><p> <Link href="/components/increasing_capital">Increasing Capital</Link></p></div>
          <div className="servicess"> <p><Link href="/components/closure_of_company">Closure of Company</Link></p> </div>
          <div className="servicess"> <p><Link href="/components/closure_of_opc">Closure of OPC</Link></p> </div>
          <div className="servicess"> <p><Link href="/components/closure_of_llp">Closure of LLP</Link></p> </div>
        </div>
      </div>

    </div>

  </>

  );
};

export default manage_business;