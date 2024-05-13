import React from 'react';
import Logo from "./Assets/img1.png";
import mid1 from "./Assets/maincontent_land.png";
// import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
    const navigate = (path) => {
        window.location.href = path;
    }
    return (
        <div className="container_Navbar">
            <nav className="navbar">
                <div>
                    <a className="navbar-brand" href='Logo'>
                        <img src={Logo} className='logo' alt="Logo" />
                    </a>
                    {/* <img src="img1" alt="img1"></img> */}
                </div>

                <ul className="navbar-nav">
                    <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>Home</a>
                    <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>About</a>
                    <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>Contact </a>
                    <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>Services</a>
                    <button className="Login_Landing" type="submit" href="#" onClick={() => navigate('./LoginSignup')}>Login/Signup</button>
                </ul>
            </nav>
            <div className='maincontent_land'>
                <a className="navbar-brand" href='Logo'>
                    <img src={Logo} className='logo' alt="Logo" />
                </a>
            </div>
            <div>
                <a className="Mid1" href='mid1'>
                    <img src={mid1} className='mid1' alt="mid1" />
                </a>
            </div>
            <footer class="containerfooter">

                <div class="section_footer">
                    <h5>Menu</h5>
                    <ul class="nav flex-column">
                        <li ><a href="#" >Home</a></li>
                        <li ><a href="#" >About</a></li>
                        <li ><a href="#" >Services</a></li>
                        <li ><a href="#" >Contact</a></li>
                    </ul>
                </div>

                <div class="section_footer1">
                    <h5>Help</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQ</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Reporting</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Documentation</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Support Policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy</a></li>
                    </ul>
                </div>


                <div class="contactus">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Don't miss any updates of our Coding Quiz Challenges!</p>
                        <div class="helpmenu">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </footer>
        </div>

    );
}

export default Navbar;
