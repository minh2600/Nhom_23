import React from 'react';
import { Carousel } from 'antd';
import { FireFilled } from '@ant-design/icons';
import styles from './SlideTrendBanner.module.css';

const SlideTrendBanner = () => {
    const images = [
        '../../public/trend_banner/2d2e5a542d0014708874e49314f8d750.jpg',
        '../../public/trend_banner/5d655048eb14e2692ae5d074f615475f.jpg',
        '../../public/trend_banner/6b000b9e0746d397d3075259ded080f5.jpg',
        '../../public/trend_banner/8e002e32d1e883c3615ca708c0293c58.webp',
        '../../public/trend_banner/b956bdb6a82b1ad5f382993f2d64abf1.webp',
        '../../public/trend_banner/d07a0e98febed101c4411527ff160e99.webp',
        '../../public/trend_banner/d09af12e58cebe049ce432dcf109e26b.webp',
        '../../public/trend_banner/e48bd2a83fd262ddfc5265a043ca2524.webp',
        '../../public/trend_banner/9a335280157e09c007871eb2cc1b7ee9.jpg',
        '../../public/trend_banner/3CA5A8.jpg',
    ];

    // Group images into slides of 4-5 images each
    const groupedImages = [];
    for (let i = 0; i < images.length; i += 4) {
        groupedImages.push(images.slice(i, i + 5)); // Get 4-5 images per slide
    }

    return (
        <>
            <h3><FireFilled style={{ color: 'red' }} /> Sự kiện xu hướng</h3>
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
                                    {imageGroup.map((image, imgIndex) => {
                                        const globalIndex = index * 4 + imgIndex + 1; // Calculate global ranking (1-10)
                                        return (
                                            <div
                                                key={imgIndex}
                                                className={`${styles.imageWrapper} ${imgIndex === 4 ? styles.clippedImage : ''}`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`slide-${index}-img-${imgIndex}`}
                                                    className={styles.imgStyle}
                                                />
                                                <div className={styles.rankingBadge}>
                                                    {globalIndex}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default SlideTrendBanner;