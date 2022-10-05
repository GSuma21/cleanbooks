
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
                <Link href="/">Startup Registration</Link>

              </div>
              <div>
                <Link href="/">Company Name Search</Link>
                <Link href="/">Startup India Registration</Link>
                <Link href="/">Public Limited Company </Link>
                <Link href="/">NGO/ Section 8 Comapnay</Link>
              </div>


            </div>
          </li>
          <li className="dropdown">
            <a>PROTECT BUSINESS</a>
            <div className="dropdown-content">
              <div><Link href="/">Trademark Registration</Link>
              <Link href="/"><a>Reply to Trademark Objection </a></Link>
              <Link href="/"><a>Renew your Trademark </a></Link>
              <Link href="/"><a>License your Trademark</a></Link></div>
              <div>
              <Link href="/"><a>Trademark Search</a></Link>
              <Link href="/"><a>Sell your Trademark</a></Link>
              <Link href="/"><a>Copyright Registration</a></Link>
              <Link href="/"><a>Reply to Copyright Objection</a></Link>
              </div>
              
             

            </div>
          </li>
          <li className="dropdown">
            <a>MANAGE BUSINESS</a>
            <div className="dropdown-content">
              <div>
              <Link href="/">Pvt. Ltd. ROC Compliance AMC</Link>
              <Link href="/">OPC ROC Compliance AMC</Link>
              <Link href="/">DIR3 DIN KYC Filing </Link>
              <Link href="/">ROC Return Filing for Pvt. Ltd.</Link>
              <Link href="/">ROC Return Filing for OPC</Link>
              <Link href="/">ROC Return Filing for LLP</Link>
              <Link href="/">Appointment of Director</Link>
              </div>
              <div>
              <Link href="/">Resignation of Director</Link>
              <Link href="/">Transfer of Shares</Link>
              <Link href="/">Change in Office Address</Link>
              <Link href="/">Increasing Capital</Link>
              <Link href="/">Closure of Company</Link>
              <Link href="/">Closure of OPC</Link>
              <Link href="/">Closure of LLP</Link>
              </div>

            

            </div>

          </li>
          <li className="dropdown">
            <a>GROW BUSINES</a>
            <div className="dropdown-content">
              <div><Link href="./components/PrivateLimitedCompany">ISO Certification </Link>
                <Link href="/">GST Registration</Link>
                <Link href="/">MSME / SSI Registration</Link>
                <Link href="/">List of Indian Companies</Link>
                <Link href="/">List of Indian LLPs</Link>
                <Link href="/">List of Indian Trademarks</Link>
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
