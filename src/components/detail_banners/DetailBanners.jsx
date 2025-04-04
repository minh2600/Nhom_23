import React, { useState } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Image, Typography } from 'antd';
import styles from './DetailBanners.module.css';
const { Title } = Typography;
// Main Component with all functionality consolidated
function DetailBanners() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleArrowClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <article className={styles.mainContainer}>
            {/* Header Section */}
            <header className={styles.headerContainer}>
                <Title level={2} className={styles.sectionTitle}>
                    Giới thiệu
                </Title>
                <div className={styles.divider} />
            </header>

            {/* Content Section */}
            <section className={styles.contentContainer}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d3cb5fdb2e052a7e5180f2daf0fbd977515eca"
                    alt="Concert details banner"
                    preview={false}
                    className={styles.contentImage}
                />

                {/* Các ảnh còn lại sẽ bị ẩn khi thu gọn */}
                {!isCollapsed && (
                    <>
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5224034558c0e1119a9ffe12674a14577a4566"
                            alt="Seating chart"
                            preview={false}
                            className={styles.contentImage}
                        />
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa23541f404bef50d94a5c9a65162d77cc509502"
                            alt="Fan benefits"
                            preview={false}
                            className={styles.contentImage}
                        />
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa308039281defeab393750ec70738487d49b8d"
                            alt="Ticket pricing"
                            preview={false}
                            className={styles.contentImage}
                        />
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f85e9080f0f1c195ecb021e45f495804f8c725a"
                            alt="Additional information"
                            preview={false}
                            className={styles.contentImage}
                        />
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82bd55c80839851ffdb69179bd9d1363845226ec"
                            alt="Terms and conditions"
                            preview={false}
                            className={styles.contentImage}
                        />
                    </>
                )}
            </section>

            {/* Chevron Icon */}
            <div
                onClick={handleArrowClick}
                className={styles.chevronIcon}
                style={{ cursor: 'pointer' }}
            >
                {isCollapsed ? <DownOutlined /> : <UpOutlined />}
            </div>
        </article>
    );
}

export default DetailBanners;
