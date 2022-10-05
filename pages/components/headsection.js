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
        <p> <Link href="/">Company Registration</Link></p>
        <p> <Link href="/"><a>ROC Filing </a></Link></p>
        <p> <Link href="/"><a>GST Registration </a></Link></p>
        <p> <Link href="/"><a>MSME Registration </a></Link></p>
        </div>
       <div className="hservices2" >
        <p> <Link href="/">Trademark Registration </Link></p>
        <p> <Link href="/"><a>Startup India Registration </a></Link></p>
        <p> <Link href="/"><a>ISO Certification </a></Link></p>
        <p> <Link href="/"><a>Startup Registration </a></Link></p> 
           
        </div>
    </div>


      </div>
       
    </>
   
  )
}

export default headsection