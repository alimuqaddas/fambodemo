import React from 'react';

const SideBar = () => {
    return (
        <div>
            <header>
                <div className="logo-box">
                    <a href="index-2.html"><img alt="" src="images/logo.png"/></a>
                </div>

                <a className="elemadded responsive-link" href="#">Menu</a>

                <div className="menu-box">
                    <ul className="menu">
                        <li><a className="active" href="index.html"><span>Home</span></a></li>
                        <li><a href="about.html"><span>About</span></a></li>
                        <li><a href="blog.html"><span>blog</span></a></li>
                        <li><a href="services.html"><span>Services</span></a></li>
                        <li><a href="single-post.html"><span>Single Post</span></a></li>
                        <li><a href="single-work.html"><span>Single Project</span></a></li>
                        <li><a href="contact.html"><span>Contact</span></a></li>
                    </ul>					
			    </div>

                <div className="social-box">
                    <ul className="social-icons">
                        <li><a href="#" className="facebook" ><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="twitter" ><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" className="dribble" ><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#" className="pinterest" ><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                    <div className="info">
                        <a href="#" className="mail">youremail@domain.com<i className="fa fa-envelope-o"></i></a>
                        <p className="phone">+38164 123 456<i className="fa fa-phone"></i></p>
                    </div>

                    <p className="copyright">&#169; 2014 Moler inc<br/> All Rights Reserved</p>
			    </div>

            </header>
        </div>
    );
};

export default SideBar;