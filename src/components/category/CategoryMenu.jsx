"use client";
import React from "react";
import { Menu } from "antd";
import styles from "./CategoryMenu.module.css";
import { Link } from "react-router-dom";
import CategoryEvents from "../../pages/user/category_events/CategoryEvents";
const CategoryMenu = () => {
    const menuItems = [
        { key: "music", label: <Link to ={"/music"}>Âm nhạc</Link>, },
        { key: "art", label: "Sân khấu & Nghệ thuật" },
        { key: "sports", label: "Thể thao" },
        { key: "others", label: "Khác" },
    ];

    return (
        <div className={styles.menuContainer}>
            <Menu
                mode="horizontal"
                theme="dark"
                className={styles.menu}
                items={menuItems}
            />
        </div>
    );
};

export default CategoryMenu;
