import React from 'react'

const Form = () => {
   return (
      <>
         <section id="newsletter">
            <div className="newsletter wrapper">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <div className="text-content text-center pb-4">
                           <h2> Hurry up! Subscribe our newsletter and get 23% off
                           </h2>
                           <p>limited time offer for this month. no credit card is
                              required.</p>
                        </div>
                        <form action="" className="newsletter">

                           <div className="row">
                              <div className="col-md-8 col-12">
                                 <input type="email" name="email" placeholder="enter your email" className="form-control" />
                              </div>
                              <div className="col-md-4 col-12">
                                 <button className="main-btn" type="submit">Subscribe</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>

   )
}

export default Form
