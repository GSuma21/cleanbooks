
import Link from "next/link";
import Image from "next/image"


const navbar = () => {
  return (
    <>

      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a>  <Image src="/logo1.jpg" width="200px" height="80px" />  </a>
            </Link>
          </li>

          <li className="dropdown">
            <a>START BUSINESS</a>
            <div className="dropdown-content">
              <div><Link href="/components/PrivateLimitedCompany">Private Limited Company </Link>
                <Link href="/components/OnePersonCompany">One Person Company</Link>
                <Link href="/components/limited_liability_partnership">Limited Liability Partnership </Link>
                <Link href="/components/startup_registration">Startup Registration</Link>

              </div>
              <div>
                <Link href="/components/company_name_search">Company Name Search</Link>
                <Link href="/components/startup_india_registration">Startup India Registration</Link>
                <Link href="/components/public_limited_company">Public Limited Company </Link>
                <Link href="/components/ngo_section_8_company">NGO/ Section 8 Company</Link>
              </div>


            </div>
          </li>
          <li className="dropdown">
            <a>PROTECT BUSINESS</a>
            <div className="dropdown-content">
              <div><Link href="/components/trademark_registration">Trademark Registration</Link>
              <Link href="/components/reply_to_trademark_objection"><a>Reply to Trademark Objection </a></Link>
              <Link href="/components/renew_your_trademark"><a>Renew your Trademark </a></Link>
              <Link href="/components/license_your_trademark"><a>License your Trademark</a></Link></div>
              <div>
              <Link href="/components/trademark_search"><a>Trademark Search</a></Link>
              <Link href="/components/sell_your_trademark"><a>Sell your Trademark</a></Link>
              <Link href="/components/copyright_registration"><a>Copyright Registration</a></Link>
              <Link href="/components/reply_to_copyright_objection"><a>Reply to Copyright Objection</a></Link>
              </div>
              
            
            </div>
          </li>
          <li className="dropdown">
            <a>MANAGE BUSINESS</a>
            <div className="dropdown-content">
              <div>
              <Link href="/components/pvt_ltd_roc_compliance_amc">Pvt. Ltd. ROC Compliance AMC</Link>
              <Link href="/components/opc_roc_compliance_amc">OPC ROC Compliance AMC</Link>
              <Link href="/components/dir3_din_kyc_filing">DIR3 DIN KYC Filing </Link>
              <Link href="/components/roc_return_filing_for_pvt_ltd">ROC Return Filing for Pvt. Ltd.</Link>
              <Link href="/components/roc_return_filing_for_opc">ROC Return Filing for OPC</Link>
              <Link href="/components/roc_return_filing_for_llp">ROC Return Filing for LLP</Link>
              <Link href="/components/appointment_of_director">Appointment of Director</Link>
              </div>
              <div>
              <Link href="/components/resignation_of_director">Resignation of Director</Link>
              <Link href="/components/transfer_of_shares">Transfer of Shares</Link>
              <Link href="/components/change_in_office_address">Change in Office Address</Link>
              <Link href="/components/increasing_capital">Increasing Capital</Link>
              <Link href="/components/closure_of_company">Closure of Company</Link>
              <Link href="/components/closure_of_opc">Closure of OPC</Link>
              <Link href="/components/closure_of_llp">Closure of LLP</Link>
              </div>

            

            </div>

          </li>
          <li className="dropdown">
            <a>GROW BUSINES</a>
            <div className="dropdown-content">
              <div><Link href="/components/iso_certification">ISO Certification </Link>
                <Link href="/components/gst_registration">GST Registration</Link>
                <Link href="/components/msme_ssi_registration">MSME / SSI Registration</Link>
                <Link href="/components/list_of_indian_companies">List of Indian Companies</Link>
                <Link href="/components/list_of_indian_llps">List of Indian LLPs</Link>
                <Link href="/components/list_of_indian_trademarks">List of Indian Trademarks</Link>
              </div>
        
            </div>
          </li>

          <li>
            <Link href="/components/contact">
              <a> CONTACTS </a>
            </Link>
          </li>
        </ul>
      </nav>

    </>

  )
}
export default navbar
