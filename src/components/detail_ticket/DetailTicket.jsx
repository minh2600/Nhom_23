"use client";
import React from "react";
import { Button } from "antd";
import styles from "./DetailTicket.module.css";
import Header from "../header/Header";
import CategoryMenu from "../category/CategoryMenu";

function DetailTicket() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.wrapper}>
          {/* Event Card */}
          <section className={styles.eventCard}>
            {/* Event Header */}
            <header className={styles.eventHeader}>
              <h1 className={styles.eventTitle}>
                2025 JISOO ASIA TOUR: &quot;LIGHTS, LOVE, ACTION!&quot; IN HANOI
              </h1>
              <div className={styles.dateContainer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f4eb0f0d0a1ad9863472ea6e9f9a3761f4c9026"
                  alt="Calendar"
                  className={styles.icon}
                />
                <time className={styles.dateTime}>
                  18:00 - 20:00, 30 tháng 03, 2025
                </time>
              </div>
              <div className={styles.locationContainer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/032f7602c63c41c82217f4d00e296cdca31766d8"
                  alt="Location"
                  className={styles.icon}
                />
                <address className={styles.venueContainer}>
                  <span className={styles.venueName}>
                    MY DINH INDOOR ATHLETICS ARENA
                  </span>
                  <span className={styles.venueAddress}>
                    Tran Huu Duc, Phường Cầu Diễn, Huyện Nam Từ Liêm, Thành Phố Hà
                    Nội
                  </span>
                </address>
              </div>
            </header>

            {/* Event Footer */}
            <footer className={styles.eventFooter}>
              <div className={styles.divider} />
              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>Giá từ</span>
                <span className={styles.priceValue}>500,000 đ</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/613ebccd1df575b80c3ceae71db4a48b5dd2d7ba"
                  alt="Arrow"
                  className={styles.arrowIcon}
                />
              </div>
              <Button type="primary" className={styles.buyButton}>
                Mua vé ngay
              </Button>
            </footer>
          </section>

          {/* Event Banner */}
          <div className={styles.bannerContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d730b91473d2b68c8105aa271c482fb2679a1956"
              alt="Event banner"
              className={styles.bannerImage}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default DetailTicket;
