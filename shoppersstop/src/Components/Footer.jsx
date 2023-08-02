import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <p className='footer1'><span style={{borderBottom:"1px solid black",paddingBottom:"1px"}}>Customer</span></p>
        <p className='footer2'>HELP/FAQS
          TRACK ORDER<br />
          SIZE GUIDE<br />
          BUYING GUIDE<br />
          HOW DO I SHOP?<br />
          HOW DO I PAY?<br />
          FIND PLACES WE DELIVER<br />
          STYLE HUB</p>
      </div>
      <div>
        <p className='footer1'><span style={{borderBottom:"1px solid black",paddingBottom:"1px"}}>Stores & Sizes</span></p>
        <p className='footer2'>ABOUT US<br/>
          CONTACT US<br/>
          CORPORATE SITE<br/>
          STORE LOCATOR<br/>
          CAREERS<br/>
          SITEMAP</p>
      </div>
      <div>
        <p className='footer1'><span style={{borderBottom:"1px solid black",paddingBottom:"1px"}}>policies</span></p>
        <p className='footer2'>TERMS OF USE<br/>
          PRIVACY<br/>
          DELIVERY POLICY<br/>
          EXCHANGES & RETURNS</p>
      </div>
      <div>
        <p className='footer1'><span style={{borderBottom:"1px solid black",paddingBottom:"1px"}}>FIRST CITIZEN</span> </p>
        <p className='footer2'>FIRST CITIZEN CLUB</p>
      </div>
      <div>
        <p className='footer1'><span style={{borderBottom:"1px solid black",paddingBottom:"1px"}}>DELIGHTFUL PROGRAMS</span></p>
        <p className='footer2'>INSTANT GIFTING<br/>
          EXPRESS STORE PICK UP</p>
      </div>
    </div>
  )
}

export default Footer

