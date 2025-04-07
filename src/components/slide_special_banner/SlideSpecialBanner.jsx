import React from 'react';
import { Carousel } from 'antd';
import styles from './SlideSpecialBanner.module.css';

const SlideSpecialBanner = () => {
    const images = [
        '../../public/special_banner/6f3c83ffbc74baa67e18a2ef0ecf63e8.webp',
        '../../public/special_banner/99ced3f425e39bdf7c8ef1d418e71e86.webp',
        '../../public/special_banner/688f81891c711ed1b323836e2c89a11d.webp',
        '../../public/special_banner/c78ae0e04222c1ab3e726eafe08232c2.webp',
        '../../public/special_banner/6f3c83ffbc74baa67e18a2ef0ecf63e8.webp',
        '../../public/special_banner/99ced3f425e39bdf7c8ef1d418e71e86.webp',
        '../../public/special_banner/688f81891c711ed1b323836e2c89a11d.webp',
        '../../public/special_banner/c78ae0e04222c1ab3e726eafe08232c2.webp',
        '../../public/special_banner/99ced3f425e39bdf7c8ef1d418e71e86.webp',
    ];


    const groupedImages = [];
    for (let i = 0; i < images.length; i += 4) {
        groupedImages.push(images.slice(i, i + 5)); // Get 4-5 images per slide
    }

    return (
        <>
            <h3>Sự kiện đặc biệt</h3>
            <div className={styles.container}>
                <div className={styles.carouselWrapper}>
                    <Carousel
                        arrows
                        infinite={false}
                        dotPosition="bottom"
                        slidesToShow={1}
                        className={styles.carousel}

                    >
                        {groupedImages.map((imageGroup, index) => (
                            <div key={index} className={styles.slide}>
                                <div className={styles.imagesContainer}>
                                    {imageGroup.map((image, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`${styles.imageWrapper} ${imgIndex === 4 ? styles.clippedImage : ''}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`slide-${index}-img-${imgIndex}`}
                                                className={styles.imgStyle}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default SlideSpecialBanner;