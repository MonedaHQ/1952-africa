import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css'; // Import swiper bundle CSS

import styles from './styles/imageslider.module.css';

function ImageSlider({ imageArray }) {
  const swiperStyles = {
    height: '100vh',
  };

  return (
    <Swiper
      {...swiperStyles}
      autoplay={{ delay: 0 }}
      effect="fade"
      modules={[EffectFade]}
    >
      {imageArray.map((image, index) => (
        <SwiperSlide key={index} className={styles.sliderContainer}>
          {typeof image === 'string' ? (
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.sliderImage}
            />
          ) : (
            <div className={styles.imageAndCaption}>
              <img
                src={image.imagePath}
                alt={`Slide ${index + 1}`}
                className={styles.sliderImage}
              />
              <p>{image.caption}</p>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
