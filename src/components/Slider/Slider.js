
import {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './Slider.module.scss'
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { Link, useNavigate } from 'react-router-dom';


export function Slider() {
    const navigate = useNavigate()

    const images = [
        'AppleVision_slide.jpg',
        'macbook_slide.jpg',
        'iPhone15_slide.webp',
        'iPhone15Pro_slide.webp',
        'AppleWatch_slide.webp',
        'AppleWatchUltra_slide.webp',
        'MacBookAir_slide.png',
    ];

    return (
        <div className={styles.swiperBlock}>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                effect="fade"
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{delay: 5500}}
                navigation
                speed={600}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
            {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Link to='ItemPage'>
                        <img className={styles.slidesImage}
                            src={`https://ik.imagekit.io/kvsf72hfx/SwiperSlide/${image}`} alt=""/>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

