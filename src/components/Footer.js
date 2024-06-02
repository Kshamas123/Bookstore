// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Book Store</h5>
                        <p>
                            Discover a wide variety of books at our store. From fiction to non-fiction, we have something for every reader.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Privacy Policy</a></li>
                            <li><a href="#!" className="text-dark">Terms of Service</a></li>
                            <li><a href="#!" className="text-dark">Contact</a></li>
                            <li><a href="#!" className="text-dark">About Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Facebook</a></li>
                            <li><a href="#!" className="text-dark">Twitter</a></li>
                            <li><a href="#!" className="text-dark">Instagram</a></li>
                            <li><a href="#!" className="text-dark">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 bg-light">
                © 2024 Book Store
            </div>
        </footer>
    );
};

export default Footer;
