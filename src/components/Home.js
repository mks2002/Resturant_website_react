import React from 'react'

const Home = () => {
   return (

      <>
         <section id="home">
            <div className="container-fluid px-0 top-banner">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-5 col-md-6">
                        <h1> Good food choices are good investments</h1>
                        <p>we always serve the best food you ever got in any where
                           at any resturant at the best prices.
                           customers never have any regret.</p>
                        <div className="mt-4">
                           <button className="main-btn">Order now
                              <i className="fas fa-shopping-basket ps-3"></i>
                           </button>
                           <button className="white-btn ms-lg-4 mt-lg-0 mt-4">All menu
                              <i className="fas fa-angle-right ps-3"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>

   )
}

export default Home
