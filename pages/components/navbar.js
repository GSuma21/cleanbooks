
import Link from "next/link";
import Image from "next/image"


const navbar = () => {
  return (
    <>

<nav>
        <ul className="menu-bar">
        <li>
            <Link href="/">
              <a>  <Image src="/logo1.jpg" width="200px" height="80px"/>  </a>
            </Link>
          </li>
          
          <li className="dropdown">
            <a>START BUSINESS</a> 
            <div class="dropdown-content">
            <Link href="./components/PrivateLimitedCompany">Private Limited Company </Link>
            <Link href="/"><a>One Person Company </a></Link>
            <Link href="/"><a>Limited Liability Partnership </a></Link>
            <Link href="/"><a>Startup Registration </a></Link>
            
            </div>
          </li>
          <li className="dropdown">
            <a>PROTECT BUSINESS</a> 
            <div class="dropdown-content">
            <Link href="/">Trademark Registration</Link>
            <Link href="/"><a>Reply to Trademark Objection </a></Link>
            <Link href="/"><a>Renew your Trademark </a></Link>
            <Link href="/"><a>License your Trademark</a></Link>
            <Link href="/"><a>Trademark Search</a></Link>
            <Link href="/"><a>Sell your Trademark</a></Link>
            <Link href="/"><a>Copyright Registration</a></Link>
            <Link href="/"><a>Reply to Copyright Objection</a></Link>
            
            </div>
          </li>
          <li>
            <Link href="/">
              <a> MANAGE BUSINESS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a> GROW BUSINES </a>
            </Link>
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
