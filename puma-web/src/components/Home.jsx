import React from 'react'
import Footer from './Footer'
import banner1 from "../img/b1webp"
import img1 from "../img/puma1.avif"
import img2 from "../img/puma2.avif"
import img3 from "../img/puma3.avif"
import img4 from "../img/puma4.avif"
import img5 from "../img/puma5.avif"
import img6 from "../img/puma6.avif"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images  from './Images'



const Home = () => {
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
       <div className='puma_mainbodyCont'>
        <div className='puma_topImg'>
          <div>
      <img src="" alt="" />
          </div>
         <div className='bkgrnd_txt'>
           <h2 className='boldtxt'>END OF SEASON SALE</h2>
           <h4 className='S_boldtxt'>NEW STYLE ADDED</h4>
           <p className='p_txt'>+EXTRA 5% OFF ON ALL ONLINE PAYMENT</p>

           <div className='bg_btn'> 
            <button>FOR HIM</button>
            <button>FOR HER</button>
            <button>FOR KIDS</button>
           </div>
         </div>
        </div>

        {/* <div className='puma_top2Img'>
         <div className='bkgrnd2_txt'>
           <h2 className='boldtxt'>SEE THE GAME LIKE WE DO</h2>
           <h4 className='S_boldtxt'>PUMA x INDIAN OLYMPIC ASSOCIATION</h4>
           <p className='p_txt'>OFFICIAL FOOTWEAR PARTNER</p>

           <div className='bg_btn'> 
            <button>LEARN MORE</button></div>
         </div>
        </div> */}

        {/* <div className='puma_top3Img'>
         <div className='bkgrnd3_txt'>
           <h2 className='boldtxt'>PLAY LOUD</h2>
           <h4 className='S_boldtxt' id='bgbtn'>BREAK IT DOWN</h4>

           <div className='bg_btn'> 
            <button>SHOP NOW</button>
          </div>
         </div>
        </div> */}

        {/* <div className='puma_top4Img'>
         <div className='bkgrnd4_txt'>
           <h2 className='boldtxt'>BACK TO AZZURRO</h2>
           <h4 className='S_boldtxt' id='bgbtn'>SCUDERIA FERRARI MIAMI LIMITED EDITION</h4>

           <div className='bg_btn5'> 
            <button>SHOP NOW</button>
           </div>
         </div>
        </div> */}

        {/* <div className='puma_top5Img'>
         <div className='bkgrnd4_txt'>
           <h2 className='boldtxt'>PUMA X CARROTS</h2>
           <h4 className='S_boldtxt' id='bgbtn'>BY ANWAR CARROTS</h4>
           <p className='p_txt'>ORGANIC XL CARROTS</p>

           <div className='bg_btn5'> 
            <button>SHOP NOW</button>
           </div>
         </div>
        </div> */}

        {/* <div className='puma_top6Img'>
        <div className='bkgrnd6_txt'>
           <h2 className='boldtxt'>PUMA X PALM</h2>
           <h4 className='S_boldtxt' id='bgbtn'>TREE CREW</h4>
           <p className='p_txt'>CLASSIC SPORT STYLE</p>

           <div className='bg_btn6'> 
            <button>SHOP NOW</button>
           </div>
        </div>
      </div> */}

      {/* <div className='puma_top7Img'>
        <div className='bkgrnd7_txt'>
           <h2 className='boldtxt'>THE FUTURE IS NOW</h2>
           <h4 className='S_boldtxt' id='bgbtn'>THE NEXT GEN OF PUMA</h4>
           <p className='p_txt'>RIYAN PARAG & NITISH KUMAR REDDY</p>

           <div className='bg_btn6'> 
             <button>SHOP NOW</button>
           </div>
        </div>
     </div> */}

     <div className='kids_Sec'>
      <h2 style={{textAlign:"center"}}>KIDS' MUST-HAVE STYLES</h2>
      <div className='kids_cont'>
      <div className='kidsWear_Box_Main'>
      <div className='kidsWear_Box1'>
        <div className='boxtxt'>
        <h3>SCHOOL STORE</h3>
        <p>One Stop Shop</p>
        </div>
        
      </div>
      </div>

      <div className='kidsWear_Box_Main'>
      <div className='kidsWear_Box0'>
        <div className='boxtxt'>
        <h3>SCHOOL STORE</h3>
        <p>One Stop Shop</p>
        </div>
      </div>
      </div>

      <div className='kidsWear_Box_Main'>
      <div className='kidsWear_Box2'>
        <div className='boxtxt'>
        <h3>SCHOOL STORE</h3>
        <p>One Stop Shop</p>
        </div>
      </div>
      </div>
      <div className='kidsWear_Box_Main'>
      <div className='kidsWear_Box3'>
        <div className='boxtxt'>
        <h3>SCHOOL STORE</h3>
        <p>One Stop Shop</p>
        </div>
       </div>
      </div>
      </div>

     </div>
     
     {/* <div className='puma_top8Img'>
        <div className='bkgrnd8_txt'>
           <h2 className='boldtxt'>MANCHESTER CALLING</h2>
           <h4 className='S_boldtxt' id='bgbtn'>24/25 MAN CITY HOME kIT</h4>

           <div className='bg_btn5'> 
            <button>SHOP NOW</button>
            <button>SHOP COLLECTION</button>
           </div>
        </div>
    </div> */}

{/*       
    <div className='puma_top9Img'>
        <div className='bkgrnd7_txt'  id='bkgrnd9clr'>
           <h2 className='boldtxt'>FOR ALL THE SNEAKERHEADS</h2>
           <h4 className='S_boldtxt' id='bgbtn'>YOUR ONE STOP SNEAKER SHOP</h4>

           <div className='bg_btn6' id='bg9btn'> 
            <button>SHOP NOW</button>
            <button>SHOP COLLECTION</button>
           </div>
        </div>
    </div> */}
   

   
    <div className='pumaSpotLightSec'>
   <div className='pumaSpotLightSec_cont'>
    
    <Slider {...settings}>
        {products.map((product, index) => (
          <div className='spotlightMainBox' style={{width:""}}>
            <div className="spotligtbg">
              <img src={product.img} alt="" />
              <span>{product.discount}</span>
            </div>
            <div className='spotText'>
              <div className='spotText1'>
                <span className='ms'>{product.title}</span>
                <span className='pc' id="pcid">{product.price1}</span>
              </div>
              <div className='spotText2'>
                <span className='ms'>Mens Sneakers</span>
                <span className='pc'>{product.price2}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
   
    </div>
   </div>

    {/* <div className='puma_top10Img'>
        <div className='bkgrnd8_txt'  id='bkgrnd10clr'>
           <h2 className='boldtxt'>PUMA x ATHLETICS FEDERATION OF INDIA</h2>
           <h4 className='S_boldtxt' id='bgbtn'>A NEW ERA OF SPEED, STRENGTH & SPIRI</h4>

           <div className='bg_btn6' id='bg10btn'> 
            <button>LEARN MORE</button>
           </div>
        </div>
    </div> */}

    <Images/>

      </div> 
      <Footer/>
    </div>
  )
}

 
const products = [
  { img: img1, title: "PUMA Court Shatter Low", price1: "₹2,819", price2: "₹5,999", discount: "-53%" },
  { img: img2, title: "PUMA Court Shatter Low", price1: "₹2,819", price2: "₹5,99", discount: "-53%" },
  { img: img3, title: "PUMA Court Shatter Low", price1: "₹2,819", price2: "₹5,99", discount: "-53%" },
  { img: img4, title: "PUMA Court Shatter Low", price1: "₹2,819", price2: "₹5,99", discount: "-53%" },
  { img: img5, title: "PUMA Court Shatter Low", price1: "₹2,819", price2: "₹5,99", discount: "-53%" },
  { img: img6, title: "PUMA Court Shatter Low", price1: "₹2,819", price2: "₹5,99", discount: "-53%" }
];
 

export default Home;
