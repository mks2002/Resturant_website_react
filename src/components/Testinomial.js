import React from 'react'

const Testinomial = () => {
   return (

      <>
         <section id="testinomials">
            <div className="wrapper testimonial-section">
               <div className="container ">
                  <div className="row justify-content-center">
                     <div className="text-center col-sm-12 pb-4">
                        <h2>Our happy customers</h2>
                     </div>

                     <div className="col-sm-12 col-lg-10 offset-lg-1">

                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                           <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                 className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                 aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                 aria-label="Slide 3"></button>
                           </div>

                           <div className="carousel-inner">

                              <div className="carousel-item active">
                                 <div className="carousel-caption">
                                    <img src="images/review/review-1.jpg" alt="" />
                                    <p>they provide very good quality of food . I
                                       alwaus order from them and always I find
                                       somehting new test which is better than the
                                       previous one.</p>
                                    <h5>Jonthon doe - UX designer</h5>
                                 </div>
                              </div>

                              <div className="carousel-item">
                                 <div className="carousel-caption">
                                    <img src="images/review/review-2.jpg" alt="" />
                                    <p>they provide very good quality of food . I
                                       alwaus order from them and always I find
                                       somehting new test which is better than the
                                       previous one.</p>
                                    <h5>michele jonson - Front end</h5>
                                 </div>
                              </div>

                              <div className="carousel-item">
                                 <div className="carousel-caption">
                                    <img src="images/review/review-1.jpg" alt="" />
                                    <p>they provide very good quality of food . I
                                       alwaus order from them and always I find
                                       somehting new test which is better than the
                                       previous one.</p>
                                    <h5>Jonthon doe - UX designer</h5>
                                 </div>
                              </div>
                           </div>

                        </div>

                     </div>
                  </div>


               </div>
            </div>
         </section>
      </>

   )
}

export default Testinomial
