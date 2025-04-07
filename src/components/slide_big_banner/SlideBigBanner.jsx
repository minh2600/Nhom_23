import React from 'react';
import { Layout, Typography, Carousel } from 'antd';
import styles from './SlideBigBanner.module.css';
import { useState } from 'react';
const { Header, Content } = Layout;
const { Title, Text } = Typography;

const SlideBigBanner = () => {
    const images = [
        '../../public/images/15cdab78ab0a1dbd36b0ea97719942b6.jpg',
        '../../public/images/a8dff545a691b99731712b43da67556a.jpg',
        '../../public/images/e48bd2a83fd262ddfc5265a043ca2524.jpg',
        '../../public/images/e48bd2a83fd262ddfc5265a043ca2524.jpg',
    ];


    const groupedImages = [];
    for (let i = 0; i < images.length; i += 2) {
        groupedImages.push(images.slice(i, i + 2));
    }

    return (
        <div style={{ width: '100%', padding: '30px 50px 0 50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '1284px', height: 'auto' }}>
                <Carousel
                    arrows
                    infinite={false}
                    dotPosition="bottom"
                    slidesToShow={1} // Mỗi lần hiển thị 1 slide
                >
                    {groupedImages.map((imagePair, index) => (
                        <div key={index}>
                            <div className={styles.contentStyle}>
                                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                    {imagePair.map((image, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={image}
                                            alt={`anh${index * 2 + imgIndex + 1}`}
                                            className={styles.imgStyle}
                                            style={{ width: 'calc(50% - 10px)' }} // Chia đôi chiều rộng trừ khoảng cách
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
export default SlideBigBanner;