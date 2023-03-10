import React from 'react'

const About = () => {
   return (
      <>
         <section id="about">
            <div className="about-section wrapper">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">

                        <img src="images/img/img-1.png" className="img-fluid" alt="about" />

                     </div>
                     <div className="col-lg-6 col-md-12 ps-lg-5 text-sec">
                        <h2> We pride ourselves on making real food from the best
                           ingridients.</h2>
                        <p>The best restaurant websites are mobile-optimized and make it easy for the customer to find the
                           information they need. The restaurant address, contact information, and reservations should be on
                           the homepage or one click away..</p>
                        <button className="main-btn mt-4">Learn more</button>
                     </div>
                  </div>
               </div>

               <div className="container food-type">
                  <div className="row align-items-center">
                     <div className="col-lg-5 col-md-12 order-2 order-lg-1 pe-lg-5 text-sec">
                        <h2> We make everything by hand with the best possible
                           ingridients.</h2>
                        <p>The best restaurant websites are mobile-optimized and make it easy for the customer to find the
                           information they need. The restaurant address, contact information, and reservations should be on
                           the homepage or one click away..</p>
                        <ul className="list-unstyled py-3">
                           <li>Offer Gift Cards and Merchandise. </li>
                           <li>Set the stage for the restaurant experience. </li>
                           <li>Briefly describe your target audience. .. </li>
                        </ul>
                        <button className="main-btn myt-4">Learn more</button>
                     </div>
                     <div className="col-lg-7 col-md-12 mb-lg-0 mb-5 order-1 order-lg-2">

                        <img src="images/img/img-2.png" alt="" className="img-fluid" />


                     </div>

                  </div>
               </div>
            </div>
         </section>

      </>

   )
}

export default About
