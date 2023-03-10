import React from 'react'

const Footer = () => {
   return (
      <>
         <footer id="footer">
            <div className="footer py-5">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12 text-center">
                        <a href="#" className="footer-link">Register</a>
                        <a href="#" className="footer-link">Forum</a>
                        <a href="#" className="footer-link">Affiliate</a>
                        <a href="#" className="footer-link">FAQ</a>

                        <div className="footer-social pt-4 text-center">
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-twitter"></i></a>
                           <a href="#"><i className="fab fa-youtube"></i></a>
                           <a href="#"><i className="fab fa-dribbble"></i></a>
                           <a href="#"><i className="fab fa-linkedin-in"></i></a>
                           <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                     </div>
                     <hr className="container text-white my-0 mt-1" />
                     <div className="col-sm-12">
                        <div className="footer-copy">
                           <div className="copy-right text-center pt-5">
                              <p className="text-light">Copyright &copy; 2021 Foodies.
                                 All rights reserved</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </footer>
      </>

   )
}

export default Footer
