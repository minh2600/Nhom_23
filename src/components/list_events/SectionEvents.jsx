
import React from 'react';
import { Card, Typography } from "antd";
import styles from './SectionEvents.module.css';
import {RightOutlined} from '@ant-design/icons';
const { Title, Text } = Typography;


const SectionEvent = () =>{
    return(
        <section className={styles.musicSection}>
                <header className={styles.sectionHeader}>
                    <h3>Âm nhạc</h3>
                    <div className={styles.viewMore}>
                        <Text className={styles.viewMoreText}>Xem thêm</Text>
                        <RightOutlined style={{ color: 'white' }} />
                    </div>
                </header>

            </section>
    )
}

export default SectionEvent;