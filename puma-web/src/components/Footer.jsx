import React from 'react'
import '../App.css';


const Footer = () => {
 
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-column">
                <div className='clck_accord'>
                <h3>SUPPORT</h3>
                </div>

                <div className='Show-accord'>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Promotions & Sale</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Shoe Care</a></li>
                    <li><a href="#">Tech Glosaary</a></li>
                    <li><a href="#">Initiate Return/ Exchange</a></li>
                    <li><a href="">Running Shoes</a></li>

                </ul>
                </div>
            </div>

            <div className="footer-column" style={{"marginTop":"35px"}}>
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">MY Account</a></li>
                    <li><a href="#">Exchange and Return Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Sneakers</a></li>
                    <li><a href="">Cookie Setting</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>ABOUT</h3>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Corporate News</a></li>
                    <li><a href="#">Press Center</a></li>
                    <li><a href="#">Invester</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="">Store Locator</a></li>
                    <li><a href="">PUMA Articles</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>STAY UP TO DATE</h3>
                <p><a className='signUp' href="">Sign Up For Email</a></p>
                
             <div className='socialIcon'>
             <i class="fa-brands fa-youtube"  style={{color:"white",fontSize:"22px"}} ></i>
             <i class="fa-brands fa-twitter" style={{color:"white",fontSize:"22px"}}></i>
             <i class="fa-brands fa-pinterest"  style={{color:"white",fontSize:"22px"}}></i>
             <i class="fa-brands fa-instagram"  style={{color:"white",fontSize:"22px"}}></i>
             <i class="fa-brands fa-facebook"  style={{color:"white",fontSize:"22px"}}></i>
             </div>
             <div className='exp'>
             <h3>EXPLORE</h3>
             </div>
        
            </div>
        </div>
        </footer>
  )
}

export default Footer