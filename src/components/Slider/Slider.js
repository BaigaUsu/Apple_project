import {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './Slider.module.scss'
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';


export function Slider() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
    fetch('https://e21f1405401110ebf8c6b83c467b2bfe.serveo.net/api/products/')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.upper_scroll === 'in');
        const sortedProducts = filteredProducts.sort((a, b) => a.id - b.id);
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

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
            {products.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className={styles.slidesImage}
                            src={image.upper_scroll_image}
                            onClick={() => {
                                navigate(`/Items/${image.id}`);
                                }}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

