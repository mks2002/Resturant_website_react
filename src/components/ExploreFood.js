import React from 'react'

const ExploreFood = () => {
   return (

      <>
         <section id="explore-food">
            <div className="explore-food wrapper">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <div className="text-content text-center">
                           <h2> Explore our foods </h2>
                           <p>A website allows you to showcase who you are to new and current customers without having to
                              spend money on additional marketing. Your customers will get a clear sense of what experience
                              the restaurant offers and the atmosphere guests can expect..</p>
                        </div>
                     </div>
                  </div>


                  <div className="row pt-5">

                     <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                        <div className="card">
                           <img src="images/img/img-3.jpg" className="img-fluid" alt="" />
                           <div className="pt-3">
                              <h4>Rainbow vegetable sandwich</h4>
                              <p>Time : 15-20 minutes | serves : 1</p>
                              <span>$10.50 <del>$11.70</del></span>

                              <button className="main-btn mt-4">
                                 Order now
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                        <div className="card">
                           <img src="images/img/img-4.jpg" className="img-fluid" alt="" />
                           <div className="pt-3">
                              <h4>vegetable sandwich burger</h4>
                              <p>Time : 25-30 minutes | serves : 1</p>
                              <span>$12.50 <del>$13.70</del></span>
                              <button className="main-btn mt-4">
                                 Order now
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                        <div className="card">
                           <img src="images/img/img-5.jpg" className="img-fluid" alt="" />
                           <div className="pt-3">
                              <h4>Rasbarry stuffed french toast</h4>
                              <p>Time : 15-45 minutes | serves : 1</p>
                              <span>$25.50 <del>$27.70</del></span>
                              <button className="main-btn mt-4">
                                 Order now
                              </button>
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

export default ExploreFood
