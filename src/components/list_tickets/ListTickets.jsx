"use client";
import React, { useState } from "react";
import { Button, Collapse } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./ListTickets.module.css";
const { Panel } = Collapse;
function ListTickets() {
    const [activeKey, setActiveKey] = useState(['1']); // State để theo dõi trạng thái mở/đóng

    // Ticket data
    const tickets = [
        {
            type: "VVIP 1",
            price: "4.800.000 đ",
            className: styles.vvVip3,
            rowClassName: styles.div3,
            styleClass: "vvip1",
        },
        {
            type: "VVIP 2",
            price: "4.800.000 đ",
            className: styles.vvVip4,
            rowClassName: styles.div4,
            styleClass: "vvip2",
        },
        {
            type: "VIP 1",
            price: "4.800.000 đ",
            className: styles.vvVip5,
            rowClassName: styles.div5,
            styleClass: "vip1",
        },
        {
            type: "Vip 2",
            price: "4.800.000 đ",
            className: styles.vvVip6,
            rowClassName: styles.div6,
            styleClass: "vip2",
        },
        {
            type: "A1",
            price: "4.800.000 đ",
            className: styles.vvVip7,
            rowClassName: styles.div7,
            styleClass: "a1",
        },
        {
            type: "A2",
            price: "4.800.000 đ",
            className: styles.vvVip8,
            rowClassName: styles.div8,
            styleClass: "a2",
        },
        {
            type: "B1",
            price: "4.800.000 đ",
            className: styles.vvVip9,
            rowClassName: styles.div9,
            styleClass: "b1",
        },
        {
            type: "B2",
            price: "4.800.000 đ",
            className: styles.vvVip10,
            rowClassName: styles.div10,
            styleClass: "b2",
        },
        {
            type: "C1",
            price: "4.800.000 đ",
            className: styles.vvVip11,
            rowClassName: styles.div11,
            styleClass: "b2",
        },
        {
            type: "C2",
            price: "5.800.000 đ",
            className: styles.vvVip12,
            rowClassName: styles.div12,
            styleClass: "c2",
        },
    ];
    const customExpandIcon = ({ isActive }) => (
        <span style={{ marginLeft: 8 }}>
            {isActive ? <DownOutlined /> : <RightOutlined />}
        </span>
    );
    return (
        <section className={styles.danhschvmrng}>
            <header className={styles.thngtinv}>Thông tin vé</header>

            <Collapse
                bordered={false}
                activeKey={activeKey}
                onChange={(keys) => setActiveKey(keys)}
                expandIcon={customExpandIcon} // Custom icon tại đây
                className="no-padding-collapse"
            >
                <Panel
                    key="1"
                    showArrow={false}
                    header={
                        <section className={styles.div}>
                            <div className={styles.div2}>
                                {/* Thay thế icon cũ bằng icon động */}
                                {activeKey.includes('1') ? <DownOutlined /> : <RightOutlined />}
                                <p className={styles.thng032025}>18:00 - 20:00, 30 tháng 03, 2025</p>
                            </div>
                        </section>
                    }
                >
                    {/* Danh sách vé */}
                    {tickets.map((ticket, index) => (
                        <article key={index} className={ticket.className}>
                            <div className={ticket.rowClassName}>
                                <p className={styles[ticket.styleClass]}>{ticket.type}</p>
                                <p className={styles.css4800000}>{ticket.price}</p>
                            </div>
                        </article>
                    ))}
                </Panel>
            </Collapse>
        </section>
    );
}

export default ListTickets;
