import React from 'react'
import { useState } from 'react'


const Header = () => {
   // this is the way to use js logic react js website ..

   // method-1....
   // using usestate hooks...
   const [fix, setFix] = useState(false)
   function setFixed() {
      if (document.documentElement.scrollTop > 20) {
         setFix(true)
      } else {
         setFix(false)
      }
   }
   window.addEventListener('scroll', setFixed)




   let navbar = document.querySelectorAll(".nav-link");
   let navcollapse = document.querySelector(".collapse.navbar-collapse");

   // navbar.forEach(function (e) {
   //    e.addEventListener("click", function () {
   //       navcollapse.classList.remove("show");
   //    })
   // });

   // navbar.map((e) => {
   //    e.addEventListener("click", function () {
   //       navcollapse.classList.remove("show");
   //    })
   // });


   return (

      <>
         <header>

            <nav className={fix ? ' navbar navbar-expand-lg navigation-wrap scroll-on fixed-top' : ' navbar navbar-expand-lg navigation-wrap fixed-top'}>
               <div className="container">


                  <a className="navbar-brand" href="#">
                     <img src="images/logo.png" className="img-fluid" alt="logo" />
                  </a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                     aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" >


                     <i className="fas fa-stream navbar-toggler-icon"></i>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarText">

                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>

                        <li className="nav-item">
                           <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#explore-food">Explore Foods</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#testinomials">Reviews</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#team">Teams</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#faq">FAQ</a>
                        </li>

                        <li><a className="main-btn" href="#newsletter">1200 345 123</a></li>
                     </ul>

                  </div>
               </div>
            </nav>
         </header>
      </>

   )
}

export default Header
