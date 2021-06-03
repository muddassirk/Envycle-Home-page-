import React from 'react'
import aboutImg from '../images/aboutus-img.png'

export default function Home() {
    return (
        <div>

            {/*header section start */}
            <div className="header_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="menu-area">
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg ">
                            {/* <a class="navbar-brand" href="#">Menu</a> */}
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link active" href="index.html">HOME<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className href="#aboutus">
                                        <a className="nav-link" href="#aboutus">ABOUT US</a>
                                    </li>
                                    <li className="nav-item" href="#client">
                                        <a className="nav-link" href="#client">CLIENT</a>
                                    </li>
                                    <li className="nav-item" href="#">
                                        <a className="nav-link" href="#contactus">CONTACT US</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="banner_section layout_padding">
                            <section>
                                <div id="main_slider" className="section carousel slide banner-main" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="container">
                                                <div className="row marginii">
                                                    <div className="col-md-5 col-sm-12">
                                                        <div className="carousel-sporrt_text ">
                                                            <h1 className="banner_taital" />
                                                            <div className="ads_bt"><button className="btn"><a href="#">START NOW</a></button></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 col-sm-12">
                                                        <div className="img-box">
                                                            {/*-<figure><img src="images/banner-img1 (2).png" style="max-width: 100%;"/></figure>-*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {/*header section end */}




            {/*about section start */}
            <div id="aboutus" className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tablet"><img src={aboutImg} /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_taital">
                                <div className="about_text">About Us</div>
                                <p className="dolor_text">Welcome to ENVYCLE (Kachra Hamara Tohfa Apka)
                                Envycle is established in Karachi, Pakistan in 2021. We will be providing high quality Envycle waste
                                handling systems to support your recycling and environmental objectives. Continuously innovating and
                                producing ‘state of the art’ technology to improve your experience and ensure you have the best solution
                                for your compaction and baling needs.
                                We pride ourselves on our expert team who are there to support you every step of the way, we will find you
                                the right compacting or baling solution and give you discounted vouchers in return.
                                We pride ourselves in offering our customers the best equipment, with the best support. As a result our
                                integrity and knowledge means you can be sure of honest, straightforward solutions to your waste and
                                recycling needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*about section end */}




            {/*client section start */}
            <div className="clients_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div id="client" className="client_text">CLIENT </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clients_section_2 layout_padding">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" />
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="client_img"><img src="images/img-3.png" />
                                <h1 className="johan_text">AARISH ALI</h1>
                                <p className="adiser_text">Chief Executive</p>
                                <p className="long_text">I welcome you to Alico Waste Experts, I assure you that we are not here for just
                                business but an effort to stream line your wastes.
                                We shall be economical in thinking, planning and execution. We have everything called team, and not just
                                team but a team of right people. We also understand that Pakistan is facing lot of environmental problems
                                but we shall resolve them slowly and gradually.
                                Due to insufficient resources of Waste Disposal and its recycling, ultimately we are facing many
                                challenges like diseases all around in the country. We commit to focus on the Proper Disposal of the Waste
                                and it's Recycling. And we believe that one day we would be successful to make Pakistan Greener than ever
                                before (Insha’Allah).
                                My appreciation to those who have implemented responsible waste management and my piece of advice to those
                                who have not – It is not rocket science. All it needs is will. Make a choice— to be concerned about
                    people’s lives or to be indifferent. To segregate or not?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*client section end */}




            {/*footer section start */}
            <div id="contactus" className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="emailicon"> <img src="images/mail-icon.png" /> info@envycle.com</div>
                            <br />
                            <div className="callicone"><img src="images/call-icon.png" />+92 342 2497984</div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright © 2021 All Rights Reserved by
                <a href="#">Iqra Student's</a>.
              </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        </div>
                    </div>
                </div>
            </div>
            {/*footer section end */}


        </div>
    )
}
