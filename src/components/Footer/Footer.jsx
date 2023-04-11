import React from 'react';
import './Footer.css';
import facebookLogo from '../../assets/Icons/facebook-f.svg';
import twitterLogo from '../../assets/Icons/twitter.svg';
import instagramLogo from '../../assets/Icons/instagram.svg';


const Footer = () => {
    return (
        <div className='footer-container mt-10 px-28 pt-10 pb-3'>
            <div className='footer-content'>
                <div>
                    <h1 className='text-white text-3xl font-bold'>JobPilot</h1>
                    <p className='my-5 w-3/4 list'>
                        There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                    </p>
                    <div className="flex gap-3">
                        <div className='flex items-center bg-white rounded-full w-fit px-[10px] py-[7px]'>
                            <img className='w-3' src={facebookLogo} alt="facebook" />
                        </div>
                        <div className='flex items-center bg-white rounded-full w-fit px-[10px] py-[7px]'>
                            <img className='w-3' src={twitterLogo} alt="twitter" />
                        </div>
                        <div className='flex items-center bg-white rounded-full w-fit px-[10px] py-[7px]'>
                            <img className='w-3 insta-icon' src={instagramLogo} alt="instagram" />
                        </div>
                    </div>
                </div>
                <div className='company-info'>
                    <ul>
                        <h6 className='font-semibold text-xl text-white pb-3'>Company</h6>
                        <li className='list'><a href="">About Us</a></li>
                        <li className='list'><a href="">Work</a></li>
                        <li className='list'><a href="">Latest News</a></li>
                        <li className='list'><a href="">Careers</a></li>
                    </ul>
                    <ul>
                        <h6 className='font-semibold text-xl text-white pb-3'>Product</h6>
                        <li className='list'><a href="">Prototype</a></li>
                        <li className='list'><a href="">Plans & Pricing</a></li>
                        <li className='list'><a href="">Customers</a></li>
                        <li className='list'><a href="">Integrations</a></li>
                    </ul>
                    <ul>
                        <h6 className='font-semibold text-xl text-white pb-3'>Support</h6>
                        <li className='list'><a href="">Help Desk</a></li>
                        <li className='list'><a href="">Sales</a></li>
                        <li className='list'><a href="">Become a Partner</a></li>
                        <li className='list'><a href="">Developers</a></li>
                    </ul>
                    <div>
                        <h6 className='font-semibold text-xl text-white pb-3'>Contact</h6>
                        <p className='list'>524 Broadway , NYC</p>
                        <p className='list'>+1 777 - 978 - 5570</p>
                    </div>
                </div>
            </div>


            <div className='flex justify-between my-10 py-5 border-t'>
                <p>@{new Date().getFullYear()} <span className='font-semibold'>{document.title}</span>. All Rights Reserved</p>
                <p>Powered by <span className='font-semibold'>{document.title}</span></p>
            </div>
        </div>
    );
};

export default Footer;