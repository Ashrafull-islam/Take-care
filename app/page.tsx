import CardForm from "./Components/Home/CardForm";
import FaQHome from "./Components/Home/FaQHome";
import Form from "./Components/Home/Form";
import HomeBg from "./Components/Home/HomeBg";
import HomeHypnobirthing from "./Components/Home/HomeHypnobirthing";
export default function Home(){
  return(
    <div>
        <HomeBg></HomeBg>
        {/* Hypnobirthing and birth program  */}
       <HomeHypnobirthing></HomeHypnobirthing>

       {/* meet faq and form  */}
       <div>
       <FaQHome></FaQHome>
       <div className="md:-mt-56"><Form></Form></div>
       </div>

    </div>
  )
}