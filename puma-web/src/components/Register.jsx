import React from 'react'
import "../App.css"
import Footer from './Footer';

const Register = () => {
  return (
    <div className="Register-container">
           <div className='Disc_banner'>
            <div className='Disc_bannerCont'>
                <p>FLAT 40% OFF | END OF SEASON SALE</p>
            </div>
            <p className='shopNow'><a href="">SHOP NOW</a></p>
            <span style={{fontSize:"12px", fontWeight:"100"}}>+EXTRA 5% OFF ON ALL ONLINE PAYMENTS</span>
        </div>
        <div style={{width:"100%"}}>
        <h1 className='myact'>My account</h1>
        </div>
    <div className="login-form">
    <h2>Register</h2>
    <form>
    <div className="form-group">
        <label htmlFor="email">Name:</label>
        <input type="text" id="name" name="name" required />
    </div>

    <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
    </div>

    <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
    </div>

    <div className="form-group">
        <label htmlFor="password">Number</label>
        <input type="text" id="password" name="number" required />
    </div>
      <button type="submit">SIGN UP</button>
    </form>
    <p className='otp'>An OTP will be sent to your mobile number for verification</p>
    <div style={{display:"flex",gap:"24px"}}>
        <span style={{fontSize:"11px"}}>LOGIN WITH EMAIL AND PASSWORD</span>
        <span style={{fontSize:"11px"}}>LOGIN WITH PHONE AND PASSWORD</span>
    </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Register;