import Image from "next/image"

const about_us = () => {
  return (
    <>
   
    <h1 id="headh1">Who Are We ? </h1>
   
      <div className="hmain">
     
        <div className="hleft">
        <Image src="/background_image1.jpg" className="image_backgroudimage1" width="1000px" height="500px" />
          
        </div>
        <div className="hright">
        <h1>A Professional team to solve your Business Problems </h1> 
        </div>
      </div>
      <div className="whoarewe_paragraph">
      <h2 className="whoarewe_paragraph_p">A Team of CA, CS, Lawyers, Engineers and MBAs providing One step
            Solution for legal and Compliance related issues to the Startups.</h2>
        <p className="whoarewe_paragraph_p"> Here is what we feel are the distinct advantages you will get in dealing
        with Cleanbooks Advisors. These are definetely way different from what
        is being offered in the market. We are very much sure this wll bring in
        extensive savings and complete satisfaction to all the clients.</p>
       
      </div>
      </>
   
  )
}

export default about_us