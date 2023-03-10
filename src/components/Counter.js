import React from 'react'
import { useState, useEffect } from 'react'


const Counter = () => {

   // document.addEventListener("DOMContentLoaded", () => {
   //    function counter(id, start, end, duration) {
   //       let obj = document.getElementById(id),
   //          current = start,
   //          range = end - start,
   //          increment = end > start ? 1 : -1,
   //          step = Math.floor(duration / range),
   //          timer = setInterval(() => {
   //             current += increment;
   //             obj.textContent = current;
   //             if (current == end) {
   //                clearInterval(timer);
   //             }

   //          }, step);
   //    }
   //    counter("count1", 0, 1278, 3500);
   //    counter("count2", 100, 3278, 4500);
   //    counter("count3", 30, 2278, 3900);
   //    counter("count4", 0, 1278, 3500);


   // })




   useEffect(() => {
      counter(1, 0, 1278, 3500);
      counter(2, 100, 3278, 4500);
      counter(3, 30, 2278, 3900);
      counter(4, 0, 1278, 3500);
   }, [])


   const [c1, setC1] = useState(0);
   const [c2, setC2] = useState(0);
   const [c3, setC3] = useState(0);
   const [c4, setC4] = useState(0);

   function counter(id, start, end, duration) {
      // let obj = document.getElementById(id),
      // let current, range, increment, step, timer;
      let current = start;
      let range = end - start;
      let increment = end > start ? 1 : -1;
      let step = Math.floor(duration / range);
      let timer = setInterval(() => {
         current += increment;
         // we dont required this because here we dont inset this value in the document we directly using the state of the variable..
         // obj.textContent = current;
         if (id === 1) {
            setC1(current);
         }
         else if (id === 2) {
            setC2(current);
         }
         else if (id === 3) {
            setC3(current);
         }
         else {
            setC4(current);
         }
         if (current === end) {
            clearInterval(timer);
         }

      }, step);
   }




   return (
      <>
         <section id="counter" >
            <section className="counter-section">
               <div className="container">
                  <div className="row text-center">

                     <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
                        <h2> <span id="count1"></span>{c1}+</h2>
                        <p>CUSTOMERS</p>
                     </div>

                     <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
                        <h2> <span id="count2"></span>{c2}+</h2>
                        <p>PHOTOS</p>
                     </div>

                     <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
                        <h2> <span id="count3"></span>{c3}+</h2>
                        <p>PRICES</p>
                     </div>

                     <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
                        <h2> <span id="count4"></span>{c4}+</h2>
                        <p>SAVINGS</p>
                     </div>

                  </div>
               </div>
            </section>
         </section>
      </>

   )
}

export default Counter
