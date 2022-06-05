import React from 'react'
import "./fakta.css"
import Slider from "react-slick";
import arrow from "../../assets/images/arrow1.svg"
import carton from "../../assets/images/carton.png"
import bg_stiker from "../../assets/images/bg-s.png"
import arrowright from "../../assets/images/arrow-right.svg"
import one from "../../assets/images/1.svg"
import two from "../../assets/images/2.svg"
import three from "../../assets/images/3.svg"
import four from "../../assets/images/4.png"
import five from "../../assets/images/5.svg"
import six from "../../assets/images/6.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fakta = () => {
    var settings = {
        dots: false,
        arrow: false,
        infinite: false,
        speed: 500,

        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrow: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    arrow: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrow: false,
                }
            }
        ]
    };
    return (
        <>

            <div className='main_box'>
                <div className='fakta_container'>
                    <div className='fakta_wrap'>
                        <div>
                            <div className='fakta_head'>Facts about acne</div>
                            <div className='fakta_text'>Acne is not because your skin is dirty. But it can help to wash your skin with a gentle wash and finish with a moisturizing lotion tailored to your affected area.</div>
                            <div className='fakta_link'> <div className='fakta_link22'>READ MORE ABOUT ACNE HERE</div>
                                <div>
                                    <img src={arrow} className="arrow_img1" />
                                </div>
                            </div>
                            <div className='carton_img_wrap'>
                                <img src={carton} className="carton_img" />
                            </div>
                        </div>
                        <div className='image_wrapper'>
                            <div className='bg_stiker'>
                                <div className='bg_stiker_wrap'>
                                    <img src={bg_stiker} className="stker_img_3" />
                                    <div className='text_wrap_33'>
                                        Do you need help or have a questions?
                                        <div>
                                            <img src={arrowright} className="arrow_rightff" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='box_wraper'>
                    <div className='box_info_2'>
                        <div className='box_info_21'>
                            <img src={one} className='one_img' />
                        </div>
                        <div className='box_k'>urinkollen.se</div>
                    </div>
                    <div className='box_info_2'>
                        <div className='box_info_21'>
                            <img src={two} className='one_img' />
                        </div>
                        <div className='box_k'>POLLENOLLEN.SE</div>
                    </div>
                    <div className='box_info_2'>
                        <div className='box_info_21'>
                            <img src={three} className='one_img' />
                        </div>
                        <div className='box_k'>herpeskollen.se</div>
                    </div>
                    <div className='box_info_2'>
                        <div className='box_info_21'>
                            <img src={four} className='one_img' />
                        </div>
                        <div className='box_k'>BORRELIAakulEN.SE</div>
                    </div>
                    <div className='box_info_2'>
                        <div className='box_info_21'>
                            <img src={five} className='one_img' />
                        </div>
                        <div className='box_k'>ögonkollen.se</div>
                    </div>
                    <div className='box_info_2'>
                        <div className='box_info_21'>
                            <img src={six} className='one_img' />
                        </div>
                        <div className='box_k'>menskollen.se</div>
                    </div>


                </div>
                <div className='slider_wrap'>
                    <Slider {...settings}>
                        <div>
                            <div className='box_info_2_slide'>
                                <div className='box_info_21'>
                                    <img src={one} className='one_img' />
                                </div>
                                <div className='box_k'>urinkollen.se</div>
                            </div>
                        </div>
                        <div>
                            <div className='box_info_2_slide'>
                                <div className='box_info_21'>
                                    <img src={one} className='one_img' />
                                </div>
                                <div className='box_k'>urinkollen.se</div>
                            </div>
                        </div>


                    </Slider>
                </div>

            </div>

        </>
    )
}

export default Fakta