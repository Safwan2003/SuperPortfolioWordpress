import React, { useEffect } from 'react'
import './Main.css'
import Image1 from './assets/coding.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import     VanillaTilt from 'vanilla-tilt'

// import  image1 from "../assets/image1.png";
// import  image2 from "../assets/image2.png";


const Main = () => {

  <script type="text/javascript" src="vanilla-tilt.js"></script>
useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card-tilt"),
     {
      glare: true,
      reverse: true,
      "max-glare": 0.5
    })
  })
  

  useEffect(()=>{
  AOS.init({duration:1000});
},[])



// <script src={VANILLA}></script>
//    <script>
//     VanillaTilt.init(document.querySelectorAll(".card"),
//     {
//       glare : true,
//       reverse : true,
//       "max-glare": 0.5,
//     });
//    </script>


  return (
    <div >
  {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
  AOS.init();
</script> */}
{/* <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div> */}
<div className='m-96 '>.</div>
<div data-aos="fade-right" className='main-bar  sm: mt-96 mb-96 w-screen text-l	'>
  <p data-aos="fade-up " >75+ WORDPRESS Templates</p>
  <p data-aos="fade-up">+65 New widgets</p>
  <p data-aos="fade-up">+76 Ready Elements</p>
</div>
<div>
  

<h1 className='main-heading3  sm: mt-96 w-screen'data-aos="fade-down">We Are A New Digital Product<br></br> Development Agency</h1>

<h3 className='main-heading2 tracking-in-expand sm: w-screen' data-aos="fade-up">BEST FEATURES</h3>

<section data-aos="fade-down" className='container sm: flex flex-nowrap flex-col	'>
<div className=' sm: mt-96'></div>
<div className=' sm: mt-96'></div>
<div className=' sm: mt-96'></div>
<div className=' sm: mt-96'></div>
<div className=' sm: mt-96'></div>
<div data-aos="fade-right" class="card-tilt  sm: flex flex-nowrap flex-col bg-black">
  <div data-aos="fade-right" class="card-image "></div>
  <div data-aos="fade-right" class="card-text">
    <span data-aos="fade-right" class="date">4 days ago</span>
    <h2>Post One</h2>
    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  
</div>

<div  data-aos="fade-up"class=" card-tilt  card-2  rgb">
  <div  data-aos="fade-up" class="card-image"></div>
  <div  data-aos="fade-up"class="card-text">
    <span data-aos="fade-up" class="date">4 days ago</span>
    <h2>Post One</h2>
    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  
</div>

<div data-aos="fade-left" class="  card-tilt  sm: bg-black ">
  <div data-aos="fade-left" class="card-image"></div>
  <div  data-aos="fade-left" class="card-text">
    <span data-aos="fade-left" class="date">4 days ago</span>
    <h2>Post One</h2>
    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  
</div>







</section>







</div>


    </div>
  )
 }

export default Main