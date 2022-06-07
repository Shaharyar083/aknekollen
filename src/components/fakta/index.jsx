import React from "react";
import "./fakta.css";
import Slider from "react-slick";
import arrow from "../../assets/images/arrow1.svg";
import carton from "../../assets/images/carton.png";
import bg_stiker from "../../assets/images/bg-s.png";
import arrowright from "../../assets/images/arrow-right.svg";
import one from "../../assets/images/1.svg";
import two from "../../assets/images/2.svg";
import three from "../../assets/images/3.svg";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.svg";
import six from "../../assets/images/6.svg";
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
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrow: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    arrow: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrow: false,
                },
            },
        ],
    };
    return (
        <>
            <div className="main_box">
                <div className="box_wraper show">
                    <div className="box_info_2">
                        <div className="box_info_21">
                            <img src={one} className="one_img" />
                        </div>
                        <div className="box_k">URINKOLLEN.SE</div>
                    </div>
                    <div className="box_info_2">
                        <div className="box_info_21">
                            <img src={two} className="one_img" />
                        </div>
                        <div className="box_k">POLLENOLLEN.SE</div>
                    </div>
                    <div className="box_info_2">
                        <div className="box_info_21">
                            <img src={three} className="one_img" />
                        </div>
                        <div className="box_k">HERPESKOLLEN.SE</div>
                    </div>
                    <div className="box_info_2">
                        <div className="box_info_21">
                            <img src={four} className="one_img" />
                        </div>
                        <div className="box_k">BORRELIAAkUlEN.SE</div>
                    </div>
                    <div className="box_info_2">
                        <div className="box_info_21">
                            <img src={five} className="one_img" />
                        </div>
                        <div className="box_k">ÖGONKOLLEN.SE</div>
                    </div>
                    <div className="box_info_2">
                        <div className="box_info_21">
                            <img src={six} className="one_img" />
                        </div>
                        <div className="box_k">MENSKOLLEN.SE</div>
                    </div>
                </div>
                <div className="slider_wrap show2">
                    <Slider {...settings}>
                        <div>
                            <div className="box_info_2_slide">
                                <div className="box_info_21">
                                    <img
                                        src={one}
                                        className="one_img"
                                        style={{ width: "30px" }}
                                    />
                                </div>
                                <div className="box_k">URINKOLLEN.SE</div>
                            </div>
                        </div>
                        <div>
                            <div className="box_info_2_slide">
                                <div className="box_info_21">
                                    <img
                                        src={two}
                                        className="one_img"
                                        style={{ width: "30px" }}
                                    />
                                </div>
                                <div className="box_k">POLLENOLLEN.SE</div>
                            </div>
                        </div>
                        <div>
                            <div className="box_info_2_slide">
                                <div className="box_info_21">
                                    <img
                                        src={three}
                                        className="one_img"
                                        style={{ width: "30px" }}
                                    />
                                </div>
                                <div className="box_k">HERPESKOLLEN.SE</div>
                            </div>
                        </div>
                        <div>
                            <div className="box_info_2_slide">
                                <div className="box_info_21">
                                    <img
                                        src={four}
                                        className="one_img"
                                        style={{ width: "30px", height: "30px" }}
                                    />
                                </div>
                                <div className="box_k">BORRELIAAkUlEN.SE</div>
                            </div>
                        </div>
                        <div>
                            <div className="box_info_2_slide">
                                <div className="box_info_21">
                                    <img
                                        src={five}
                                        className="one_img"
                                        style={{ width: "30px" }}
                                    />
                                </div>
                                <div className="box_k">ÖGONKOLLEN.SE</div>
                            </div>
                        </div>
                        <div>
                            <div className="box_info_2_slide">
                                <div className="box_info_21">
                                    <img
                                        src={six}
                                        className="one_img"
                                        style={{ width: "30px" }}
                                    />
                                </div>
                                <div className="box_k">MENSKOLLEN.SE</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Fakta;
