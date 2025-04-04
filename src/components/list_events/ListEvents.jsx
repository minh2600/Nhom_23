"use client";
import React from "react";
import { Card, Typography } from "antd";
import styles from "./ListEvents.module.css";
import { RightOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

function ListEvents() {
    return (
        <>
            <div className={styles.eventGrid}>
                <article className={styles.eventCard}>
                    <Card bordered={false} className={styles.cardWrapper}
                        cover={<img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a20025cc22249f6287d24ebb0d3ab9626bb903ad"
                            alt="JISOO ASIA TOUR"
                            className={styles.eventImage}
                        />}
                        bodyStyle={{ padding: 0 }}>

                        <div className={styles.eventContent}>
                            <Text className={styles.eventTitle}>
                                2025 JISOO ASIA TOUR: `LIGHTS, LOVE, ACTION!` IN HANOI
                            </Text>
                            <div className={styles.eventInfo}>
                                <Text className={styles.eventPrice}>Từ 500.000đ</Text>
                                <div className={styles.eventDate}>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f39b0dd1c00e737ca88f66506d2b8a2dbd42b34e"
                                        alt="Calendar"
                                        className={styles.calendarIcon}
                                    />
                                    <Text className={styles.eventDate}>
                                        ngày 30 tháng 3 năm 2025
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </article>

                <article className={styles.eventCard}>
                    <Card bordered={false} className={styles.cardWrapper}
                        cover={<img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa2f816f94a5fdf528774c1b77f7f3d61e5f690"
                            alt="NOO'S CHILL NIGHT"
                            className={styles.eventImage}
                        />}
                        bodyStyle={{ padding: 0 }}>

                        <div className={styles.eventContent}>
                            <Text className={styles.eventTitle}>
                                NOO CHILL NIGHT THE CONCERT
                            </Text>
                            <div className={styles.eventInfo}>
                                <Text className={styles.eventPrice}>Từ 850.000đ</Text>
                                <div className={styles.eventDate}>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f39b0dd1c00e737ca88f66506d2b8a2dbd42b34e"
                                        alt="Calendar"
                                        className={styles.calendarIcon}
                                    />
                                    <Text className={styles.eventDate}>
                                        ngày 01 tháng 05 năm 2025
                                    </Text>
                                </div>

                            </div>
                        </div>
                    </Card>
                </article>

                <article className={styles.eventCard}>
                    <Card bordered={false} className={styles.cardWrapper} cover={<img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74f766885a529690812a03eefe99ac5c07949907"
                        alt="LULULOLA SHOW"
                        className={styles.eventImage}
                    />}
                        bodyStyle={{ padding: 0 }}>

                        <div className={styles.eventContent}>
                            <Text className={styles.eventTitle}>
                                LULULOLA SHOW TRUNG QUÂN | ĐẾN LÚC THAY ĐỔI RỒI
                            </Text>
                            <div className={styles.eventInfo}>
                                <Text className={styles.eventPrice}>Từ 500.000đ</Text>
                                <div className={styles.eventDate}>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f39b0dd1c00e737ca88f66506d2b8a2dbd42b34e"
                                        alt="Calendar"
                                        className={styles.calendarIcon}
                                    />
                                    <Text className={styles.eventDate}>ngày 05 tháng 04, 2025</Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </article>

                <article className={styles.eventCard}>
                    <Card bordered={false} className={styles.cardWrapper} cover={<img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/687eeba35c3f2e844b5419ab14ba6b004059b394"
                        alt="MÂY LANG THANG"
                        className={styles.eventImage}
                    />}
                        bodyStyle={{ padding: 0 }}>
                        <div className={styles.eventContent}>
                            <Text className={styles.eventTitle}>
                                [MÂY LANG THANG] LIVESHOW LÊ HIẾU & VŨ.
                            </Text>
                            <div className={styles.eventInfo}>
                                <Text className={styles.eventPrice}>Từ 450.000đ</Text>
                                <div className={styles.eventDate}>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f39b0dd1c00e737ca88f66506d2b8a2dbd42b34e"
                                        alt="Calendar"
                                        className={styles.calendarIcon}
                                    />
                                    <Text className={styles.eventDate}>ngày 26 tháng 02, 2023</Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </article>
            </div>
        </>
    );
}

export default ListEvents;
