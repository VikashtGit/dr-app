import React from 'react';
import '../Styles/main.css';
import im1 from '../Images/hidoc.PNG';
import im2 from '../Images/hiddoc.PNG';

export default function Footer(){


  return(
    <>
  {/* ======= Footer ======= */}
  <footer id="footer">
   <div className="container-fluid text-white vikash1">
    <div className="row p-4 bg-dark">
    <div className="col-sm-3">
      <img src={im1} alt="Logo" />
      <div>Fastest growing Medical plateform for Doctors</div>
      <div>f in camera Youtube logos</div>
    </div>
    <div className="col-sm-3">
      <h6>REACH US</h6>
      <p>Please contact bellow details for any other information</p>
      <p className='text-info'>Email:</p>
      <p>varun@hidoc.co</p>
      <p className='text-info'>Address:</p>
      <p>Hidoc Dr. Inc,2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States.</p>
    </div>
    <div className="col-sm-6">
      <h5>HIDOC DR. FEATURES</h5>
      <img src={im2} alt="Features" width={"90%"} />
    </div>
    </div>

   </div>
   
     
      
   
       
     
        
    <div className="container-fluid vikash">
      <div className="copyright">
        © Copyright 2022 <b>Hidoc Dr. Inc.</b>
      </div>
      <div>
        
        Terms and conditions | Privacy Policy
      </div>
    </div>
   
  </footer>
  
</>

  )
}