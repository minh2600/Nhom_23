"use client";
import React from "react";
import { Button } from "antd";
import styles from "./Filter.module.css";

function Filter() {

    return (
        <section className={styles.searchContainer}>
            <h2 className={styles.searchResults}>Kết quả tìm kiếm:</h2>
            <div className={styles.filterContainer}>
                <Button className={styles.dateFilter}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffaecbedda764f84d91e5586e4288ebf216a86ea"
                        alt=""
                        className={styles.filterIcon}
                    />
                    <span className={styles.filterText}>Tất cả các ngày</span>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1533bc1ab7576a7f2bafb120d815c094609f8908"
                        alt=""
                        className={styles.chevronIcon}
                    />
                </Button>
                <Button className={styles.filterButton}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78438470d93cf6b3a7f4efdbb43aa429b7db908b"
                        alt=""
                        className={styles.filterIcon}
                    />
                    <span className={styles.filterText}>Bộ lọc</span>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1533bc1ab7576a7f2bafb120d815c094609f8908"
                        alt=""
                        className={styles.chevronIcon}
                    />
                </Button>
                <Button className={styles.musicFilter}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ef04c30cf547eff537ff76e19240de61008bb6"
                        alt=""
                        className={styles.filterIcon}
                    />
                    <span className={styles.filterText}>Âm nhạc</span>
                </Button>
            </div>
        </section>
    );
}

export default Filter;
