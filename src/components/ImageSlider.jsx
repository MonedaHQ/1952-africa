import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles/imageslider.module.css';

function ImageSlider({ imageArray }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  };
  return (
    <Slider {...settings}>
      {imageArray.map((image, index) => (
        <div key={index} className={styles.sliderContainer}>
          {typeof image === 'string' ? (
            <Image
              src={image}
              width={1728}
              height={1119}
              alt={`Slide ${index + 1}`}
            />
          ) : (
            <div className={styles.imageAndCaption}>
              <Image
                src={image.imagePath}
                width={1728}
                height={1119}
                alt={`Slide ${index + 1}`}
              />
              <p>{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
