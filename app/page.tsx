import Image from "next/image";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Show from "./Home/ShowCase";
import Mission from "./Home/Mission";
import Categories from "./Home/Categories";
// import PopularListings from "./Home/PopularListings";

import Steps from "./Steps/steps";
import Footer from "./Components/Footer";
import FAQ from "./Home/Partnership";
import BlogSection from "./Home/Blog";
import StatsSection from "./Components/Stats";


export default function Home() {
  return (
  <>
  
    <Hero/>
    <Services/>
    <Show/>
    <Mission/>
    {/* <PopularListings/> */}
    <Steps/> 
    <StatsSection/> 
    <Categories/>
   
  
    <BlogSection/>
     <FAQ/>
    
    <Footer/> 
     
    
  </>
  );
}
