import React from 'react'
import newimg1 from "../img/1.webp"
import newimg2 from "../img/2.webp"
import newimg3 from "../img/3.webp"
import newimg4 from "../img/4.webp"
import newimg5 from "../img/5.webp"
import newimg6 from "../img/6.webp"
import newimg7 from "../img/7.webp"
import newimg8 from "../img/8.jpg"
import newimg9 from "../img/9.webp"
import newimg10 from "../img/10.webp"
import '../App.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  return (

   <div className='pumaFam'>
    <div className='pumaFamCont'>
    <Slider {...settings}>
    {imgs.map((imgages)=>(
      <div style={{width:"25%"}}>
        <div className='imgaMainBox_2'>
         <img src={imgages.img} alt="" />
         <img scrc={imgages.img} alt=""/>
        </div>
      </div>
      
    ))
   }
   </Slider>
     </div>
    </div>

  )
}
const imgs=[
    {img:newimg1},
    {img:newimg2},
    {img:newimg3},
    {img:newimg4},
    {img:newimg5},
    {img:newimg6},
    {img:newimg7},
    {img:newimg8},
    ]
export default Images