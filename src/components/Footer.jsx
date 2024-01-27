import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    // const [color, setColor] = useState(true);



    // const hoverInColor=(e)=> {
    //     setColor(true)
    //     }
    // const hoverOutColor=()=> {
    //     setColor(false);
    // }
    const colorPanel = {
        color: "white",
        backgroundColor: " rgba(var(--bs-secondary-color-rgb),.9)"
    }

    return (
        <>
            <footer className="text-center text-lg-start  text-muted">
                <section className="border-bottom pt-2 mt-4" style={colorPanel}>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                    <i className="fas fa-gem me-3"></i>{props.title}
                                </h6>
                                <p>

                                    🚀 Exciting News! We're thrilled to announce the launch of our brand-new website, a digital space designed to bring you a seamless and enriched experience.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <span className='mb-0'><Link className="nav-link" id='business' aria-current="page" to="/general">Home</Link></span>
                                <span className='mb-0'><Link className="nav-link" id='business' to="/business">Business</Link></span>
                                <span className='mb-0'><Link className="nav-link" id='entertainment' to="/entertainment">Entertainment</Link></span>
                                <span className='mb-0'><Link className="nav-link" id='general' to="/general">General</Link></span>
                                <span className='mb-0'><Link className="nav-link" id='health' to="/health">Health</Link></span>
                                <span className='mb-0'> <Link className="nav-link" id='science' to="/science">Science</Link></span>
                                <span className='mb-0'> <Link className="nav-link" id='sports' to="/sports">Sports</Link></span>
                                <span className='mb-0'><Link className="nav-link" id='technology' to="/technology">Technology</Link></span>
                            </div >

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Kolkata, 10012, IN</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div >
                    </div >
                </section >
                <div className="text-center p-4" style={colorPanel} >
                    © 2021 Copyright :
                    <a className="text-reset fw-bold" href="https://github.com/Shivam-Mandal/"> shivammandal.com</a>
                </div>
            </footer >
        </>
    )

}
export default Footer;