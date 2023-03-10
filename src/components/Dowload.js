import React from 'react'

const Dowload = () => {
   return (
      <>
      <section id="download-app">
         <div className="download-app wrapper">
            <div className="container ">
               <div className="row align-items-center">

                  <div className="col-md-6 mb-4 order-2 order-lg-1 mk">
                     <div className="text-content">
                        <h1 className="mb-3">Download our mobile app.</h1>
                        <p>you can also download our app from google play store and apps store for your small devices use.
                        </p>
                        <div className="d-flex flex-wrap mt-4">
                           <a href="#"><img src="./images/app/1.svg" className="me-3" alt="" /></a>
                           <a href="#"><img src="./images/app/2.svg" className="me-3" alt="" /></a>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 mb-4 order-1 order-lg-2">
                     <img src="./images/app/phones.png" className="img-fluid" alt="" />
                  </div>
               </div>
            </div>
         </div>
         <hr className="container" />
      </section>
      </>
      
   )
}

export default Dowload
